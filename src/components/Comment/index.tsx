import * as models from 'common/models';
import { FakeAvatar } from 'components/Composer/elements';
import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import { IconName } from 'components/Icon/types';
import ProgressBar from 'components/ProgressBar';
import Ripple from 'components/Ripple';
import * as playerSelectors from 'modules/player/selectors';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ColorSchemeContext } from 'views/Post/useColorScheme';
import { Author, Container, Footer, LikesCount, Message } from './elements';
import { getProgress } from './helpers';

type Props = {
    idx: number;
    comment: models.Comment;
    progress: number;
    onPlayComment: (cursor: number, audioId: string) => void;
};

export default function Comment(props: Props) {
    const currentAudio = useSelector(playerSelectors.selectCurrent);
    const colorScheme = useContext(ColorSchemeContext);
    const isCurrentAudio = !!currentAudio && currentAudio.id === props.comment.audio?.id;
    const isPlayingAudio = isCurrentAudio && !!currentAudio?.isPlaying;
    const getCommentProgress = () => getProgress(props.progress, currentAudio?.id, props.comment.audio?.id);

    const handleSetLike = () => {};

    const handlePlayComment = () => {
        props.onPlayComment(props.idx, props.comment.audio?.id ?? '');
    };

    return (
        <>
            <Container
                isActive={isPlayingAudio}
                highlightColor={colorScheme.progressBarHL}
                baseColor={colorScheme.progressBarBG}
                onClick={handlePlayComment}
            >
                <Ripple color={colorScheme.ripple} isAnimating={isPlayingAudio} avatarSize={64}>
                    <FakeAvatar size={64} />
                </Ripple>

                <Author>{props.comment.author}</Author>
                <Message>{props.comment.message}</Message>

                <Footer>
                    <FlexContainer>
                        <Icon name={IconName.Heart} color="pink" />
                        <LikesCount onClick={handleSetLike}>27</LikesCount>
                    </FlexContainer>
                </Footer>
            </Container>
            <FlexContainer>
                <ProgressBar
                    type="vertical"
                    baseColor={colorScheme.progressBarBG}
                    highlightColor={colorScheme.progressBarHL}
                    progress={getCommentProgress()}
                />
            </FlexContainer>
        </>
    );
}
