import BaseCard from 'components/BaseCard';
import Button from 'components/Button';
import NotificationDot from 'components/NotificationDot';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

export const CardsContainer = styled.div`
    padding: 24px 8px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const StyledBaseCard = styled(BaseCard)`
    flex: 1 0 100%;
    padding: 14px;
    border-radius: 22px;
    margin-bottom: 9px;
    ${({ theme }) =>
        css`
            border: none;
            background-color: ${theme.light ? theme['smContrast+1'] + '87' : theme.smContrast + '87'};
        `}
    &:hover {
        background-color: ${({ theme }) => (theme.light ? theme['smContrast+1'] : theme.smContrast)};
    }
`;

export const Selection = styled.div<{ selected: boolean }>`
    margin: 0 18px;
    cursor: pointer;
    height: 24px;
    ${({ selected, theme }) =>
        selected &&
        css`
            border-bottom: 2px solid ${theme.mdContrast};
        `}
`;

export const RightButton = styled(Button).attrs({ squared: true })`
    margin-top: auto;
    margin-left: auto;
`;

export const StyledNotificationDot = styled(NotificationDot)`
    top: 14px;
    right: 14px;
    background-color: ${({ theme }) => theme.secondary};
    width: 12px;
    height: 12px;
`;

export const SelectionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 100%;
`;
