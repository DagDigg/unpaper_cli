import { CENTER_CONTENT_WIDTH } from 'common/constants';
import styled, { css } from 'styled-components';

export const Container = styled.div<{ allowClicks: boolean }>`
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: fixed;
    height: 100vh;
    width: ${CENTER_CONTENT_WIDTH}px;
    overflow: hidden;
    margin: auto;
    pointer-events: ${({ allowClicks }) => (allowClicks ? 'auto' : 'none')};
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Wrapper = styled.div<{ visible: boolean }>`
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
    transition: transform 0.33s linear, opacity 0.33s linear;
    ${({ visible }) =>
        visible
            ? css`
                  transform: translateY(0);
                  opacity: 1;
              `
            : css`
                  transform: translateY(10%);
                  opacity: 0;
              `}
`;

export const Canvas = styled.canvas`
    position: absolute;
    height: 100%;
    top: 0;
    width: 100%;
    @media (max-width: 768px) {
        width: 768px;
    }
`;
