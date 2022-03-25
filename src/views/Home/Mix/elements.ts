import { ZIndexes } from 'common/zIndexes';
import BasicIconButton from 'components/BasicIconButton';
import styled, { css } from 'styled-components';

export const GradientBG = styled.div<{ fallback?: string; gradient?: string }>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${ZIndexes.Wallpapers};
    ${({ fallback, gradient }) => css`
        background-color: ${fallback};
        background-image: ${gradient};
    `}
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: sticky;
    overflow: hidden;
    padding: max(env(safe-area-inset-top), 22px) 12px 0 12px;
`;

export const MixPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    cursor: pointer;
`;

export const StyledBasicIconButton = styled(BasicIconButton)`
    margin: 0 12px;
`;
