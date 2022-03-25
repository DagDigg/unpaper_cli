import FlexContainer from 'components/FlexContainer';
import styled, { css } from 'styled-components';
import { weights } from 'uikit';

const actionBtnColorStyle = css`
    cursor: pointer;
    background-color: ${({ theme }) => theme['smContrast+1']};
    &:hover {
        background-color: ${({ theme }) => theme['smContrast'] + 'c4'};
    }
    &:active {
        background-color: ${({ theme }) => theme['smContrast']};
    }
    border: 1px solid ${({ theme }) => getBorderColor(theme)};
    height: 48px;
    padding: 0 8px;
`;

export const Center = styled(FlexContainer)<{ amt: number }>`
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => getBorderColor(theme)};
    height: 48px;
    padding: 0 12px 0 ${({ amt }) => getInputPadding(amt)};
    width: 78px;
    background-color: ${({ theme }) => theme['smContrast+1']};
`;

export const Left = styled(FlexContainer)`
    ${actionBtnColorStyle}
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
`;

export const StyledInput = styled.input.attrs({ type: 'number' })`
    font-family: 'Plus Jakarta Sans';
    background: none;
    font-size: 22px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme['mdContrast+1']};
    caret-color: ${({ theme }) => theme['mdContrast+1']};
    width: 100%;
    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${({ theme }) => theme['mdContrast+1'] + '60'};
        font-weight: ${weights.medium};
        opacity: 1; /* Firefox */
        caret-color: ${({ theme }) => theme['lwContrast']};
        color: ${({ theme }) => theme['lwContrast']};
    }
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    font-weight: 700;
`;

export const Right = styled(FlexContainer)`
    ${actionBtnColorStyle}
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
`;
function getInputPadding(amt: number) {
    if (amt > 9 && amt < 100) {
        return '18px';
    }
    if (amt < 10) {
        return '26px';
    }

    return '9px';
}

function getBorderColor(theme: any) {
    return theme.light ? theme['smContrast-1'] : theme['mdContrast+1'] + '52';
}
