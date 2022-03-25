import appleTouchIcon from 'assets/apple-touch-icon.png';
import { segments } from 'common/paths';
import AuthenticatedRoute from 'components/AuthenticatedRoute';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Route, RouteComponentProps, Switch, useRouteMatch } from 'react-router';
import { ThemeContext } from 'styled-components';
import Chat from 'views/Chat';
import Lists from 'views/Lists';
import Profile from 'views/Profile';
import Post from '../Post';
import Activity from './Activity';
import BottomBar from './BottomBar';
import Circles from './Circles';
import Conversations from './Conversations';
import CreateRoom from './CreateRoom';
import { CenterContainer, LeftContainer, MainContainer, RightContainer } from './elements';
import Mix from './Mix';
import PostsList from './PostsList';
import RightArea from './RightArea';
import Sidebar from './Sidebar';

export default function Home(_: RouteComponentProps) {
    const { path } = useRouteMatch();
    const theme = useContext(ThemeContext);

    return (
        <>
            <Helmet>
                <meta name="theme-color" content={theme.light ? theme.white : theme['smContrast-1']}></meta>
                <link rel="apple-touch-icon" sizes="180x180" type="image/png" href={appleTouchIcon} />
            </Helmet>
            <MainContainer>
                <LeftContainer>
                    <Sidebar />
                </LeftContainer>
                <BottomBar />
                <CenterContainer>
                    <Switch>
                        <Route path={`${path}posts/*`} component={Post} />
                        <AuthenticatedRoute path={`${path}circles`} component={Circles} />
                        <AuthenticatedRoute path={`${path}lists`} component={Lists} />
                        <AuthenticatedRoute path={`${path}profile/:username`} component={Profile} />
                        <AuthenticatedRoute path={`${path}activity`} component={Activity} />
                        <AuthenticatedRoute path={`${path}create-room`} component={CreateRoom} />
                        <AuthenticatedRoute path={`${path}mix/:${segments.mixId}`} component={Mix} />
                        <AuthenticatedRoute path={`${path}conversations/:${segments.conversationId}`} component={Chat} />
                        <AuthenticatedRoute path={`${path}conversations`} component={Conversations} />
                        <AuthenticatedRoute path={`${path}/`} component={PostsList} />
                    </Switch>
                </CenterContainer>
                <RightContainer>
                    <RightArea />
                </RightContainer>
            </MainContainer>
        </>
    );
}
