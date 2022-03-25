import { MsgSender } from 'common/types';
import Icon from 'components/Icon';
import { IconName, IconSize } from 'components/Icon/types';
import Spinner from 'components/Spinner';
import * as Text from 'components/Text';
import React, { useState } from 'react';
import { AudioDurationContainer, AudioDurationText, PlayIconAndProgressContainer, StyledProgressBar, Wrapper } from './elements';

type Props = {
    audio: HTMLAudioElement;
    sender: MsgSender;
    margin: string;
};
function MessageAudio(props: Props) {
    const { audio, sender, margin } = props;
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioDuration, setAudioDuration] = useState(0);
    const [currentTimeInSeconds, setCurrentTimeInSeconds] = useState(0);
    const [ready, setReady] = useState(true);
    const [progress, setProgress] = useState(0);
    console.log(audio);

    audio.addEventListener('loadeddata', () => {
        setAudioDuration(Math.trunc(audio.duration));
        setReady(true);
    });
    audio.addEventListener('play', () => {
        setIsPlaying(true);
    });
    audio.addEventListener('pause', () => {
        setIsPlaying(false);
    });
    audio.addEventListener('ended', () => {
        setIsPlaying(false);
    });
    audio.addEventListener('timeupdate', () => {
        const percentage = Math.floor((audio.currentTime / audio.duration) * 100);
        setCurrentTimeInSeconds(Math.ceil(audio.currentTime));
        setProgress(percentage);
    });

    const handlePlay = () => {
        if (ready) {
            audio.play();
        }
    };

    const handleStop = () => {
        audio.pause();
    };

    return (
        <Wrapper sender={sender} margin={margin}>
            {ready ? (
                <>
                    <PlayIconAndProgressContainer>
                        <Icon
                            onClick={isPlaying ? handleStop : handlePlay}
                            name={isPlaying ? IconName.Pause : IconName.Play}
                            size={IconSize.LG}
                            color="hiContrast"
                        />
                        <StyledProgressBar progress={progress} />
                    </PlayIconAndProgressContainer>
                    <AudioDurationContainer>
                        <AudioDurationText>
                            {currentTimeInSeconds ? fmtAudioTime(currentTimeInSeconds) : fmtAudioTime(audioDuration)}
                        </AudioDurationText>
                    </AudioDurationContainer>
                </>
            ) : (
                <Spinner />
            )}
        </Wrapper>
    );
}

function fmtAudioTime(seconds: number) {
    const minutes = Math.trunc(seconds / 60);
    const mm = fmtMinutes(minutes);
    const ss = fmtSeconds(seconds, minutes);

    return `${mm}:${ss}`;
}

function fmtMinutes(minutes: number): string {
    if (minutes < 10) {
        // Eg: 02
        return '0' + String(minutes);
    }
    if (minutes > 99) {
        // Maximum ui value
        return '99';
    }
    // Minutes from 10 to 99
    return String(minutes);
}

function fmtSeconds(seconds: number, minutes: number) {
    const secondsToRemove = minutes * 60;
    const ss = seconds - secondsToRemove;
    if (ss < 10) {
        return '0' + String(ss);
    }
    if (ss > 99) {
        return '99';
    }

    return String(ss);
}

export default React.memo(MessageAudio);
