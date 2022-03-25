import React from 'react';
import styled from 'styled-components';
import { colors } from 'uikit';

export const StyledSVG = styled.svg<{ color?: keyof typeof colors.light; customColor?: string }>`
    & > circle {
        stroke: ${({ theme, color, customColor }) => (color ? theme[color] : customColor ?? 'gray')};
    }
`;

const StyledColoredSVG = styled.svg``;

const ColoredIcon: React.FC<{ className?: string }> = ({ className }) => (
    <StyledColoredSVG width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9.5" cy="13.7002" r="8.5" stroke="url(#paint0_linear_1025:693)" strokeWidth="2" />
        <circle cx="17.4" cy="6.6" r="5.6" stroke="url(#paint1_linear_1025:693)" strokeWidth="2" />
        <mask id="mask0_1025:693" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="10" y="4" width="4" height="4">
            <path d="M13.4 4.2002H10V7.6002H13.4V4.2002Z" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0_1025:693)">
            <circle cx="9.5" cy="13.7002" r="8.5" stroke="url(#paint2_linear_1025:693)" strokeWidth="2" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_1025:693" x1="0" y1="23.2002" x2="19" y2="4.2002" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7E87D5" />
                <stop offset="1" stopColor="#AA7ED5" />
            </linearGradient>
            <linearGradient id="paint1_linear_1025:693" x1="10.8" y1="13.2" x2="21" y2="2" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0486F4" />
                <stop offset="1" stopColor="#53DED6" />
            </linearGradient>
            <linearGradient id="paint2_linear_1025:693" x1="2.57402e-07" y1="23" x2="7.5" y2="13.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7E87D5" />
                <stop offset="1" stopColor="#AA7ED5" />
            </linearGradient>
        </defs>
    </StyledColoredSVG>
);

type Props = {
    color?: keyof typeof colors.light;
    customColor?: string;
    className?: string;
    colored?: boolean;
};
export default function Icon(props: Props) {
    return props.colored ? (
        <ColoredIcon />
    ) : (
        <StyledSVG
            className={props.className}
            color={props.color}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="10.0833" cy="13.8047" r="8.25" strokeWidth="2" />
            <circle cx="17.2333" cy="6.95449" r="5.6" strokeOpacity="0.7" strokeWidth="2" />
            <mask id="mask0_1010:684" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="9" y="4" width="5" height="4">
                <path d="M13.2333 4.55469H9.83331V7.95469H13.2333V4.55469Z" />
            </mask>
            <g mask="url(#mask0_1010:684)">
                <circle cx="10.0833" cy="13.8047" r="8.25" strokeWidth="2" />
            </g>
        </StyledSVG>
    );
}
