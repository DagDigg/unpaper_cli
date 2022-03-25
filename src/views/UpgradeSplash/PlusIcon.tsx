import React from 'react';

export default function PlusIcon(props: { size: 'bg' | 'md' }) {
    return props.size === 'bg' ? (
        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_plus)">
                <path
                    d="M36 14C36 11.2386 33.7614 9 31 9C28.2386 9 26 11.2386 26 14H36ZM26 48C26 50.7614 28.2386 53 31 53C33.7614 53 36 50.7614 36 48H26ZM48 36C50.7614 36 53 33.7614 53 31C53 28.2386 50.7614 26 48 26V36ZM14 26C11.2386 26 9 28.2386 9 31C9 33.7614 11.2386 36 14 36V26ZM26 14V48H36V14H26ZM48 26H14V36H48V26Z"
                    fill="white"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_plus"
                    x="0"
                    y="0"
                    width="62"
                    height="62"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg>
    ) : (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 12 }}>
            <g filter="url(#filter0_d_plus)">
                <path
                    d="M17.5 6C17.5 4.61929 16.3807 3.5 15 3.5C13.6193 3.5 12.5 4.61929 12.5 6H17.5ZM12.5 24C12.5 25.3807 13.6193 26.5 15 26.5C16.3807 26.5 17.5 25.3807 17.5 24H12.5ZM24 17.5C25.3807 17.5 26.5 16.3807 26.5 15C26.5 13.6193 25.3807 12.5 24 12.5V17.5ZM6 12.5C4.61929 12.5 3.5 13.6193 3.5 15C3.5 16.3807 4.61929 17.5 6 17.5V12.5ZM12.5 6V24H17.5V6H12.5ZM24 12.5H6V17.5H24V12.5Z"
                    fill="white"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_plus"
                    x="0.5"
                    y="0.5"
                    width="29"
                    height="29"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}
