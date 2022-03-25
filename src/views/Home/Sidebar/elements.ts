import { CirclesIcon } from 'components/Circles';
import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import * as Text from 'components/Text';
import styled from 'styled-components';
import NotificationDot from 'components/NotificationDot';

export const StyledLink = styled(Text.RegularBig)``;
export const StyledIcon = styled(Icon)``;
export const StyledCircleIcon = styled(CirclesIcon)``;

export const Container = styled.div`
    align-self: flex-start;
    display: inline;
    top: 48px;
    position: fixed;
`;

export const StyledLinkContainer = styled(FlexContainer).attrs({ justifyContent: 'flex-start', mt: 18 })`
    cursor: pointer;
    &:hover {
        ${StyledLink} {
            color: ${({ theme }) => theme.primary};
        }
        ${StyledIcon} > path {
            fill: ${({ theme }) => theme.primary};
        }
        ${StyledCircleIcon} > circle {
            stroke: ${({ theme }) => theme.primary};
        }
    }
`;

export const StyledNotificationDot = styled(NotificationDot)`
    top: -3px;
    right: -1px;
`;
