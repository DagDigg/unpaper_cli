import { RouteComponentProps } from 'react-router';
import { List } from 'api/proto/v1/chat_pb';
import Button from 'components/Button';
import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import { IconName, IconSize } from 'components/Icon/types';
import Link from 'components/Link';
import * as Text from 'components/Text';
import * as listsActions from 'modules/lists/actions';
import * as listsSelectors from 'modules/lists/selectors';
import * as mainListsSelectors from 'modules/main/lists/selectors';
import * as mainListsActions from 'modules/main/lists/actions';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Circle } from './elements';
import ListModal from './ListModal';
import { ListModalStatus } from 'modules/main/lists/types';

export default function Lists(_: RouteComponentProps) {
    const lists = useSelector(listsSelectors.selectLists);
    const [listToEdit, setListToEdit] = useState<List.AsObject>();
    const listsModalStatus = useSelector(mainListsSelectors.selectListsModalStatus);
    const isEditing = [ListModalStatus.Editing, ListModalStatus.EditingLoading].includes(listsModalStatus);
    const isCreating = [ListModalStatus.Creating, ListModalStatus.CreatingLoading].includes(listsModalStatus);
    const hasAnyList = lists.length > 0;

    const dispatch = useDispatch();

    const handleCreateList = (listName: string, allowedUsersMap: string[][]) => {
        // @ts-ignore
        dispatch(listsActions.createList.request({ name: listName, allowedUsersMap }));
    };

    const handleUpdateList = (listName: string, allowedUsersMap: string[][]) => {
        // @ts-ignore
        dispatch(listsActions.updateList.request({ name: listName, allowedUsersMap, id: listToEdit.id }));
    };

    const startCreatingList = () => {
        dispatch(mainListsActions.setListsModalStatus(ListModalStatus.Creating));
    };
    const startEditingList = (l: List.AsObject) => {
        setListToEdit(l);
        dispatch(mainListsActions.setListsModalStatus(ListModalStatus.Editing));
    };

    const handleCancelCreate = () => {
        dispatch(mainListsActions.setListsModalStatus(ListModalStatus.Closed));
    };
    const handleCancelEdit = () => {
        setListToEdit(undefined);
        dispatch(mainListsActions.setListsModalStatus(ListModalStatus.Closed));
    };

    useEffect(() => {
        dispatch(listsActions.getAllLists.request());
    }, [dispatch]);

    return (
        <>
            <Text.Large mt={40}>My lists</Text.Large>
            <Text.Regular>Create or edit an existing list</Text.Regular>

            {!hasAnyList && <EmtyState onStartCreatingList={startCreatingList} />}
            {hasAnyList &&
                lists.map((l) => (
                    <FlexContainer key={l.id} mt={40} justifyContent="space-between">
                        <Text.Subtitle>{l.name}</Text.Subtitle>
                        <Link to="/" label="Edit" onClick={() => startEditingList(l)} />
                    </FlexContainer>
                ))}

            <ListModal
                isOpen={isCreating}
                isLoading={listsModalStatus === ListModalStatus.CreatingLoading}
                onCancel={handleCancelCreate}
                onSubmit={handleCreateList}
            />
            <ListModal
                isOpen={isEditing}
                isLoading={listsModalStatus === ListModalStatus.EditingLoading}
                onCancel={handleCancelEdit}
                onSubmit={handleUpdateList}
                listToEdit={listToEdit}
            />
        </>
    );
}

function EmtyState({ onStartCreatingList }: { onStartCreatingList: () => void }) {
    return (
        <FlexContainer mt={80} flexDirection="column">
            <Circle>
                <Icon name={IconName.DuoList} size={IconSize.MX} color="mdContrast+1" />
            </Circle>
            <Text.Subtitle weight="medium" mt={24} align="center">
                Create your first list to get started
            </Text.Subtitle>
            <Button size="medium" mt={36} onClick={onStartCreatingList} label="Create List" />
        </FlexContainer>
    );
}
