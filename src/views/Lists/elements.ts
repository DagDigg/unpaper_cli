import FlexContainer from 'components/FlexContainer';
import styled from 'styled-components';

export const Circle = styled(FlexContainer)`
    width: 212px;
    height: 212px;
    background-color: ${({ theme }) => theme['smContrast']};
    border-radius: 50%;
`;

export const UserChipContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -4px;
    min-height: 36px;
    margin-bottom: 26px;
    & > * {
        margin: 4px;
    }
`;
export const UserChip = styled(FlexContainer)`
    border-radius: 100px;
    background-color: ${({ theme }) => theme['secondary+1']};
    padding: 8px 16px;
    min-width: 64px;
    height: 28px;
    & > div:first-child {
        line-height: 28px;
    }
`;

export const DeleteIconWrapper = styled(FlexContainer)`
    margin-right: -14px;
    padding-left: 8px;
    cursor: pointer;
`;
