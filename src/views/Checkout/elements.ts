import styled, { css } from 'styled-components';

export const OuterContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    padding: 24px;
    max-width: 488px;
    width: 100%;
    flex-shrink: 1;
`;

export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 48px;

    @media (max-width: 768px) {
        margin-top: 28px;
    }
`;

export const BillingCycleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: -24px -16px;
    & > * {
        margin: 24px 16px;
        flex: 1 1 194px;
    }
`;

export const BillingCycleBox = styled.div<{ isSelected: boolean }>`
    position: relative;
    height: 94px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme, isSelected }) => (isSelected ? theme['secondary'] : theme['smContrast-1'])};
    cursor: pointer;
    padding: 0 8px;

    &:hover {
        border-color: ${({ theme, isSelected }) => !isSelected && theme['mdContrast-1']};
    }
`;

export const PriceContainer = styled.div`
    padding: 24px;
    margin-top: 28px;
    background-color: ${({ theme }) => theme['smContrast'] + '60'};
`;

export const CouponContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 24px;

    & > div:first-child {
        width: 100%;
        margin-right: 24px;
    }
    & > div:last-child {
        margin-top: 14px;
        margin-left: auto;
    }
`;

export const ActionBtnContainer = styled.div<{ isMobile: boolean }>`
    width: 100%;
    & > div:first-child {
        margin-top: 24px;
    }

    ${({ isMobile }) =>
        isMobile &&
        css`
            position: fixed;
            bottom: 0;
            left: 0;
            padding: 28px;
            background-color: ${({ theme }) => theme['smContrast-1'] + '90'};
            backdrop-filter: blur(6px);

            & > div:first-child {
                margin: 0;
            }
        `}
`;
