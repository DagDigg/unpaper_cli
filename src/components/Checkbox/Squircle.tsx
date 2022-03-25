import React, { useEffect, useState } from 'react';
import { CheckMark, StyledPath, StyledSvg } from './elements';

export default function Squircle(props: { isSelected: boolean }) {
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const animate = () => {
        setShouldAnimate(true);
        window.setTimeout(() => {
            setShouldAnimate(false);
        }, 300);
    };
    useEffect(() => {
        animate();
    }, [props.isSelected]);

    return (
        <StyledSvg width="24" height="24" viewBox="-3 -3 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <StyledPath
                isSelected={props.isSelected}
                shouldAnimate={shouldAnimate}
                d="M0 9.5216C0 1.68056 1.68056 0 9.5216 0H12.4784C20.3194 0 22 1.68056 22 9.5216V12.4784C22 20.3194 20.3194 22 12.4784 22H9.5216C1.68056 22 0 20.3194 0 12.4784V9.5216Z"
            />
            <CheckMark
                visible={props.isSelected}
                d="M4.71069 10.5822C4.32215 10.1897 3.68899 10.1865 3.29649 10.575C2.90399 10.9636 2.90078 11.5967 3.28931 11.9892L4.71069 10.5822ZM8.66667 16L7.95598 16.7035C8.15317 16.9027 8.42492 17.01 8.70501 16.9993C8.9851 16.9885 9.24783 16.8607 9.42918 16.647L8.66667 16ZM18.7625 5.64698C19.1198 5.22586 19.0681 4.59481 18.647 4.23749C18.2259 3.88018 17.5948 3.9319 17.2375 4.35302L18.7625 5.64698ZM3.28931 11.9892L7.95598 16.7035L9.37735 15.2965L4.71069 10.5822L3.28931 11.9892ZM9.42918 16.647L18.7625 5.64698L17.2375 4.35302L7.90416 15.353L9.42918 16.647Z"
            />
        </StyledSvg>
    );
}
