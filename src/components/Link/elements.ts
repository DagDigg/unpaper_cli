import styled, { css } from 'styled-components';
import { Base } from 'components/Text/elements';
import { ScalesKeys } from 'uikit';

type BaseProps = {
    scale: ScalesKeys;
    type: 'primary' | 'secondary';
    isActive?: boolean;
    colorOnHover?: boolean;
};
export const StyledBase = styled(Base).attrs((props: BaseProps) => ({ scale: props.scale }))<BaseProps>`
    cursor: pointer;
    color: ${({ type, theme, colorOnHover }) => (colorOnHover ? theme['mdContrast+1'] : getBaseColor(type, theme))};
    padding-bottom: 2px;
    border: 1px solid transparent;

    ${({ isActive, type, theme }) =>
        isActive &&
        css`
            color: ${getBaseColor(type, theme)};
            border-bottom: 1px solid ${getBaseColor(type, theme)};
        `}
    &:hover {
        color: ${({ type, theme }) => getBaseColor(type, theme)};
        border-bottom: 1px solid ${({ type, theme }) => getBaseColor(type, theme)};
    }
`;

const getBaseColor = (type: 'primary' | 'secondary', theme: any) => (type === 'primary' ? theme['primary'] : theme['secondary']);
