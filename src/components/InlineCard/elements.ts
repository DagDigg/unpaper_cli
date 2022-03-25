import Link from 'components/Link';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-top: 8px;
    padding: 24px 16px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme['smContrast-1']};
    border-radius: 12px;
`;

export const StyledLink = styled(Link)`
    margin-left: auto;
`;
