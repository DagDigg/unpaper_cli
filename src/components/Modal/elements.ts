import { isPWA } from 'common/isPWA';
import { ZIndexes } from 'common/zIndexes';
import FlexContainer from 'components/FlexContainer';
import styled, { css } from 'styled-components';
import * as Text from 'components/Text';

export const ModalWrapper = styled.div<{ shouldAnimate: boolean }>`
    position: fixed;
    top: 50%;
    left: 50%;
    transition: transform 0.33s ease-in-out, opacity 0.33s ease-in-out;

    display: flex;
    flex-direction: column;
    width: 428px;
    min-height: 250px;
    z-index: ${ZIndexes.Modals};
    border-radius: 38.5px;
    background-color: ${({ theme }) => theme['lwContrast']};
    border: 1px solid ${({ theme }) => theme['smContrast']};
    padding: 24px;

    @media (min-width: 768px) {
        ${({ shouldAnimate: isVisible }) =>
            isVisible
                ? css`
                      opacity: 1;
                      transform: translate(-50%, -50%);
                  `
                : css`
                      opacity: 0;
                      transform: translate(-50%, -40%);
                  `}
    }

    @media (max-width: 768px) {
        width: calc(100% - 12px);
        max-height: calc(100vh - ${isPWA() ? ' 28px' : '78px'});
        top: unset;
        bottom: max(env(safe-area-inset-bottom), 44px);
        ${({ shouldAnimate: isVisible }) =>
            isVisible
                ? css`
                      opacity: 1;
                      transform: translate(-50%, 0);
                  `
                : css`
                      opacity: 0;
                      transform: translate(-50%, 100%);
                  `}
    }
`;

export const CloseIconPath = styled.path.attrs({ strokeWidth: '3', strokeLinecap: 'round' })`
    stroke: ${({ theme }) => theme['mdContrast+1'] + '50'};
`;

export const CloseIconWrapper = styled.div`
    cursor: pointer;
    width: 22px;
    height: 22px;
    display: flex;
    margin-right: -8px;
    justify-content: center;
    align-items: center;
    &:hover {
        ${CloseIconPath} {
            stroke: ${({ theme }) => theme['mdContrast+1'] + '80'};
        }
    }
`;

export const Header = styled(FlexContainer).attrs({ justifyContent: 'space-between' })``;

export const StyledTitle = styled(Text.Title)`
    line-height: 27px;
    margin-bottom: 8px;
`;

export const StyledSmall = styled(Text.Small)`
    line-height: 18px;
`;
