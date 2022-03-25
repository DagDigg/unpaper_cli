import styled, { css } from 'styled-components';

export const Back = styled.div<{ isActive: boolean }>`
    width: 46px;
    height: 28px;
    padding: 0 4px;
    border-radius: 100px;
    background-color: ${({ theme, isActive }) => (isActive ? theme.primary : theme['grayed-1'])};
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const Slider = styled.div<{ isActive: boolean }>`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme['white']};
    transition: all 0.25s ease-out;
    ${({ isActive }) =>
        isActive
            ? css`
                  transform: translateX(75%);
                  box-shadow: 1px 0px 1px 0px ${({ theme }) => theme.hiContrast + '60'};
              `
            : css`
                  box-shadow: -1px 0px 1px 0px ${({ theme }) => theme.hiContrast + '60'};
              `}
`;
