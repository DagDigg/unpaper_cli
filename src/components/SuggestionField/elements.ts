import { ZIndexes } from 'common/zIndexes';
import styled from 'styled-components';

export const DropdownItem = styled.div`
    cursor: pointer;
    width: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
`;

export const Dropdown = styled.div<{ width?: number; height?: number; solid?: boolean }>`
    min-height: 64px;
    max-width: ${({ width }) => (width ? width + 'px' : 'auto')};
    height: ${({ height }) => (height ? height + 'px' : 'auto')};
    min-height: 43px;
    max-height: 120px;
    background-color: red;
    position: absolute;
    top: 80px;
    padding: 6px 8px;
    background-color: ${({ theme, solid }) => (solid ? (theme.light ? theme.white : theme.black) : theme.smContrast + '7a')};
    border-radius: 16px;
    transition: all 0.2s ease-in-out;
    overflow: hidden;
    backdrop-filter: blur(16px);
    z-index: ${ZIndexes.Modals};
    overflow-y: scroll;

    ${DropdownItem}:hover {
        background-color: ${({ theme, solid }) => (solid ? theme.lwContrast : theme.smContrast + 'a3')};
    }
    & {
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
    }
    &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
`;
