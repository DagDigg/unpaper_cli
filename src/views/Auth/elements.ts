import Link from 'components/Link';
import Logo from 'components/Logo';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 100%;
    max-width: 418px;
    padding: 24px 36px;
    @media (max-width: 1024px) {
        margin: auto;
    }
`;

export const FluidRow = styled.div`
    display: flex;
    align-items: center;
    margin-top: 24px;
    justify-content: center;
`;

export const StyledLogo = styled(Logo)`
    align-self: flex-start;
    padding: 12px 0 20px 23px;
`;

export const StyledLink = styled(Link).attrs({ scale: 'small' })`
    margin-left: auto;
    margin-top: -8px;
`;
