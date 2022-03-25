import { Margins } from 'common/types';
import styled from 'styled-components';

export const ChipWrapper = styled.div<Margins>`
    min-width: 96px;
    max-width: 196px;
    background-color: ${({ theme }) => theme.colorPurpleBg};
    border: 1px solid ${({ theme }) => theme.colorPurpleFg};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 12px;
    border-radius: 100px;

    margin-top: ${({ mt }) => mt && mt + 'px'};
    margin-right: ${({ mt }) => mt && mt + 'px'};
    margin-bottom: ${({ mt }) => mt && mt + 'px'};
    margin-left: ${({ mt }) => mt && mt + 'px'};
`;
