import styled, { css } from 'styled-components';
import { isMobile } from 'react-device-detect';
import { weights } from 'uikit';
import { FieldType } from '.';

export const Wrapper = styled.div<{ mt?: number }>`
    display: flex;
    flex-direction: column;
    margin-top: ${({ mt }) => mt && mt + 'px'};
    position: relative;
`;
export const Field = styled.input.attrs({ spellCheck: 'false' })<{ hasError: boolean; fieldType: FieldType }>`
    background-image: none;
    box-shadow: none;
    outline: none;
    margin-top: 8px;
    border-radius: 12px;
    min-width: 144px;
    width: 100%;
    height: 40px;
    caret-color: ${({ theme }) => theme['mdContrast-1']};
    color: ${({ theme }) => theme['mdContrast-1']};
    padding: 0 12px;
    transition: all 0.25s ease-out;
    font-size: ${isMobile && '16px'};
    font-family: 'Plus Jakarta Sans';

    ${({ fieldType, theme }) => {
        switch (fieldType) {
            case 'outlined':
            case 'password':
                return css`
                    font-weight: ${weights.semiBold};
                    border: 1px solid ${theme.light ? theme['smContrast'] + '7a' : theme['smContrast']};
                    background-color: ${theme.light ? theme['smContrast'] + '7a' : theme['smContrast']} !important;
                `;
            case 'naked':
                return css`
                    border: none;
                    padding: 0;
                `;
            default:
                break;
        }
    }}

    ${({ theme, hasError }) =>
        hasError &&
        css`
            border: 1px solid ${theme.red};
        `}

    ${({ disabled, theme, hasError, fieldType }) =>
        !disabled &&
        fieldType !== 'naked' &&
        css`
            &:hover,
            &:focus {
                box-shadow: 0px 0px 0px 4px ${hasError ? (theme.light ? theme['red+1'] : theme['red-1']) : theme.secondary + '40'};
            }
            &:focus {
                border: 1px solid ${hasError ? theme.red : theme['secondary']};
            }
        `}

    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${({ theme }) => theme['mdContrast-1'] + '60'};
        font-weight: ${weights.medium};
        opacity: 1; /* Firefox */
    }

    /* Replace autofill style */
    &:-webkit-autofill,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.smContrast} inset;
        -webkit-text-fill-color: ${({ theme }) => theme['mdContrast']};
        border: 1px solid ${({ theme }) => theme['smContrast']};
        background-clip: content-box !important;
    }

    /* iOS styles removal */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`;
