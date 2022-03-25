import FlexContainer from 'components/FlexContainer';
import styled from 'styled-components';

export const IconWrapper = styled(FlexContainer)<{ color?: string; iconColor?: string }>`
    width: 38px;
    height: 38px;
    border-radius: 11px;
    background-color: ${({ theme, color }) => (color ? color : theme.secondary)};
    svg {
        color: ${({ iconColor }) => iconColor && iconColor};
    }
`;
