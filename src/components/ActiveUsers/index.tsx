import { ChatUser } from 'api/proto/v1/chat_pb';
import useClickOutside from 'common/useClickOutside';
import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import { IconName } from 'components/Icon/types';
import { Dropdown, DropdownItem } from 'components/SuggestionField/elements';
import * as Text from 'components/Text';
import React, { useRef, useState } from 'react';
import { ScrollableContainer, StyledDimmer, StyledFlexContainer, Subtitle, StyledDropdown, Username } from './elements';

type Props = {
    users: ChatUser.AsObject[];
    isVisible: boolean;
    onClose: () => void;
};
export default function ActiveUsers(props: Props) {
    const [dropdownId, setDropdownId] = useState('');
    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, props.onClose);

    return (
        <StyledDimmer isVisible={props.isVisible}>
            <FlexContainer fluid flexDirection="column" mr={8}>
                <Subtitle visible={props.isVisible}>Active members</Subtitle>
                <ScrollableContainer ref={ref} visible={props.isVisible}>
                    {props.users.map((u) => (
                        <StyledFlexContainer key={u.id}>
                            <div style={{ position: 'relative', width: 200 }}>
                                {dropdownId === u.id && (
                                    <StyledDropdown solid>
                                        <DropdownItem>
                                            <Text.Regular color="mdContrast+1" mr={8}>
                                                Add friend
                                            </Text.Regular>
                                            <Icon name={IconName.Plus} color="mdContrast" />
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Text.Regular color="mdContrast+1" mr={8}>
                                                Send message
                                            </Text.Regular>
                                            <Icon name={IconName.Plus} color="mdContrast" />
                                        </DropdownItem>
                                    </StyledDropdown>
                                )}
                            </div>
                            <Username
                                dimmed={dropdownId !== '' && dropdownId !== u.id}
                                color="mdContrast+1"
                                onClick={() => setDropdownId(u.id === dropdownId ? '' : u.id)}
                            >
                                {u.username}
                            </Username>
                            <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: 'wheat', marginLeft: 6 }} />
                        </StyledFlexContainer>
                    ))}
                </ScrollableContainer>
            </FlexContainer>
        </StyledDimmer>
    );
}
