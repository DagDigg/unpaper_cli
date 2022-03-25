import React from 'react';
import styled from 'styled-components';
import * as Text from 'components/Text';

const Wrapper = styled.div`
    height: 46px;
    width: 100%;
    border-radius: 100px;
    display: flex;
    align-items: center;
    background-color: #4285f4;
    padding: 0 24px;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    &: hover {
        background-color: #4c80d6;
    }
`;

type Props = {
    label: string;
    onClick: () => void;
};
export default function GoogleButton(props: Props) {
    return (
        <Wrapper onClick={props.onClick}>
            <Icon />
            <div style={{ margin: 'auto' }}>
                <Text.Regular color="white">{props.label}</Text.Regular>
            </div>
        </Wrapper>
    );
}

function Icon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="2uwwnf7l9r3rtuj6berufi4tcgdag67"
            role="img"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <title id="2uwwnf7l9r3rtuj6berufi4tcgdag67">Google icon</title>
            <path
                fill="white"
                width="24"
                height="24"
                d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
            ></path>
        </svg>
    );
}
