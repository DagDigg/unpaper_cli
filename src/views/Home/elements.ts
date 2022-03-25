import {
    CENTER_CONTENT_WIDTH,
    LEFT_CONTENT_WIDTH,
    MAX_WIDTH_SHOULD_COLLAPSE_LEFT,
    MAX_WIDTH_SHOULD_HIDE_LEFT,
    MAX_WIDTH_SHOULD_HIDE_RIGHT,
    RIGHT_CONTENT_WIDTH,
} from 'common/constants';
import styled from 'styled-components';
import { StyledLink } from './Sidebar/elements';

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => (theme.light ? theme.white : theme['smContrast-1'])};
    @media (max-width: ${CENTER_CONTENT_WIDTH + LEFT_CONTENT_WIDTH + RIGHT_CONTENT_WIDTH}px) {
        justify-content: flex-start;
    }
`;
export const CenterContainer = styled.div`
    width: ${CENTER_CONTENT_WIDTH}px;
    min-height: 100vh;
    height: 100%;
    border-left: 1px solid ${({ theme }) => theme.smContrast};
    border-right: 1px solid ${({ theme }) => theme.smContrast};

    @media (max-width: ${CENTER_CONTENT_WIDTH + LEFT_CONTENT_WIDTH}px) {
    }
    @media (max-width: ${MAX_WIDTH_SHOULD_HIDE_LEFT}px) {
        width: 100%;
        flex-grow: 1;
        margin: 0;
        border: none;
    }
`;

export const LeftContainer = styled.div`
    display: flex;
    width: ${LEFT_CONTENT_WIDTH}px;
    height: 100vh;
    justify-content: flex-start;
    padding-left: 24px;
    position: relative;
    margin: 0 12px;

    @media (max-width: ${MAX_WIDTH_SHOULD_HIDE_LEFT}px) {
        display: none;
    }
    @media (max-width: ${MAX_WIDTH_SHOULD_COLLAPSE_LEFT}px) {
        ${StyledLink} {
            display: none;
        }
        justify-content: center;
        width: 64px;
        padding: 0 22px;
        flex-shrink: 0;
    }
`;
export const RightContainer = styled.div`
    width: 100%;
    max-width: ${RIGHT_CONTENT_WIDTH}px;
    height: 100vh;
    align-self: flex-start;
    position: sticky;
    top: 0;
    margin: 0 12px;

    @media (max-width: ${MAX_WIDTH_SHOULD_HIDE_RIGHT}px) {
        display: none;
    }
`;
