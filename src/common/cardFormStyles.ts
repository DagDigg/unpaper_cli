import Line from 'components/Line';
import styled, { css, keyframes } from 'styled-components';

const fade = keyframes`
  from {
      opacity: 0;
      transform: scale3D(0.95, 0.95, 0.95);
  }
  to {
      opacity: 1;
      transform: scale3D(1, 1, 1);
  }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const FormCard = styled.div`
    height: 40px;
    margin-top: 4px;
    border-radius: 12px;
    flex: 1;
    background-color: ${({ theme }) => (theme.light ? theme['smContrast'] + '7a' : theme['smContrast'])};
    caret-color: ${({ theme }) => theme['mdContrast']};
    transition: all 0.25s ease-out;

    ${({ theme }) =>
        css`
            &:hover {
                box-shadow: 0px 0px 0px 4px ${theme.secondary + '40'};
            }
            &:focus {
                border: 1px solid ${theme['secondary']};
            }
        `}
`;

export const FormRow = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 15px;
    border-top: 1px solid ${({ theme }) => theme['smContrast-1']};
    &:first-child {
        border-top: none;
    }
`;

export const StyledButton = styled.button<{ hasError: boolean }>`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border-style: none;
    display: block;
    font-size: 16px;
    width: calc(100% - 30px);
    height: 40px;
    margin: 0px 14px;
    background-color: ${({ theme }) => theme.hiContrast};
    border-radius: 100px;
    color: ${({ theme }) => theme.lwContrast};
    font-weight: 600;
    cursor: pointer;
    transition: all 100ms ease-in-out;
    will-change: transform, background-color, box-shadow;
    &:disabled {
        opacity: 0.5;
        cursor: default;
        background-color: red;
        box-shadow: none;
    }
    &:hover {
        background-color: ${({ theme }) => theme['mdContrast-1']};
    }
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border-style: none;
`;

export const StyledErrorMessage = styled.div<{ isVisible: boolean }>`
    color: ${({ theme }) => theme.mdContrast};
    padding: 0 15px;
    height: 20px;
    margin-top: 12px;
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    width: 100%;
    animation: fade 150ms ease-out;
    animation-delay: 50ms;
    animation-fill-mode: forwards;
    svg {
        margin-right: 10px;
    }
`;

export const StyledResetButton = styled.button`
    border: 0;
    cursor: pointer;
    background: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border-style: none;
`;

export const Result = styled.div`
    margin-top: 50px;
    text-align: center;
    animation: ${fade} 200ms ease-out;
`;

export const ResultTitle = styled.div`
    color: #fff;
    font-weight: 500;
    margin-bottom: 8px;
    font-size: 17px;
    text-align: center;
`;

export const ResultMessage = styled.div`
    color: #9cdbff;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 25px;
    line-height: 1.6em;
    text-align: center;
`;

export const Form = styled.form`
    /* animation: ${fade} 200ms ease-out; */
    /* max-width: 520px; */
    width: 100%;
    /* margin-top: 36px; */
`;

export const StyledLine = styled(Line)`
    margin: 24px 0;
`;

export const Row = styled.div`
    flex: 50%;
`;

export const BannerContainer = styled.div`
    height: 138px;
    background-color: ${({ theme }) => theme['primary+1']};
    border: 1px solid ${({ theme }) => theme['primary']};
    box-shadow: 0 0 0 4px ${({ theme }) => theme['primary'] + '15'};
    padding: 18px 22px;
    border-radius: 12px;
    margin: 12px 24px 24px;
`;

export const BannerHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;
