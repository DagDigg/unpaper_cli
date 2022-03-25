import styled, { css } from 'styled-components';
import * as Text from 'components/Text';

export const Author = styled(Text.ExtraSmall).attrs({ mt: 12 })`
    display: inline-block;
`;
export const Date = styled(Text.ExtraSmall)`
    display: inline-block;
`;
export const Message = styled(Text.Regular).attrs({ weight: 'bold' })`
    text-align: center;
    margin: 18px 10% 0;
`;
export const LikesCount = styled(Text.Small).attrs({ weight: 'bold', ml: 6 })``;

export const Container = styled.div<{ isActive: boolean; highlightColor: string; baseColor: string }>`
    cursor: pointer;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${({ theme }) => (theme.light ? '0px 0px 6px rgba(214, 214, 214, 0.25)' : 'none')};
    border-radius: 24px;
    background-color: ${({ theme }) => (theme.light ? theme.white : theme['smContrast-1'])};
    transition: border 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    ${({ isActive, highlightColor, baseColor }) => css`
        &:hover {
            border: 1px solid ${highlightColor};
        }
        border: 1px solid ${isActive ? highlightColor : baseColor};
    `}
`;

export const Footer = styled.div`
    align-self: flex-start;
    margin-top: 8px;
`;
