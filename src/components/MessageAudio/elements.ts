import { MsgSender } from 'common/types';
import { getBubbleColor } from 'components/Bubble/elements';
import ProgressBar from 'components/ProgressBar';
import styled, { css } from 'styled-components';
import * as Text from 'components/Text';

export const Wrapper = styled.div<{ sender: MsgSender; margin: string }>`
    width: 224px;
    padding: 12px;
    border-radius: 14px;
    background-color: red;
    position: relative;

    margin: ${({ margin }) => margin};
    ${({ sender, theme }) => css`
        background-color: ${getBubbleColor(theme, sender)}};
    `}
`;

export const StyledProgressBar = styled(ProgressBar).attrs(({ theme }) => ({
    fluid: true,
    type: 'horizontal',
    baseColor: theme.lwContrast,
    highlightColor: theme.hiContrast,
}))`
    margin-left: 6px;
`;

export const PlayIconAndProgressContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const AudioDurationContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 8px;
`;

export const AudioDurationText = styled(Text.ExtraSmall).attrs({ color: 'smContrast' })`
    letter-spacing: -0.03rem;
`;
