import { ZIndexes } from 'common/zIndexes';
import styled, { css } from 'styled-components';

export const Dimmer = styled.div<{ isVisible: boolean }>`
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    opacity: 0;
    transition: all 0.3s ease-in-out;
    ${({ isVisible }) =>
        isVisible &&
        css`
            opacity: 1;
        `}
    position: fixed;
    transform: translate(-50%, -50%);
    backdrop-filter: blur(34px);
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    z-index: ${ZIndexes.Dimmers};
    background-color: ${({ theme }) => theme['mdContrast'] + '40'};
`;
