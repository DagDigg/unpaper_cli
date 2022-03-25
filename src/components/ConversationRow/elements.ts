import Line from 'components/Line';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 22px 18px;
    cursor: pointer;
`;

export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: auto auto auto 12px;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const UnreadMessagesCircle = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`;

export const StyledLine = styled(Line)`
    margin-left: 78px;
    width: calc(100% - 78px);
`;
