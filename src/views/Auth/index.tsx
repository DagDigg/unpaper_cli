import { MovingCircles } from 'components/MovingCircles';
import Logo from 'components/Logo';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { Route, RouteComponentProps, Switch, useRouteMatch } from 'react-router';
import styled from 'styled-components';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    position: relative;
    height: 100vh;
    background-color: ${({ theme }) => theme.smContrast};
    flex: 6;
    overflow: hidden;
    @media (max-width: 1024px) {
        display: none;
    }
`;

export const CirclesContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-50%);
    left: 50%;
    min-height: 424px;
    min-width: 700px;
`;

const Right = styled.div`
    min-height: 100vh;
    flex-grow: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledLogo = styled(Logo)`
    margin: 0 6px;
    top: 0;
    position: absolute;
    align-self: flex-start;
`;

function App(props: RouteComponentProps) {
    const { path } = useRouteMatch();

    return (
        <>
            <Container>
                <Left>
                    <CirclesContainer>
                        <MovingCircles />
                    </CirclesContainer>
                </Left>
                <Right>
                    <StyledLogo isMobile={isMobile} />
                    <Switch>
                        <Route path={`${path}/signup`} component={SignUp} />
                        <Route path={`${path}/signin`} component={SignIn} />
                    </Switch>
                </Right>
            </Container>
        </>
    );
}

export default App;
