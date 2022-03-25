import { ZIndexes } from 'common/zIndexes';
import Icon from 'components/Icon';
import { IconName } from 'components/Icon/types';
import * as Text from 'components/Text';
import React, { useCallback, useState } from 'react';
import Mesh from 'views/Mesh';
import { ActionsContainer, CloseIconWrapper, PauseIcon, PlayIcon, RecordIcon, RecordingIndicator, SendWrapper } from './elements';
import { AudioData, getMIMEType, newRecorder, Recorder } from 'common/recorder';
import { blobToUint8Arr } from 'common/audio';
import { AUDIO_MAX_LENGTH_MS } from 'common/constants';
import { sleep } from 'common/utils';

type Props = {
    isVisible: boolean;
    onSubmit: (data: Uint8Array) => void;
    onClose: () => void;
};

function Recording(props: Props) {
    const [recorder, setRecorder] = useState<Recorder | null>(null);
    const [audio, setAudio] = useState<HTMLAudioElement>();
    const [audioData, setAudioData] = useState<AudioData>();
    const [isRecording, setIsRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const getRecorder = useCallback(async () => {
        return await newRecorder({
            onStop: handleStop,
            onData: handleData,
        });
    }, []);

    const record = async () => {
        if (!recorder) {
            getRecorder().then(async (r) => {
                r.start();
                setRecorder(r);
                return await handleStart();
            });
        }

        if (recorder) {
            return recorder.stop();
        }
    };

    const handleStart = async () => {
        setIsRecording(true);
        await sleep(AUDIO_MAX_LENGTH_MS);
        if (isRecording) {
            recorder?.stop();
        }
    };

    const handleStop = async () => {};

    const handleData = (data: AudioData) => {
        setAudioData(data);
        const audio = document.createElement('audio');
        audio.onended = () => setIsPlaying(false);
        const source = document.createElement('source');
        source.type = getMIMEType() ?? '';
        source.src = data.audioUrl;
        audio.appendChild(source);
        setAudio(audio);
        setIsRecording(false);
        setAudioData(data);
        setRecorder(null);
    };

    const togglePlay = () => {
        if (isPlaying) {
            audio?.pause();
        }
        if (!isPlaying) {
            audio?.load();
            audio?.play();
        }

        setIsPlaying(!isPlaying);
    };

    const sendAudio = async () => {
        const uint8Arr = await blobToUint8Arr(audioData!.audioBlob);
        props.onSubmit(uint8Arr);
    };

    const handleClose = useCallback(() => {
        props.onClose();
    }, [props]);

    return (
        <Mesh visible={props.isVisible}>
            <div style={{ height: '100%', position: 'relative', zIndex: ZIndexes.Content, display: 'flex', flexDirection: 'column' }}>
                <ActionsContainer>
                    <div style={{ display: 'flex', flexGrow: 1, flexBasis: 0 }} />
                    <div onClick={record}>
                        <RecordIcon />
                    </div>
                    <div onClick={togglePlay} style={{ display: 'flex', flexGrow: 1, flexBasis: 0 }}>
                        <div style={{ marginRight: 'auto' }}>{audio ? isPlaying ? <PauseIcon /> : <PlayIcon /> : null}</div>
                    </div>
                </ActionsContainer>

                <div onClick={sendAudio} style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)' }}>
                    {audio && (
                        <SendWrapper>
                            <Text.RegularBig color="white" mr={8}>
                                Send
                            </Text.RegularBig>
                            <Icon name={IconName.Send} />
                        </SendWrapper>
                    )}
                </div>
                {isRecording && <RecordingIndicator />}
                <CloseIconWrapper onClick={handleClose}>
                    <Icon name={IconName.ChevronDown} />
                </CloseIconWrapper>
            </div>
        </Mesh>
    );
}

export default React.memo(Recording);
