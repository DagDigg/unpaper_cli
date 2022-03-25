import { ZIndexes } from 'common/zIndexes';
import styled, { css } from 'styled-components';

export const MobileContainer = styled.div<{ isOnTop: boolean; isExpanded: number }>`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background-color: ${({ theme }) => theme.lwContrast + '80'};
    backdrop-filter: blur(4px);
    padding: 8px 16px;
    width: 100%;
    height: 48px;
    transition: height 0.3s ease-in-out;
    position: absolute;
    border-top: 1px solid ${({ theme }) => theme['smContrast']};
    z-index: ${ZIndexes.Foregrounds};
    cursor: pointer;

    ${({ isOnTop, isExpanded, theme }) =>
        (isOnTop || !!isExpanded) &&
        css`
            border-bottom: 1px solid ${theme['smContrast']};
        `}

    ${({ isOnTop }) =>
        isOnTop &&
        css`
            position: fixed;
            top: 0;
            left: 0;
        `}

    ${({ isExpanded, theme }) =>
        !!isExpanded &&
        css`
            height: ${isExpanded + 'px'};
            box-shadow: 0px 5px 3px -3px ${theme['mdContrast+1'] + '30'};
        `}

    @media(min-width: 768px) {
        transform: translateX(-50%);
        left: 50%;
        width: 65%;
    }
`;

export const MobileNavPlaceholder = styled.div`
    width: 100%;
    height: 47px;
    position: relative;
`;

export const NavItemContainer = styled.div<{ isLast: boolean }>`
    padding: 16px 0;
    margin: 0 28px;
    ${({ theme, isLast }) =>
        isLast
            ? css`
                  margin-bottom: 24px;
              `
            : css` border-bottom:  1px solid ${theme['smContrast-1']}}`}

    width: calc(100% - 56px);
`;
