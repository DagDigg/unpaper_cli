import { ZIndexes } from 'common/zIndexes';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 670px;
    z-index: ${ZIndexes.Wallpapers};
`;

export default function BlurredWall({ size }: { size: 'bg' | 'md' }) {
    return (
        <Container>
            {size === 'bg' ? (
                <svg
                    preserveAspectRatio="none"
                    width="100%"
                    height="393"
                    viewBox="0 0 1002 393"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="-438" y="0" width="1440" height="425">
                        <rect x="-438" width="1440" height="425" fill="#C4C4C4" />
                    </mask>
                    <g mask="url(#mask0)">
                        <g filter="url(#filter0_f)">
                            <ellipse cx="790" cy="156.5" rx="659" ry="65.5" fill="url(#paint0_radial)" fillOpacity="0.82" />
                        </g>
                    </g>
                    <defs>
                        <filter
                            id="filter0_f"
                            x="0"
                            y="-40"
                            width="1580"
                            height="493"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="65.5" result="effect1_foregroundBlur" />
                        </filter>
                        <radialGradient
                            id="paint0_radial"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(946.004 157.112) rotate(-179.955) scale(786.64 1052.18)"
                        >
                            <stop stopColor="#ff3c78" />
                            <stop offset="1" stopColor="#ea00ff" stop-opacity="0.34" />
                        </radialGradient>
                    </defs>
                </svg>
            ) : (
                <svg
                    preserveAspectRatio="none"
                    width="100%"
                    height="213"
                    viewBox="0 0 578 213"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="578" height="363">
                        <rect width="578" height="363" fill="#C4C4C4" />
                    </mask>
                    <g mask="url(#mask0)">
                        <g filter="url(#filter0_f)">
                            <ellipse cx="473.5" cy="96" rx="473.5" ry="33" fill="url(#paint0_radial)" fillOpacity="0.88" />
                        </g>
                    </g>
                    <defs>
                        <filter
                            id="filter0_f"
                            x="-84"
                            y="-21"
                            width="1115"
                            height="234"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="42" result="effect1_foregroundBlur" />
                        </filter>
                        <radialGradient
                            id="paint0_radial"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(618.5 96) rotate(180) scale(664.5 623.229)"
                        >
                            <stop stopColor="#FF3C78" />
                            <stop offset="1" stopColor="#EA00FF" stop-opacity="0.64" />
                        </radialGradient>
                    </defs>
                </svg>
            )}
        </Container>
    );
}
