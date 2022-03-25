import { ZIndexes } from 'common/zIndexes';
import styled from 'styled-components';
import * as Text from 'components/Text';

export const Heading = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: ${ZIndexes.Foregrounds};
    height: 320px;

    @media (max-width: 568px) {
        height: 220px;
    }
`;

export const getHeaderTitle = (size: 'bg' | 'md') =>
    size === 'bg'
        ? styled(Text.Mega).attrs({ color: 'white' })`
              text-shadow: 0 0 9px ${({ theme }) => theme.white + '90'};
          `
        : styled(Text.Super).attrs({ color: 'white' })`
              text-shadow: 0 0 9px ${({ theme }) => theme.white + '90'};
          `;

export const getHeaderSubtitle = (size: 'bg' | 'md') =>
    size === 'bg'
        ? styled(Text.RegularBig).attrs({ mt: 6 })`
              color: #ffe5e5;
          `
        : styled(Text.Regular).attrs({ mt: 6 })`
              color: #ffe5e5;
          `;
