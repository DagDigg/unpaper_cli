import styled, { keyframes } from 'styled-components';

const ripple = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledLoader = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    & > div {
        position: absolute;
        border: 4px solid ${({ theme }) => theme.primary};
        opacity: 1;
        border-radius: 50%;
        animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    & > div:nth-child(2) {
        animation-delay: -0.5s;
    }
`;
