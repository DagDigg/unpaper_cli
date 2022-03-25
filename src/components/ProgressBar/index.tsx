import React from 'react';
import { BackBar, FrontBar } from './elements';

export type BarType = 'horizontal' | 'vertical';

type Props = {
    progress: number;
    baseColor?: string;
    highlightColor?: string;
    width?: number;
    height?: number;
    borderRadius?: number;
    fluid?: boolean;
    type: BarType;
    className?: string;
};
export default function ProgressBar(props: Props) {
    return (
        <BackBar
            fluid={props.fluid}
            borderRadius={props.borderRadius}
            width={props.width}
            height={props.height}
            type={props.type}
            color={props.baseColor}
            className={props.className}
        >
            <FrontBar
                borderRadius={props.borderRadius}
                width={props.width}
                height={props.height}
                type={props.type}
                color={props.highlightColor}
                progress={props.progress}
            />
        </BackBar>
    );
}
