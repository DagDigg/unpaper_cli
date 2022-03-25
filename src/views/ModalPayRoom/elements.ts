import FlexContainer from 'components/FlexContainer';
import styled from 'styled-components';
import { colors } from 'uikit';

export const IconWrapper = styled(FlexContainer)<{ color: keyof typeof colors.light }>`
    width: 164px;
    height: 164px;
    background-color: ${({ theme, color }) => theme[color]};
    border-radius: 50%;
    padding-top: 16px;
    padding-right: 6px;
    margin: 0 auto 44px auto;
`;

export const PriceContainer = styled(FlexContainer).attrs({ justifyContent: 'space-between' })`
    border-top: 1px solid;
    border-color: ${({ theme }) => theme['smContrast']};
    margin: 0 -24px;
    padding: 12px 28px;
`;
