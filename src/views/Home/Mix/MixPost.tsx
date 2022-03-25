import { Mix } from 'api/proto/v1/mixes_pb';
import { FakeAvatar } from 'components/Composer/elements';
import FlexContainer from 'components/FlexContainer';
import { IconName, IconSize } from 'components/Icon/types';
import Loader from 'components/Loader';
import Ripple from 'components/Ripple';
import * as Text from 'components/Text';
import * as mainMixesSelectors from 'modules/main/mixes/selectors';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { MixPostContainer, StyledBasicIconButton } from './elements';

type PlayerAction = (mixId?: string, postId?: string) => void;
export type PlayerActions = {
    pause: PlayerAction;
    play: PlayerAction;
    next: PlayerAction;
};
type Props = {
    postId?: string;
    mix?: Mix.AsObject;
    playerActions: PlayerActions;
};
function MixPost(props: Props) {
    const playableMixPost = useSelector(mainMixesSelectors.selectMixPost(props.mix?.id, props.postId));
    const containerRef = useRef<HTMLDivElement>(null);

    const handlePostNavigationClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const halfRect = rect.width / 2;
        const x = e.clientX - rect.left; //x position within the element.
        const y = e.clientY - rect.top; //y position within the element.

        // User clicked right half
        if (x > halfRect) return props.playerActions.next(props.mix?.id, props.postId);
        // User clicked left half
    };

    return playableMixPost ? (
        <>
            <MixPostContainer ref={containerRef} onClick={handlePostNavigationClick}>
                <Ripple avatarSize={98} isAnimating>
                    <FakeAvatar size={98} />
                </Ripple>
                {/* TODO: author should contain username */}
                <Text.RegularBig color="white" mt={36}>
                    @john_doe
                </Text.RegularBig>
                <Text.Title color="white" mt={48}>
                    {playableMixPost.post?.message}
                </Text.Title>

                <FlexContainer mt={200}>
                    <StyledBasicIconButton
                        iconSize={IconSize.SM}
                        iconName={playableMixPost.post?.hasAlreadyLiked ? IconName.HeartFilled : IconName.Heart}
                        iconColor="colorPinkFg"
                        baseColor="colorPinkBg"
                    />
                    <StyledBasicIconButton
                        iconSize={IconSize.SM}
                        iconName={IconName.CommentsFilled}
                        iconColor="colorGreenFg"
                        baseColor="colorGreenBg"
                    />
                    <StyledBasicIconButton
                        iconSize={IconSize.SM}
                        iconName={IconName.Export}
                        iconColor="colorDarkGrayFg"
                        baseColor="colorDarkGrayBg"
                    />
                </FlexContainer>
            </MixPostContainer>
        </>
    ) : (
        <Loader />
    );
}

export default React.memo(MixPost);
