import React from 'react';
import { AwardId } from './types';
import { FirstRoom } from './paths/FirstRoom';
import { FirstTenUsers } from './paths/FirstTenUsers';
import styled from 'styled-components';

const StyledSVG = styled.svg``;

type Props = {
    id: AwardId;
    onClick: (id: AwardId) => void;
    size?: number;
    className?: string;
};
export default function Award(props: Props) {
    return (
        <StyledSVG
            width={props.size ?? '72'}
            height={props.size ?? '72'}
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => props.onClick(props.id)}
            className={props.className}
        >
            {getAwardById(props.id)}
        </StyledSVG>
    );
}

function getAwardById(id: AwardId) {
    switch (id) {
        case AwardId.FirstRoom:
            return <FirstRoom />;
        case AwardId.FirstTenUsers:
        default:
            return <FirstTenUsers />;
    }
}
