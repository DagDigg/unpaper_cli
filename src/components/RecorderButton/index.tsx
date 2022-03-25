import { AUDIO_MAX_LENGTH_MS } from 'common/constants';
import { AudioData, newRecorder, Recorder } from 'common/recorder';
import { useStopwatch } from 'common/useProgress';
import Icon from 'components/Icon';
import { IconName, IconSize } from 'components/Icon/types';
import ProgressRing from 'components/ProgressRing';
import React, { useCallback, useState } from 'react';
import { Circle, RecorderButtonContainer, RecorderContainer, RecordingIcon } from './elements';

export type DataHandlerFn = (data: AudioData) => void;
type Status = 'IDLE' | 'RECORDING' | 'FINISHED_RECORDING' | 'REPRODUCING_AUDIO';

type Props = {
    onStart: () => void;
    onData: DataHandlerFn;
    threaded?: boolean;
    size: number;
};

function RecorderButton(props: Props) {
    const [recorder, setRecorder] = useState<Recorder | null>(null);
    const [status, setStatus] = useState<Status>('IDLE');
    const [audioTimeout, setAudioTimeout] = useState<NodeJS.Timeout | null>(null);
    const { elapsedTime, startTimer, resetTimer } = useStopwatch();
    const isRecording = status === 'RECORDING';
    const stroke = 8;

    const record = async () => {
        if (!isRecording) {
            return getRecorder().then(async (r) => {
                r.start();
                setRecorder(r);
                props.onStart();
                return await handleStart(r);
            });
        }

        return stopRecording(recorder!);
    };

    const handleStart = async (recorder: Recorder) => {
        startTimer(AUDIO_MAX_LENGTH_MS);
        setStatus('RECORDING');
        setAudioTimeout(
            setTimeout(async () => {
                if (!props.threaded) {
                    return stopRecording(recorder);
                }

                recorder.stop();
                record();
            }, AUDIO_MAX_LENGTH_MS),
        );
    };

    const stopRecording = (recorder: Recorder) => {
        window.clearTimeout(audioTimeout!);
        recorder.stop();
        setStatus('FINISHED_RECORDING');
        setRecorder(null);
        resetTimer();
    };

    const handleStop = useCallback(async () => {}, []);

    const handleData = useCallback(
        (d: AudioData) => {
            d.audioElement.onended = () => {
                setStatus('FINISHED_RECORDING');
            };
            props.onData(d);
        },
        [props],
    );

    const getRecorder = useCallback(async () => {
        return await newRecorder({
            onStop: handleStop,
            onData: handleData,
        });
    }, [handleData, handleStop]);

    return (
        <RecorderContainer>
            <RecorderButtonContainer size={props.size + stroke} onClick={record}>
                <ProgressRing progress={elapsedTime} stroke={stroke}>
                    <Circle size={props.size}>
                        {isRecording ? <RecordingIcon /> : <Icon name={IconName.Mic} size={IconSize.XS} color="white" />}
                    </Circle>
                </ProgressRing>
            </RecorderButtonContainer>
        </RecorderContainer>
    );
}

export default React.memo(RecorderButton);
