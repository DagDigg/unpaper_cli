import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import { fontSizes } from 'uikit';

export const StyledTextarea = styled(TextareaAutosize)`
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none; /*remove the resize handle on the bottom right*/
    width: 100%;
    font-size: ${fontSizes.regularBig};
    color: ${({ theme }) => theme['mdContrast-1']};
    background-color: transparent;
    margin: 0;
    padding-left: 1px;
    &::placeholder {
        color: ${({ theme }) => theme['mdContrast+1'] + 'A6'};
    }
`;
