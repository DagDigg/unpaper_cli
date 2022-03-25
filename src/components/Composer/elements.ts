import BaseCard from 'components/BaseCard';
import FlexContainer from 'components/FlexContainer';
import FormField from 'components/FormField';
import { Field } from 'components/FormField/elements';
import Icon from 'components/Icon';
import { IconName, IconSize } from 'components/Icon/types';
import Line from 'components/Line';
import styled, { keyframes } from 'styled-components';
import { fontSizes } from 'uikit';

export const StyledBaseCard = styled(BaseCard)`
    flex-direction: column;
    border: none;
    border-radius: 0px;
    margin-bottom: 24px;
`;

export const FakeAvatar = styled.div<{ size?: number; mt?: number; mr?: number }>`
    width: ${({ size }) => (size ? size + 'px' : '38px')};
    height: ${({ size }) => (size ? size + 'px' : '38px')};
    margin-top: ${({ mt }) => mt && mt + 'px'};
    margin-right: ${({ mr }) => (mr ? mr + 'px' : '0px')};
    background-color: wheat;
    border-radius: 50%;
    display: inline-block;
    flex-shrink: 0;
`;

export const RecordButtonContainer = styled(FlexContainer)`
    border-radius: 50%;
    background-color: ${({ theme }) => theme.red};
    width: 48px;
    height: 48px;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme['red-1']};
    }
`;

export const FakeSelector = styled.div`
    padding: 12px 8px;
    border-radius: 8px;
    background-color: wheat;
    width: 112px;
    height: 33px;
`;

const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export const RecordingIcon = styled(Icon).attrs({ name: IconName.Dot, color: 'white', size: IconSize.XS })`
    animation: ${blink} 1500ms infinite;
`;

export const StyledField = styled(FormField).attrs({ fieldType: 'naked' })`
    ${Field} {
        font-size: ${fontSizes.regularBig};
        word-wrap: break-word;
        word-break: break-all;
        max-height: 80px;
    }
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: flex-start;
`;

export const CancelIcon = styled(Icon).attrs({ name: IconName.DuoCross, color: 'mdContrast+1', alpha: 'b3' })`
    margin-right: 6px;
    cursor: pointer;
`;

export const PlayIcon = styled(Icon).attrs({ name: IconName.Play, color: 'mdContrast+1' })`
    margin-left: 6px;
    cursor: pointer;
`;
export const PauseIcon = styled(Icon).attrs({ name: IconName.Pause, color: 'mdContrast+1' })`
    margin-left: 6px;
    cursor: pointer;
`;

export const RecorderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
        flex: 1 0 0;
    }
`;

export const StyledLine = styled(Line)`
    width: 100%;
`;
