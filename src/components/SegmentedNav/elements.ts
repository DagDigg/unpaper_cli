import { ZIndexes } from 'common/zIndexes';
import FlexContainer from 'components/FlexContainer';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    padding: 2px;
    height: 41px;
    background-color: ${({ theme }) => theme.smContrast};
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    margin: 0 auto;
    position: relative;
`;

export const ItemWrapper = styled(FlexContainer)`
    width: 96px;
    z-index: ${ZIndexes.Foregrounds};
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const Cursor = styled.div<{ pos: number }>`
    background-color: ${({ theme }) => theme.lwContrast};
    z-index: ${ZIndexes.Content};
    border-radius: 9px;
    width: 96px;
    height: 37px;
    position: absolute;
    transition: transform 0.25s ease;
    ${({ pos }) =>
        css`
            transform: translateX(${96 * pos + 'px'});
        `};
`;
