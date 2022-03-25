import { List } from 'api/proto/v1/chat_pb';
import Button from 'components/Button';
import FlexContainer from 'components/FlexContainer';
import FormField from 'components/FormField';
import Icon from 'components/Icon';
import { IconName, IconSize } from 'components/Icon/types';
import Modal from 'components/Modal';
import SuggestionField from 'components/SuggestionField';
import * as Text from 'components/Text';
import React, { useEffect, useState } from 'react';
import { DeleteIconWrapper, UserChip, UserChipContainer } from './elements';

type Props = {
    isOpen: boolean;
    onCancel: () => void;
    onSubmit: (listName: string, membersToAdd: string[][]) => void;
    listToEdit?: List.AsObject;
    isLoading: boolean;
};

export default function ListsModal(props: Props) {
    const [members, setMembers] = useState<string[][]>(props.listToEdit?.allowedUsersMap ?? []);
    const [listName, setListName] = useState(props.listToEdit?.name ?? '');
    const [isUpdating, setIsUpdating] = useState(false);

    const removeMember = (id: string) => {
        setMembers(members.filter((u) => u[1] !== id));
    };

    useEffect(() => {
        if (props.listToEdit) {
            setIsUpdating(true);
            setListName(props.listToEdit.name);
            setMembers(props.listToEdit.allowedUsersMap);
        }
    }, [props]);

    return (
        <Modal isOpen={props.isOpen} onCancel={props.onCancel}>
            <Text.Title align="center">{isUpdating ? 'Edit List' : 'Create List'}</Text.Title>
            <Text.Small mb={28} align="center">
                Lists allows you to restrict access to specific rooms
            </Text.Small>

            <FormField label="List name" onChange={setListName} value={listName} />
            <SuggestionField onSelectItem={(id, u) => setMembers([...members, [id, u]])} />

            <UserChipContainer>
                {members.map((m) => (
                    <UserChip key={m[0]}>
                        <Text.Small color="mdContrast">{m[1]}</Text.Small>
                        <DeleteIconWrapper onClick={() => removeMember(m[0])}>
                            <Icon size={IconSize.SM} name={IconName.DuoCross} color="mdContrast" />
                        </DeleteIconWrapper>
                    </UserChip>
                ))}
            </UserChipContainer>

            <FlexContainer>
                <Button
                    disabled={props.isLoading}
                    size="medium"
                    label={isUpdating ? 'Edit list' : 'Create List'}
                    onClick={() => props.onSubmit(listName, members)}
                />
            </FlexContainer>
        </Modal>
    );
}
