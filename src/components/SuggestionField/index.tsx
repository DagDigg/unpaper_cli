import useClickOutside from 'common/useClickOutside';
import useDebounce from 'common/useDebounce';
import FormField from 'components/FormField';
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as mainUsersActions from 'modules/main/users/actions';
import { Dropdown, DropdownItem } from './elements';
import * as mainUsersSelectors from 'modules/main/users/selectors';
import * as Text from 'components/Text';
import { UserSuggestion } from 'api/proto/v1/chat_pb';

type Props = {
    onSelectItem: (id: string, u: string) => void;
};
function SuggestionField(props: Props) {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [formWidth, setFormWidth] = useState(0);
    const users = useSelector(mainUsersSelectors.selectUserSuggestions);

    const dispatch = useDispatch();
    useClickOutside(dropdownRef, () => setShowDropdown(false));

    const getUserSuggestions = useDebounce((query) => {
        !showDropdown && query !== '' && setShowDropdown(true);
        query === '' && setShowDropdown(false);
        dispatch(mainUsersActions.getUserSuggestions.request({ query }));
    }, 500);

    const handleChange = useCallback((q: string) => {
        setQuery(q);
    }, []);

    const handleKeyUp = () => {
        getUserSuggestions(query);
    };

    useLayoutEffect(() => {
        setFormWidth(formRef.current?.offsetWidth ?? 0);
    }, [formRef]);

    const handleSelectItem = (u: UserSuggestion.AsObject) => {
        setQuery('');
        setShowDropdown(false);
        props.onSelectItem(u.id, u.username);
    };

    return (
        <FormField
            value={query}
            customRef={formRef}
            label="Add members"
            placeholder="Search by username"
            onChange={handleChange}
            onKeyUp={handleKeyUp}
        >
            {showDropdown ? (
                <Dropdown width={formWidth} ref={dropdownRef} height={users.length * 43 + 16}>
                    {users.map((u) => (
                        <DropdownItem key={u.id} onClick={() => handleSelectItem(u)}>
                            <Text.Regular>{u.username}</Text.Regular>
                        </DropdownItem>
                    ))}
                </Dropdown>
            ) : (
                <></>
            )}
        </FormField>
    );
}

export default React.memo(SuggestionField);
