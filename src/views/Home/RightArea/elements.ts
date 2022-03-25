import { RIGHT_CONTENT_WIDTH } from 'common/constants';
import styled from 'styled-components';

export const FixedContainer = styled.div`
    position: sticky;
    top: 12px;
    width: 100%;
    max-width: ${RIGHT_CONTENT_WIDTH}px;
`;
export const MainContainer = styled.div`
    display: flex;
    border-radius: 38px;
    padding: 14px;
    background-color: ${({ theme }) => theme['hiContrast']};
`;

export const WhoToFollowContainer = styled.div`
    display: flex;
    border-radius: 24px;
    flex-direction: column;
    padding: 32px 24px;
    flex: 1;
    background-color: ${({ theme }) => theme['mdContrast'] + 'cf'};
`;
