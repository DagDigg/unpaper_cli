import { MAX_WIDTH_SHOULD_HIDE_LEFT } from 'common/constants';
import { ZIndexes } from 'common/zIndexes';
import { CirclesIcon } from 'components/Circles/index';
import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import { IconName } from 'components/Icon/types';
import NotificationDot from 'components/NotificationDot';
import * as authSelectors from 'modules/auth/selectors';
import * as notificationsSelectors from 'modules/notifications/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Bar = styled.div`
    display: none;
    @media (max-width: ${MAX_WIDTH_SHOULD_HIDE_LEFT}px) {
        background-color: ${({ theme }) => (theme.light ? theme.white : theme.lwContrast)};
        border-top: 1px solid ${({ theme }) => theme.smContrast};
        display: flex;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        width: 100%;
        align-items: center;
        padding-bottom: max(env(safe-area-inset-bottom), 12px);
        padding-top: 12px;
        z-index: ${ZIndexes.Foregrounds};
    }
`;

const IconWrapper = styled(FlexContainer)`
    cursor: pointer;
    flex: 1 1 64px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export default function BottomBar() {
    const activePath = window.location.pathname;
    const history = useHistory();
    const userInfo = useSelector(authSelectors.selectUser);
    const hasUnreadNotifications = useSelector(notificationsSelectors.selectHasUnreadNotifications);
    const disabledRoutes = [`/conversations/*`];

    const isEnabled = disabledRoutes.every((route) => !new RegExp(route).test(activePath));

    return isEnabled ? (
        <Bar>
            <IconWrapper onClick={() => history.push('/')}>
                <Icon color={activePath === '/' ? 'primary' : 'mdContrast+1'} name={IconName.DuoHome} />
            </IconWrapper>
            <IconWrapper onClick={() => history.push('/circles')}>
                <CirclesIcon color={activePath.includes('/circles') ? 'primary' : 'mdContrast+1'} />
            </IconWrapper>
            <IconWrapper onClick={() => history.push('/activity')}>
                <div style={{ position: 'relative' }}>
                    {hasUnreadNotifications && <NotificationDot />}
                    <Icon color={activePath.includes('/activity') ? 'primary' : 'mdContrast+1'} name={IconName.DuoBell} />
                </div>
            </IconWrapper>
            <IconWrapper onClick={() => history.push(`/profile/@${userInfo?.username}`)}>
                <Icon color={activePath.includes('/profile') ? 'primary' : 'mdContrast+1'} name={IconName.DuoProfile} />
            </IconWrapper>
        </Bar>
    ) : null;
}
