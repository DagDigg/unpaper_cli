import Award from 'components/Award';
import { allAwardIds } from 'components/Award/allAwardIds';
import { AwardId } from 'components/Award/types';
import Modal from 'components/Modal';
import * as Text from 'components/Text';
import React from 'react';
import { AwardsContainer, Container } from './elements';

type Props = {
    isOpen: boolean;
    onCancel: () => void;
    onSelectAward: (id: AwardId) => void;
};
export default function ModalAwards(props: Props) {
    return (
        <Modal isOpen={props.isOpen} onCancel={props.onCancel}>
            <Container>
                <Text.Title align="center" weight="extraBold">
                    Give an award
                </Text.Title>
                <Text.Small mb={24} align="center">
                    Show your gratidude by awarding the room owner
                </Text.Small>
                <AwardsContainer>
                    {allAwardIds.map((id) => (
                        <Award key={id} id={id} onClick={props.onSelectAward} />
                    ))}
                </AwardsContainer>
            </Container>
        </Modal>
    );
}
