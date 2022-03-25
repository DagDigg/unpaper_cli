import FlexContainer from 'components/FlexContainer';
import Line from 'components/Line';
import styled from 'styled-components';

export const Container = styled.div`
    padding: 22px 12px;
`;

export const TopContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
`;

export const AvatarMock = styled.div`
    width: 64px;
    height: 64px;
    background-color: #d59fff;
    border-radius: 50%;
    align-self: flex-start;
`;

export const TopTitles = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 180px;
    align-items: flex-start;

    & > div {
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;
    }
`;

export const ProfileContent = styled.div`
    margin: 24px 0;
    display: flex;
    flex-direction: column;
`;

export const LineTitle = styled.div`
    width: 48px;
    height: 4px;
    background-color: ${({ theme }) => theme.primary};
`;

export const Row = styled.div<{ mt?: number }>`
    min-height: 98px;
    margin-top: ${({ mt }) => (mt ? mt + 'px' : 0)};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const RowSeparator = styled(Line)`
    border-color: ${({ theme }) => theme.smContrast};
    margin-left: 62px;
`;

export const IconWrapper = styled(FlexContainer)<{ color?: string }>`
    width: 38px;
    height: 38px;
    border-radius: 11px;
    background-color: ${({ theme, color }) => (color ? color : theme.secondary)};
`;
