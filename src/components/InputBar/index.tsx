import { Customer } from 'api/proto/v1/payment_pb';
import { getRoomIdFromURL } from 'common/urlUtils';
import useClickOutside from 'common/useClickOutside';
import { AwardId } from 'components/Award/types';
import { Dimmer } from 'components/Dimmer';
import Icon from 'components/Icon';
import { IconName, IconSize } from 'components/Icon/types';
import * as authSelectors from 'modules/auth/selectors';
import * as chatSelectors from 'modules/chat/selectors';
import * as mainChatActions from 'modules/main/chat/actions';
import * as mainChatSelectors from 'modules/main/chat/selectors';
import { ChatView } from 'modules/main/chat/types';
import * as mainUsersSelectors from 'modules/main/users/selectors';
import React, { useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    ActionIconWrapper,
    ActionsContainer,
    Input,
    InputWrapper,
    LeftActionsIcon,
    LeftActionsWrapper,
    SendIcon,
    SendIconWrapper,
    StyledFlexContainer,
} from './elements';

type Props = {
    onSubmit: (s: string) => void;
    onSendAward: (id: AwardId) => void;
    onShowRecordingView: () => void;
    customer: Customer.AsObject | null;
};
function InputBar(props: Props) {
    const [q, setQ] = useState('');
    const [focus, setFocus] = useState(false);
    const currChatView = useSelector(mainChatSelectors.selectChatView);
    const actionsRef = useRef(null);
    const user = useSelector(authSelectors.selectUser);
    const dispatch = useDispatch();

    useClickOutside(actionsRef, () => {
        currChatView === ChatView.SHOW_ACTIONS && dispatch(mainChatActions.setChatView(ChatView.IDLE));
    });

    const updateChatView = (v: ChatView) => {
        dispatch(mainChatActions.setChatView(v));
    };

    const showActionsPicker = () => dispatch(mainChatActions.setChatView(ChatView.SHOW_ACTIONS));

    const handleSubmit = useCallback(() => {
        props.onSubmit(q);
        setQ('');
    }, [props, setQ, q]);

    const handleKeyDown = (e: any) => {
        if (e?.keyCode === 13) {
            handleSubmit();
        }
    };

    const handleChange = useCallback((e: any) => setQ(e.target.value), []);

    return (
        <>
            {/* <Dimmer isVisible={currChatView === ChatView.SHOW_ACTIONS} /> */}

            <StyledFlexContainer>
                <LeftActionsWrapper onClick={showActionsPicker}>
                    <LeftActionsIcon />
                </LeftActionsWrapper>
                <InputWrapper isFocused={focus}>
                    <ActionsContainer shouldShow={currChatView === ChatView.SHOW_ACTIONS} ref={actionsRef}>
                        <>
                            <ActionIconWrapper>
                                <Icon name={IconName.TextFilled} size={IconSize.LG} color="mdContrast+1" />
                            </ActionIconWrapper>
                            <ActionIconWrapper onClick={() => updateChatView(ChatView.SHOW_AWARDS_MODAL)}>
                                <Icon name={IconName.TrophyFilled} size={IconSize.LG} color="mdContrast+1" />
                            </ActionIconWrapper>
                            <ActionIconWrapper onClick={props.onShowRecordingView}>
                                <Icon name={IconName.Mic} size={IconSize.LG} color="mdContrast+1" />
                            </ActionIconWrapper>
                        </>
                    </ActionsContainer>
                    <Input
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        placeholder="What are you thinking right now?"
                        onChange={handleChange}
                        value={q}
                        onKeyDown={handleKeyDown}
                    />
                </InputWrapper>
                <SendIconWrapper onClick={handleSubmit}>
                    <SendIcon />
                </SendIconWrapper>
            </StyledFlexContainer>
        </>
    );
}

export default React.memo(InputBar);

{
    /* {roomOwnerInfo.customerInfo?.hasConnectedAccount && user?.id !== roomOwnerId && (
<ActionIconWrapper onClick={() => updateChatView(ChatView.SHOW_DONATION_MODAL)}>
<Icon name={IconName.Dollar} size={IconSize.LG} color="mdContrast+1" />
</ActionIconWrapper>
)} */
}
