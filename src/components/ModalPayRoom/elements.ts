import FlexContainer from 'components/FlexContainer';
import InlineCard from 'components/InlineCard';
import styled, { keyframes } from 'styled-components';

export const PriceContainer = styled(FlexContainer).attrs({ justifyContent: 'space-between' })`
    border-top: 1px solid;
    border-color: ${({ theme }) => theme['smContrast']};
    margin: 0 -24px;
    padding: 12px 28px;
`;

export const StyledInlineCard = styled(InlineCard)`
    border: none;
`;

type Direction = 'LtoR' | 'RtoL';

const getAnimatedBackground = (direction: Direction) => keyframes`
 from {
    background-position: 0 0;
  }

  to {
    background-position: ${direction === 'RtoL' ? '-10000px' : '10000px'} 0;
  }
`;

export const ImgSlider = styled.div<{ url: string; direction: Direction; pos: number }>`
    width: 100%;
    height: 111px;
    position: absolute;
    top: ${({ pos }) => pos * 96}px;
    left: 0;
    background: url(${({ url }) => url});
    background-repeat: repeat;
    background-position: 0 0;
    background-size: auto 100%;
    /*adjust s value for speed*/
    animation: ${({ direction }) => getAnimatedBackground(direction)} 500s linear infinite;
`;

export const SliderContainer = styled.div`
    margin-left: -24px;
    width: calc(100% + 48px);
    position: relative;
    height: 262px;
`;

export const ScrollableContent = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    margin-bottom: 96px;
    padding: 0 24px;
    width: calc(100% + 48px);
    align-self: center;
    & {
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
    }
    &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
`;

export const Bottom = styled.div`
    position: fixed;
    bottom: 24px;
    width: calc(100% - 48px);
`;
