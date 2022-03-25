import { DEFAULT_AUDIO_FORMAT } from 'common/constants';
import { useStopwatch } from 'common/useProgress';
import Icon from 'components/Icon';
import { IconName } from 'components/Icon/types';
import IconButton from 'components/IconButton';
import ProgressBar from 'components/ProgressBar';
import { Howl } from 'howler';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 8px 0;
    width: 100%;
`;

type Props = {
    audioElement: HTMLAudioElement;
    onDelete: (id: string) => void;
    audioUrl: string;
    id: string;
};
function AudioRow(props: Props) {
    const { elapsedTime, startTimer, stopTimer, resetTimer, ended } = useStopwatch();
    const [sound, setSound] = useState<Howl>();
    const audioDuration = props.audioElement.duration * 1000;

    useEffect(() => {
        setSound(
            new Howl({
                src: [props.audioUrl],
                html5: true,
                format: [DEFAULT_AUDIO_FORMAT],
                onplay: () => {
                    startTimer(audioDuration);
                },
                onpause: () => {
                    stopTimer();
                },
                onplayerror: (_, err) => console.error(err),
                onloaderror: (_, err) => console.error(err),
                preload: 'metadata',
            }),
        );
    }, [props.audioUrl, audioDuration, startTimer, stopTimer]);

    const togglePlay = () => {
        if (sound) {
            if (ended) resetTimer();
            sound.load();
            sound.playing() ? sound.pause() : sound.play();
        }
    };

    return (
        <Container>
            <div style={{ cursor: 'pointer' }} onClick={togglePlay}>
                <Icon name={getPlayerIcon(ended, sound?.playing())} color="primary" />
            </div>
            <div style={{ margin: '0 18px 0 6px', width: '100%' }}>
                <ProgressBar highlightColor="#7E87D5" borderRadius={8} fluid height={6} progress={elapsedTime} type="horizontal" />
            </div>
            <div style={{ marginLeft: 'auto' }}>
                <IconButton onClick={() => props.onDelete(props.id)} name={IconName.Cross} size="sm" color="red" />
            </div>
        </Container>
    );
}

function getPlayerIcon(audioEnded: boolean, isPlaying?: boolean): IconName {
    if (audioEnded) return IconName.Play;

    return isPlaying ? IconName.Pause : IconName.Play;
}

export default React.memo(AudioRow);
