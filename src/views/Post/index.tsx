import { getAutoplayHowlInitializer } from 'common/howlInitializers';
import { getPostIdFromURL } from 'common/urlUtils';
import { useStopwatch } from 'common/useProgress';
import Button from 'components/Button';
import { getProgress } from 'components/Comment/helpers';
import FlexContainer from 'components/FlexContainer';
import ProgressBar from 'components/ProgressBar';
import * as Text from 'components/Text';
import * as authSelectors from 'modules/auth/selectors';
import * as mainPlayerActions from 'modules/main/player/actions';
import { PlaylistCommand } from 'modules/main/player/types';
import * as mainUsersActions from 'modules/main/users/actions';
import * as mainUsersSelectors from 'modules/main/users/selectors';
import * as playerSelectors from 'modules/player/selectors';
import * as postsActions from 'modules/posts/actions';
import * as postsSelectors from 'modules/posts/selectors';
import randomColor from 'randomcolor';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useHistory } from 'react-router';
import styled from 'styled-components';
import CommentsSection from './CommentsSection';
import Header from './Header';
import ReplySection, { CreateCommentHandler } from './ReplySection';
import useColorScheme, { ColorSchemeContext } from './useColorScheme';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.div<{ bg: string }>`
    flex-grow: 1;
    padding: 0 16px 78px;
    background-color: ${({ bg }) => bg};
`;

function PostComp(props: RouteComponentProps) {
    const [baseColor, setBaseColor] = useState(randomColor({ luminosity: 'light' }));
    const currentAudio = useSelector(playerSelectors.selectCurrent);
    const stopwatch = useStopwatch();
    const colorScheme = useColorScheme(baseColor);
    const post = useSelector(postsSelectors.selectPost(getPostIdFromURL()));
    const postAuthor = useSelector(mainUsersSelectors.selectExtUserInfo(post?.author));
    const userInfo = useSelector(authSelectors.selectUser);

    const history = useHistory();
    const dispatch = useDispatch();

    const randomizeColor = useCallback(() => {
        setBaseColor(randomColor({ luminosity: 'light' }));
    }, []);

    useEffect(() => {
        dispatch(postsActions.getPost.request({ postId: getPostIdFromURL() }));
        post && dispatch(mainUsersActions.getExtUserInfo.request({ userId: post.author, username: '' }));
    }, [dispatch, post]);

    const howlInitializer = getAutoplayHowlInitializer(stopwatch, dispatch);

    const startPlayingComments = ({ cursor, isOP, audioId }: { cursor: number; isOP?: boolean; audioId: string }) => {
        // User selected same comment
        if (currentAudio?.id === audioId) {
            return dispatch(mainPlayerActions.execPlaylistCommand({ command: PlaylistCommand.PlayPauseCurrent }));
        }

        // User selected new comment
        stopwatch.resetTimer();
        dispatch(
            mainPlayerActions.setPostPlaylist({
                postId: post.id,
                cursor,
                isOP,
                onSuccess: () =>
                    dispatch(mainPlayerActions.execPlaylistCommand({ command: PlaylistCommand.StartPlaylist, howlInitializer })),
                howlInitializer: howlInitializer,
            }),
        );
    };

    const handleFollowClick = (userId: string) => {
        dispatch(mainUsersActions.followUser.request({ userIdToFollow: userId }));
    };

    const handleProfileClick = (userId: string) => {
        history.push(`/profile/@${userId}`);
    };

    const createComment = useCallback<CreateCommentHandler>(
        async ({ audioData, message }) => {
            dispatch(
                postsActions.createComment.request({
                    audioBytes: audioData.audioBytes,
                    audioDurationMs: audioData.audioElement.duration * 1000,
                    message,
                    parentId: '',
                    postId: post.id,
                }),
            );
        },
        [dispatch, post?.id],
    );

    const handlePlayComment = startPlayingComments;

    return post?.message && postAuthor ? (
        <ColorSchemeContext.Provider value={colorScheme}>
            <Container>
                <Header
                    postMessage={post.message}
                    colorScheme={colorScheme}
                    userInfo={postAuthor}
                    onPlayAudio={() => startPlayingComments({ cursor: 0, isOP: true, audioId: post.audio.id })}
                    onFollow={handleFollowClick}
                    isExtUser={userInfo?.id !== postAuthor.id}
                    onProfileClick={handleProfileClick}
                />

                <Content bg={colorScheme.lwContrast}>
                    <ReplySection to={postAuthor.username} colorScheme={colorScheme} onCreateComment={createComment} />
                    <FlexContainer>
                        <ProgressBar
                            type="vertical"
                            baseColor={colorScheme.progressBarBG}
                            highlightColor={colorScheme.progressBarHL}
                            progress={getProgress(stopwatch.elapsedTime, currentAudio?.id, post.audio.id)}
                        />
                    </FlexContainer>
                    <CommentsSection
                        currentAudio={currentAudio}
                        onPlayComment={(cursor, audioId) => handlePlayComment({ cursor, isOP: false, audioId })}
                        audioProgress={stopwatch.elapsedTime}
                        commentsList={post.commentsList}
                    />
                </Content>

                <Button size="small" label="Randomize colors" onClick={randomizeColor} />
            </Container>
        </ColorSchemeContext.Provider>
    ) : (
        <Text.Small>Loading</Text.Small>
    );
}

export default React.memo(PostComp);
