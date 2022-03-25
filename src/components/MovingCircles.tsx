import React from 'react';
import styled from 'styled-components';

export const MovingCircles = React.memo(function () {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                opacity: '60%',
            }}
        >
            <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                <StyledEllipse
                    delay={getRandomInt(0, 3)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="60%"
                    cy="20%"
                    rx="12"
                    ry="12"
                    fill="#FF8585"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 3)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="50%"
                    cy="50%"
                    rx="59"
                    ry="59"
                    fill="#FF6695"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 2)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="20%"
                    cy="39%"
                    rx="42"
                    ry="42"
                    fill="#ADF5FF"
                />

                <StyledEllipse
                    delay={getRandomInt(0, 2)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="10%"
                    cy="59%"
                    rx="18"
                    ry="18"
                    fill="#FF9A8C"
                />

                <StyledEllipse
                    delay={getRandomInt(0, 2)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="4%"
                    cy="30%"
                    rx="79"
                    ry="79"
                    fill="#7C66FF"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 2)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="79%"
                    cy="59%"
                    rx="50"
                    ry="50"
                    fill="#BEFFCD"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 2)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="9%"
                    cy="89%"
                    rx="50"
                    ry="50"
                    fill="#8E85B3"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 2)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="76%"
                    cy="34%"
                    rx="36"
                    ry="36"
                    fill="#FFD88C"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 5)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="31%"
                    cy="71%"
                    rx="115"
                    ry="115"
                    fill="#BEFF8C"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 3)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="40%"
                    cy="32%"
                    rx="20"
                    ry="20"
                    fill="#85C7FF"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 3)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="7%"
                    cy="1%"
                    rx="20"
                    ry="20"
                    fill="#8E85B3"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 3)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="47%"
                    cy="5%"
                    rx="18"
                    ry="18"
                    fill="#c9ec9a"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 3)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="67%"
                    cy="76%"
                    rx="12"
                    ry="12"
                    fill="#FF8585"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 5)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="28%"
                    cy="16%"
                    rx="45"
                    ry="45"
                    fill="#FFBEBE"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 5)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="90%"
                    cy="7%"
                    rx="32"
                    ry="32"
                    fill="#85B3A8"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 5)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="71%"
                    cy="84%"
                    rx="95"
                    ry="95"
                    fill="#DFBEFF"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 5)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="51%"
                    cy="92%"
                    rx="25"
                    ry="25"
                    fill="#FFF9BE"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 5)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="97%"
                    cy="52%"
                    rx="25"
                    ry="25"
                    fill="#beffe4"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 5)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="87%"
                    cy="42%"
                    rx="55"
                    ry="55"
                    fill="#bec4ff"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 5)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="97%"
                    cy="24%"
                    rx="55"
                    ry="55"
                    fill="#b9cfd4"
                />
                <StyledEllipse
                    delay={getRandomInt(0, 5)}
                    speed={getRandomInt(4, 6)}
                    coord={getRandomCoord()}
                    cx="97%"
                    cy="98%"
                    rx="95"
                    ry="95"
                    fill="#e09898"
                />
            </svg>
        </div>
    );
});

const StyledEllipse = styled.ellipse<{ delay: number; speed: number; coord: string }>`
    animation: float ${({ speed }) => speed + 's'} ease-in-out infinite;
    animation-delay: ${({ delay }) => delay + 's'};
    @keyframes float {
        0% {
            transform: translate(0px, 0px);
        }
        50% {
            transform: translate(${({ coord }) => coord});
        }
        100% {
            transform: translate(0px, 0px);
        }
    }
`;

function getRandomCoord() {
    const signX = Math.round(Math.random()) === 0 ? '-' : '+';
    const signY = Math.round(Math.random()) === 0 ? '-' : '+';
    const amtX = Math.floor(getRandomInt(10, 30));
    const amtY = Math.floor(getRandomInt(10, 30));

    return `${signX}${amtX}px, ${signY}${amtY}px`;
}

function getRandomInt(min: number, max: number) {
    return Math.random() * Math.floor(max) + min;
}
