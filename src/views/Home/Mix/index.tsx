import { mixHowlInitializer } from 'common/howlInitializers';
import * as models from 'common/models';
import { ZIndexes } from 'common/zIndexes';
import BasicIconButton from 'components/BasicIconButton';
import FlexContainer from 'components/FlexContainer';
import { IconName } from 'components/Icon/types';
import ProgressBar from 'components/ProgressBar';
import * as mainMixesActions from 'modules/main/mixes/actions';
import * as mainMixesSelectors from 'modules/main/mixes/selectors';
import * as mixesSelectors from 'modules/mixes/selectors';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useHistory, useRouteMatch } from 'react-router';
import { Container, GradientBG } from './elements';
import MixPost from './MixPost';

function Mix(props: RouteComponentProps) {
    const { params }: { params: { mixId: string } } = useRouteMatch();
    const mix = useSelector(mixesSelectors.selectMixById(params.mixId));
    const history = useHistory();
    const currentPost = useSelector(mainMixesSelectors.selectCurrentPost);
    const dispatch = useDispatch();
    let interval: NodeJS.Timer;

    const playCurrentPost = useCallback(() => {
        dispatch(mainMixesActions.execMixPostCommand.request({ mixId: mix?.id, command: 'PLAY' }));
    }, [dispatch, mix?.id]);
    const nextPost = useCallback(() => {
        dispatch(mainMixesActions.execMixPostCommand.request({ mixId: mix?.id, command: 'NEXT' }));
    }, [dispatch, mix?.id]);

    const returnToHome = useCallback(() => {
        dispatch(mainMixesActions.execMixPostCommand.request({ mixId: mix?.id, command: 'PAUSE' }));
        history.push('/');
    }, [dispatch, history]);

    useEffect(() => {
        if (params.mixId) {
            dispatch(
                mainMixesActions.fetchMixPosts.request({
                    mixId: params.mixId,
                    howlInitializer: mixHowlInitializer({
                        onEnd: () => {
                            nextPost();
                            dispatch(mainMixesActions.resetProgress());
                        },
                        onPause: () => {
                            clearInterval(interval);
                        },
                        onPlay: (a: models.Audio) => {
                            interval = setInterval(() => {
                                const nTicks = a.durationMs / 100;
                                const progressToAdd = 100 / nTicks;

                                dispatch(mainMixesActions.addCurrentPostProgress(progressToAdd));
                            }, 100);
                        },
                        onStop: () => {
                            clearInterval(interval);
                        },
                    }),
                    onSuccess: playCurrentPost,
                }),
            );
        }

        return () => clearInterval(interval);
    }, [params.mixId, dispatch, playCurrentPost]);

    const playPost = useCallback(() => {}, []);
    const pausePost = useCallback(() => {}, []);

    return (
        <Container>
            <GradientBG fallback={mix?.background?.fallback} gradient={mix?.background?.backgroundImage} />
            <div style={{ zIndex: ZIndexes.Content, position: 'relative', height: '100%' }}>
                <FlexContainer justifyContent="space-between">
                    {mix?.postIdsList.map((p, idx) => (
                        <div style={{ margin: '0 3px', flex: 1 }} key={p}>
                            <ProgressBar
                                borderRadius={3}
                                fluid
                                height={6}
                                type="horizontal"
                                progress={idx === currentPost?.index ? currentPost.progress ?? 0 : 0}
                            />
                        </div>
                    ))}
                </FlexContainer>
                <div style={{ margin: '18px 3px 0 0', position: 'absolute', right: 0 }} onClick={returnToHome}>
                    <BasicIconButton iconName={IconName.ChevronDown} iconColor="colorDarkGrayFg" baseColor="colorDarkGrayBg" />
                </div>
                <MixPost mix={mix} postId={currentPost?.postId} playerActions={{ next: nextPost, play: playPost, pause: pausePost }} />
            </div>
        </Container>
    );
}

export default React.memo(Mix);
