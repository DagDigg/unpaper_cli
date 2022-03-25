import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

const StyledProgressRing = styled(CircularProgressbarWithChildren).attrs(({ theme, value }) => ({
    styles: buildStyles({
        pathColor: theme.secondary,
        trailColor: theme.smContrast,
        pathTransition: value === 0 ? 'none' : 'stroke-dashoffset 0.5s ease 0s',
    }),
}))``;
type Props = {
    stroke: number;
    progress: number;
    children: React.ReactNode;
};
function ProgressRing(props: Props) {
    return (
        <StyledProgressRing value={props.progress} strokeWidth={props.stroke}>
            {props.children}
        </StyledProgressRing>
    );
}

export default React.memo(ProgressRing);
