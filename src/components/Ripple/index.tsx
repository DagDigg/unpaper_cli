import { ZIndexes } from 'common/zIndexes';
import React from 'react';
import { RippleContainer } from './elements';

type Props = {
    isAnimating: boolean;
    color?: string;
    children: React.ReactNode;
    ringSize?: number;
    avatarSize: number;
};
export default function Ripple(props: Props) {
    return (
        <RippleContainer avatarSize={props.avatarSize} isAnimating={props.isAnimating} color={props.color} ringSize={props.ringSize}>
            <div
                style={{
                    position: 'absolute',
                    transform: 'translateY(-50%)',
                    top: '50%',
                    width: props.avatarSize,
                    height: props.avatarSize,
                    zIndex: ZIndexes.Content,
                }}
            >
                {props.children}
            </div>
        </RippleContainer>
    );
}
