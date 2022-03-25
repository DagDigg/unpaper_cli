import { NOTCH_SIZE } from 'common/constants';
import { isPWA } from 'common/isPWA';
import { ZIndexes } from 'common/zIndexes';
import FlexContainer from 'components/FlexContainer';
import { StyledSVG } from 'components/Icon/getIconByName';
import { Base } from 'components/Text/elements';
import styled from 'styled-components';
import { HEADER_FULL_HEIGHT, HEADER_SHRINKED_HEIGHT } from './constants';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 594px;
    padding: 8px 16px;
    height: ${isPWA() ? NOTCH_SIZE + HEADER_FULL_HEIGHT + 'px' : HEADER_FULL_HEIGHT + 'px'};

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Circle = styled.div`
    border-radius: 50%;
    background-color: wheat;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    flex-shrink: 0;
`;

export const GoBackContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: auto;
    cursor: pointer;
    border-radius: 100px;
    padding: 4px 16px 4px 4px;

    &:hover {
        ${StyledSVG} > path {
            fill: ${({ theme }) => theme.mdContrast};
        }
        ${Base} {
            color: ${({ theme }) => theme.mdContrast};
        }
    }

    @media (max-width: 768px) {
        padding: 0;
        ${Base} {
            display: none;
        }
    }
`;

export const IconContainer = styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const TitleWrapper = styled(FlexContainer)`
    height: 76px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    margin-top: ${isPWA() ? '18px' : '0'};
`;

export const StickyBar = styled.div`
    background-color: ${({ theme }) => (theme.light ? theme['white'] : theme['smContrast']) + 'd4'};
    backdrop-filter: blur(24px);
    z-index: ${ZIndexes.Foregrounds};
    position: sticky;
    top: 0;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: ${isPWA() ? HEADER_SHRINKED_HEIGHT / 2 + 'px' : 0};
    height: ${isPWA() ? NOTCH_SIZE + HEADER_SHRINKED_HEIGHT + 'px' : HEADER_SHRINKED_HEIGHT + 'px'};
    width: 100%;
`;
