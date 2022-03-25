import styled from 'styled-components';
import { colors } from 'uikit';
import FlexContainer from './FlexContainer';

const Wrapper = styled(FlexContainer)<{ bg?: keyof typeof colors.light; size?: number; squared?: boolean }>`
    width: ${({ size }) => (size ? size + 'px' : '38px')};
    height: ${({ size }) => (size ? size + 'px' : '38px')};
    background-color: ${({ theme, bg }) => (bg ? theme[bg] : theme.smContrast)};
    border-radius: ${({ squared }) => (squared ? '12px' : '50%')};
    flex-shrink: 0;
`;

export default Wrapper;
