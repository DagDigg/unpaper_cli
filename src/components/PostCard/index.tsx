import { getReadableAudioDuration } from 'common/audio';
import * as models from 'common/models';
import Button from 'components/Button';
import { CirclesIconButton } from 'components/Circles';
import { getProgress } from 'components/Comment/helpers';
import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import { IconName, IconSize } from 'components/Icon/types';
import IconButton from 'components/IconButton';
import ProgressBar from 'components/ProgressBar';
import Ripple from 'components/Ripple';
import * as Text from 'components/Text';
import * as playerSelectors from 'modules/player/selectors';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
    AudioContainer,
    Circle,
    Content,
    Footer,
    FooterInfo,
    FooterInfoSection,
    IconMoreContainer,
    MessageContent,
    StyledBaseCard,
} from './elements';

type Props = {
    post: models.Post;
    onClick: (post: models.Post) => void;
    onLikeClick: (post: models.Post) => void;
    isPostAudioPlaying: boolean;
    elapsedTime: number;
};

export default function PostCard(props: Props) {
    const history = useHistory();
    const currentAudio = useSelector(playerSelectors.selectCurrent);
    const isPlayingAudio = !!(currentAudio && currentAudio.isPlaying && currentAudio.id === props.post.audio.id);
    const hasComments = props.post.commentsList.length > 0;
    const hasLikes = props.post.likes > 0;
    const hasMoreThanOneLike = props.post.likes > 1;

    const handleClick = useCallback<React.MouseEventHandler<HTMLDivElement>>(
        (e) => {
            e.stopPropagation();
            props.onClick(props.post);
        },
        [props],
    );

    const handleLikeClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation();
            props.onLikeClick(props.post);
        },
        [props],
    );

    const handleCommentsClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
        history.push('/posts/' + props.post.id);
    };

    return (
        <StyledBaseCard onClick={handleCommentsClick} isPlaying={isPlayingAudio}>
            <IconMoreContainer>
                <Icon name={IconName.MoreFilled} color="mdContrast+1" alpha="78" size={IconSize.XS} />
            </IconMoreContainer>
            <FlexContainer mr={8} alignItems="flex-start" justifyContent="center">
                <Ripple color="#B9BFF1" isAnimating={isPlayingAudio} ringSize={1} avatarSize={44}>
                    <Circle />
                </Ripple>
            </FlexContainer>
            <Content>
                <MessageContent>
                    <Text.Small weight="bold" color="mdContrast+1" mb={4} mt={3}>
                        John Doe
                    </Text.Small>
                    <Text.Small weight="medium" lightColor="smContrast-1" darkColor="smContrast+1" ml={-1} mb={12}>
                        @john_doe
                    </Text.Small>
                    <Text.Regular color="hiContrast">{props.post.message}</Text.Regular>
                </MessageContent>

                <AudioContainer>
                    <div style={{ marginRight: 12 }} onClick={handleClick}>
                        <Icon name={isPlayingAudio ? IconName.Pause : IconName.Play} color="primary" />
                    </div>
                    <ProgressBar
                        fluid
                        borderRadius={100}
                        height={6}
                        highlightColor="#7E87D5"
                        type="horizontal"
                        progress={getProgress(props.elapsedTime, currentAudio?.id, props.post.audio.id)}
                    />
                    <Text.Small mb={3} ml={12}>
                        {getReadableAudioDuration(props.post.audio.durationMs)}
                    </Text.Small>
                </AudioContainer>

                {(hasComments || hasLikes) && (
                    <FooterInfo>
                        <FooterInfoSection>
                            {hasLikes && (
                                <>
                                    <Text.ExtraSmall>Liked by &nbsp;</Text.ExtraSmall>
                                    <Text.ExtraSmall color="hiContrast" weight="bold">
                                        @john_doe
                                    </Text.ExtraSmall>
                                    {hasMoreThanOneLike && (
                                        <>
                                            <Text.ExtraSmall>&nbsp;and&nbsp;</Text.ExtraSmall>{' '}
                                            <Text.ExtraSmall weight="bold">others</Text.ExtraSmall>
                                        </>
                                    )}
                                </>
                            )}
                        </FooterInfoSection>

                        <FooterInfoSection>
                            {hasComments && (
                                <div onClick={handleCommentsClick}>
                                    <Text.ExtraSmall>{props.post.commentsList.length} comment</Text.ExtraSmall>
                                    {props.post.commentsList.length > 1 && <Text.ExtraSmall>s</Text.ExtraSmall>}
                                </div>
                            )}
                        </FooterInfoSection>
                    </FooterInfo>
                )}

                <Footer>
                    <IconButton
                        onClick={handleLikeClick}
                        bgOnlyOnHover
                        name={props.post.hasAlreadyLiked ? IconName.HeartFilled : IconName.Heart}
                        iconRestColor={props.post.hasAlreadyLiked ? 'pink' : 'mdContrast+1'}
                        color="pink"
                    />

                    <IconButton onClick={handleCommentsClick} bgOnlyOnHover name={IconName.CommentsFilled} color="primary" />

                    <FlexContainer>
                        <CirclesIconButton bgOnlyOnHover />
                    </FlexContainer>
                </Footer>
            </Content>
        </StyledBaseCard>
    );
}
