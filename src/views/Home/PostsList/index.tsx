import { getAutoplayHowlInitializer } from 'common/howlInitializers';
import * as models from 'common/models';
import { useStopwatch } from 'common/useProgress';
import Composer from 'components/Composer';
import FlexContainer from 'components/FlexContainer';
import PostCard from 'components/PostCard';
import * as Text from 'components/Text';
import * as mixesSelectors from 'modules/mixes/selectors';
import TopTitle from 'components/TopTitle';
import * as authActions from 'modules/auth/actions';
import * as mainPlayerActions from 'modules/main/player/actions';
import { PlaylistCommand } from 'modules/main/player/types';
import * as playerSelectors from 'modules/player/selectors';
import * as postsActions from 'modules/posts/actions';
import * as postsSelectors from 'modules/posts/selectors';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useHistory } from 'react-router';
import styled from 'styled-components';
import MixesCard from 'components/MixesCard';

const PostsContainer = styled.div`
    margin-bottom: 64px;
`;

const CategoryContainer = styled.div`
    background-color: ${({ theme }) => (theme.light ? theme.smContrast : theme.smContrast)}97;
    padding: 12px 12px 12px 0;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.smContrast};
    border-top: 1px solid ${({ theme }) => theme.smContrast};
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
`;

const Category = styled.div<{ selected?: boolean }>`
    border-radius: 100px;
    background-color: ${({ theme, selected }) => (selected ? theme.hiContrast : theme.light ? theme.white : theme.lwContrast)};
    padding: 12px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
    ${Text.Regular} {
        color: ${({ selected, theme }) => (selected ? (theme.light ? theme.white : theme.lwContrast) : theme.mdContrast)}!important;
    }
`;

const MixesContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 8px 0;
    padding: 0 4px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
`;

export default function PostsList(_: RouteComponentProps) {
    const posts = useSelector(postsSelectors.selectPosts);
    const currentAudio = useSelector(playerSelectors.selectCurrent);
    const mixes = useSelector(mixesSelectors.selectAllMixes);
    const history = useHistory();
    const stopwatch = useStopwatch();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postsActions.getPosts.request({ category: 'foo' }));
    }, [dispatch]);

    const howlInitializer = getAutoplayHowlInitializer(stopwatch, dispatch);
    const handlePlayAudio = useCallback(
        (post: models.Post) => {
            if (!post) {
                // Base case of recursion
                return;
            }
            if (post.audio.id === currentAudio?.id) {
                // User clicked same audio
                return dispatch(mainPlayerActions.execPlaylistCommand({ command: PlaylistCommand.PlayPauseCurrent }));
            }

            // User clicked different audio
            stopwatch.resetTimer();
            dispatch(
                mainPlayerActions.setHomePlaylist({
                    postId: post.id,
                    onSuccess: () => dispatch(mainPlayerActions.execPlaylistCommand({ command: PlaylistCommand.StartPlaylist })),
                    howlInitializer,
                }),
            );
        },
        [dispatch, currentAudio, howlInitializer, stopwatch],
    );

    const handleLikeClick = useCallback(
        (post: models.Post) => {
            return dispatch(postsActions.likePost.request({ postId: post.id }));
        },
        [dispatch],
    );

    const handleMixClick = useCallback(
        (mixId: string) => {
            return history.push(`/mix/${mixId}`);
        },
        [history],
    );

    return (
        <>
            <TopTitle scrollEnabled label="Trending" />

            <Composer />
            <CategoryContainer>
                <Category selected>
                    <Text.Regular weight="bold" color="white">
                        Trending
                    </Text.Regular>
                </Category>
                <Category>
                    <Text.Regular>Science</Text.Regular>
                </Category>
                <Category>
                    <Text.Regular>Sports</Text.Regular>
                </Category>
                <Category>
                    <Text.Regular>Meditation</Text.Regular>
                </Category>
                <Category>
                    <Text.Regular>Gaming</Text.Regular>
                </Category>
            </CategoryContainer>

            <Text.Title ml={16} mt={28}>
                Daily mixes
            </Text.Title>
            <Text.Regular weight="regular" ml={16} mt={14} mr={72} lh={22}>
                Discover the best content for you, posted today.
            </Text.Regular>
            <MixesContainer>
                {mixes.map((m) => (
                    <MixesCard
                        key={m.id}
                        fallbackBackground={m.background?.fallback ?? '#000'}
                        backgroundImage={m.background?.backgroundImage ?? ''}
                        onClick={handleMixClick}
                        mixId={m.id}
                        title={m.title}
                    />
                ))}
            </MixesContainer>
            <PostsContainer>
                {Object.values(posts).map((p) => (
                    <PostCard
                        key={p.id}
                        isPostAudioPlaying={currentAudio?.id === p.audio.id && currentAudio.isPlaying}
                        post={p}
                        onLikeClick={() => handleLikeClick(p)}
                        onClick={handlePlayAudio}
                        elapsedTime={stopwatch.elapsedTime}
                    />
                ))}
            </PostsContainer>
            <button onClick={() => {}}>LOAD MORE</button>
            <button onClick={() => history.push('/room/1')}>ROOM</button>
            <button onClick={() => dispatch(authActions.signOut.request())}>Sign Out</button>
        </>
    );
}
