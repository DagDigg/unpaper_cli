import { ZIndexes } from 'common/zIndexes';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 222px;
    height: 129px;
`;
const ContentContainer = styled.div`
    position: relative;
    height: 100%;
    z-index: ${ZIndexes.Content};
    padding: 12px 16px;
`;

export default function CreditCardSVG({ children }: { children: React.ReactNode }) {
    return (
        <Container>
            <svg
                style={{ position: 'absolute' }}
                width="222"
                height="129"
                viewBox="0 0 222 129"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="222" height="129">
                    <rect width="222" height="128.566" rx="18" fill="#C4C4C4" />
                </mask>
                <g mask="url(#mask0)">
                    <rect x="0.0965881" y="-0.0229492" width="222.124" height="128.812" rx="18" fill="white" />
                    <g filter="url(#filter0_f_card)">
                        <ellipse cx="64.756" cy="95.5717" rx="81.902" ry="66.1808" fill="#FF3C78" />
                    </g>
                    <g filter="url(#filter1_f_card)">
                        <ellipse cx="173.282" cy="21.023" rx="93.566" ry="66.1808" fill="#A660FF" />
                    </g>
                    <g filter="url(#filter2_f_card)">
                        <ellipse cx="186.214" cy="100.389" rx="76.0699" ry="87.2269" fill="#FF50D8" fillOpacity="0.9" />
                    </g>
                    <g filter="url(#filter3_f_card)">
                        <ellipse cx="26.1616" cy="31.9689" rx="59.0505" ry="48.5859" fill="#FF7F0A" />
                    </g>
                    <mask id="mask1_card" mask-type="alpha" maskUnits="userSpaceOnUse" x="14" y="13" width="24" height="27">
                        <rect x="14" y="13.9561" width="23.3939" height="25.2655" rx="6" fill="#FFE486" />
                    </mask>
                    <g mask="url(#mask1_card)">
                        <rect x="14" y="13.9561" width="23.3939" height="25.2655" rx="6" fill="#FFE486" />
                        <path
                            d="M22.3011 13.9561V19.9009M22.3011 39.2215V32.9051M22.3011 19.9009H14M22.3011 19.9009V26.5888M22.3011 26.5888H14M22.3011 26.5888V32.9051M22.3011 32.9051H14"
                            stroke="white"
                        />
                        <path
                            d="M28.9721 39.2216V33.841M37.3939 22.3779H28.9721V28.4604M28.9721 28.4604H37.3939M28.9721 28.4604V33.841M28.9721 33.841H37.3939"
                            stroke="white"
                        />
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_f_card"
                        x="-94.1459"
                        y="-47.6091"
                        width="317.804"
                        height="286.362"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="38.5" result="effect1_foregroundBlur" />
                    </filter>
                    <filter
                        id="filter1_f_card"
                        x="2.71643"
                        y="-122.158"
                        width="341.132"
                        height="286.362"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="38.5" result="effect1_foregroundBlur" />
                    </filter>
                    <filter
                        id="filter2_f_card"
                        x="33.1444"
                        y="-63.8374"
                        width="306.14"
                        height="328.454"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="38.5" result="effect1_foregroundBlur" />
                    </filter>
                    <filter
                        id="filter3_f_card"
                        x="-109.889"
                        y="-93.6169"
                        width="272.101"
                        height="251.172"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="38.5" result="effect1_foregroundBlur" />
                    </filter>
                </defs>
            </svg>

            <ContentContainer>{children}</ContentContainer>
        </Container>
    );
}
