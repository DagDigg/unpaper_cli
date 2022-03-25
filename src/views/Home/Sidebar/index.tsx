import { IconName } from 'components/Icon/types';
import { History } from 'history';
import * as authSelectors from 'modules/auth/selectors';
import * as notificationsSelectors from 'modules/notifications/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Container, StyledCircleIcon, StyledIcon, StyledLink, StyledLinkContainer, StyledNotificationDot } from './elements';

export const NavLink: React.FC<{ activePath: string; to: string; exact?: boolean; className?: string }> = (props) => {
    const isActive = () => {
        if (props.exact) return props.activePath === props.to;
        return window.location.pathname.includes(props.to);
    };
    return (
        <StyledLink className={props.className} weight="bold" ml={18} color={isActive() ? 'primary' : 'mdContrast'}>
            {props.children}
        </StyledLink>
    );
};

const LinkContainer: React.FC<{ to: string; history: History }> = (props) => (
    <StyledLinkContainer onClick={() => props.history.push(props.to)}>{props.children}</StyledLinkContainer>
);

export default function Sidebar() {
    const hasUnreadNotifications = useSelector(notificationsSelectors.selectHasUnreadNotifications);
    const activePath = window.location.pathname;
    const history = useHistory();
    const userInfo = useSelector(authSelectors.selectUser);

    return (
        userInfo && (
            <Container>
                <LinkContainer to="/" history={history}>
                    <StyledIcon color={activePath === '/' ? 'primary' : 'mdContrast'} name={IconName.DuoHome} />
                    <NavLink exact activePath={activePath} to={'/'}>
                        Home
                    </NavLink>
                </LinkContainer>
                <LinkContainer to="/circles" history={history}>
                    <StyledCircleIcon color={activePath.includes('/circles') ? 'primary' : 'mdContrast'} />
                    <NavLink activePath={activePath} to="/circles">
                        Circles
                    </NavLink>
                </LinkContainer>
                <LinkContainer to={`/profile/@${userInfo?.username}`} history={history}>
                    <StyledIcon color={activePath.includes('/profile') ? 'primary' : 'mdContrast'} name={IconName.DuoProfile} />
                    <NavLink activePath={activePath} to={'/profile'}>
                        Profile
                    </NavLink>
                </LinkContainer>
                <LinkContainer to="/lists" history={history}>
                    <StyledIcon color={activePath.includes('/lists') ? 'primary' : 'mdContrast'} name={IconName.DuoList} />
                    <NavLink activePath={activePath} to="/lists">
                        My Lists
                    </NavLink>
                </LinkContainer>
                <LinkContainer to="/settings" history={history}>
                    <StyledIcon color={activePath.includes('/settings') ? 'primary' : 'mdContrast'} name={IconName.DuoSettings} />
                    <NavLink activePath={activePath} to="/settings">
                        Settings
                    </NavLink>
                </LinkContainer>
                <LinkContainer to="/activity" history={history}>
                    <div style={{ position: 'relative' }}>
                        {hasUnreadNotifications && <StyledNotificationDot />}
                        <StyledIcon color={activePath.includes('/activity') ? 'primary' : 'mdContrast'} name={IconName.DuoBell} />
                    </div>
                    <NavLink activePath={activePath} to="/activity">
                        Activity
                    </NavLink>
                </LinkContainer>
            </Container>
        )
    );
}
