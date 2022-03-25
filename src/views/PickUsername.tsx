import { CENTER_CONTENT_WIDTH } from 'common/constants';
import { goToNextRoute } from 'common/nextRoute';
import Button from 'components/Button';
import FormField from 'components/FormField';
import * as Text from 'components/Text';
import * as authActions from 'modules/auth/actions';
import * as authSelectors from 'modules/auth/selectors';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
    width: ${CENTER_CONTENT_WIDTH + 'px'};
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20vh 24px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const FormContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    margin: -8px;
    & > * {
        margin: 8px;
    }

    & > div:first-child {
        flex: 8 0 257px;
    }
    & > div:last-child {
        min-width: 192px;
        margin-bottom: 22px;
        flex: 4 0 0%;
    }
`;

export default function PickUsername(_: RouteComponentProps) {
    const user = useSelector(authSelectors.selectUser);
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (user && user.username === '') {
            // Can visit the page
            return;
        }
        // Can't visit the page
        goToNextRoute();
    }, [user]);

    const dispatch = useDispatch();

    return (
        <Container>
            <Text.Title>Pick an username</Text.Title>
            <Text.Regular>Choose an username that you like.</Text.Regular>
            <Text.Regular mt={-6} mb={44}>
                It will be displayed alongside the message that you send
            </Text.Regular>
            <FormContainer>
                <FormField label="Username" placeholder="Empty spaces are not allowed" onChange={setUsername} />
                <Button
                    mt={16}
                    size="medium"
                    onClick={() => dispatch(authActions.updateUsername.request({ username }))}
                    label="Set username"
                />
            </FormContainer>
        </Container>
    );
}
