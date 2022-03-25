import styled from 'styled-components';
import { scales, weights } from 'uikit';

export const Container = styled.div`
    position: relative;
    margin: 4px;
`;

export const StyledInput = styled.input.attrs({ type: 'text' })`
    width: 100%;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.smContrast};
    padding: 12px 44px 12px 16px;
    border: none;
    background-image: none;
    -webkit-appearance: none;
    border: 1px solid transparent;

    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${({ theme }) => theme['mdContrast-1'] + '60'};
        font-weight: ${weights.medium};
        opacity: 1; /* Firefox */
    }

    transition: box-shadow 0.25s ease-out, border 0.25s ease-out;
    &:hover {
        box-shadow: ${({ theme }) => `0px 0px 0px 4px ${theme.primary + '40'}`};
    }
    &:focus {
        box-shadow: ${({ theme }) => `0px 0px 0px 4px ${theme.primary + '40'}`};
        border: 1px solid ${({ theme }) => theme.primary};
        outline: none;
    }
    ${scales.regular}
`;

export const IconContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-50%);
    top: 49%;
    right: 12px;
`;
