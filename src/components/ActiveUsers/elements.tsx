import { Dimmer } from 'components/Dimmer';
import FlexContainer from 'components/FlexContainer';
import { Dropdown } from 'components/SuggestionField/elements';
import * as Text from 'components/Text';
import styled, { css } from 'styled-components';

const fadeIn = css<{ visible: boolean }>`
    ${({ visible }) =>
        visible
            ? css`
                  transform: translateX(0);
              `
            : css`
                  transform: translateX(25%);
              `}
`;

export const ScrollableContainer = styled.div<{ visible: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 16px;
    margin-right: 8px;
    max-height: 408px;
    width: 100%;
    & > div:not(:last-child) {
        margin-bottom: 8px;
    }
    height: 100%;
    overflow-y: scroll;

    transition: all 0.25s ease-in-out;
    ${fadeIn}

    & {
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
    }
    &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
`;

export const StyledDimmer = styled(Dimmer)`
    width: inherit;
    display: flex;
    align-items: center;
    overflow: hidden;
`;

export const Subtitle = styled(Text.Title)<{ visible: boolean }>`
    margin: 0 8px 0 auto;
    transition: all 0.25s ease-in-out;
    ${fadeIn}
`;

export const StyledFlexContainer = styled(FlexContainer)`
    position: relative;
    transform-origin: top left;
`;

export const StyledDropdown = styled(Dropdown)`
    top: -12px;
    right: 6px;
`;

export const Username = styled(Text.Regular)<{ dimmed?: boolean }>`
    transition: opacity 0.2s ease-in-out;
    opacity: ${({ dimmed }) => (dimmed ? 0.4 : 1)};
    cursor: pointer;
`;
