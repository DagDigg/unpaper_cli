import { Margins } from 'common/types';
import styled from 'styled-components';

export default styled.div<Margins & { fluid?: boolean; customColor?: string }>`
    height: 1px;
    background-color: ${({ theme, customColor }) => customColor ?? (theme.light ? theme['smContrast-1'] : theme['smContrast'])};
    flex-grow: 1;
    width: ${({ fluid }) => (fluid ? '100%' : 'auto')};
    margin-top: ${({ mt }) => mt && mt + 'px'};
    margin-right: ${({ mr }) => mr && mr + 'px'};
    margin-bottom: ${({ mb }) => mb && mb + 'px'};
    margin-left: ${({ ml }) => ml && ml + 'px'};
`;
