import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { colors } from 'uikit';

type Alignment = 'center' | 'flex-start' | 'flex-end' | 'space-between';
type Props = {
    justifyContent?: Alignment;
    alignItems?: Alignment;
    flexDirection?: 'row' | 'column';
    flexWrap?: 'wrap' | 'nowrap';
    mb?: number;
    mr?: number;
    ml?: number;
    mt?: number;
    children: React.ReactNode;
    className?: string;
    fluid?: boolean;
    fullHeight?: boolean;
    backGroundColor?: keyof typeof colors.light;
    bgOpacity?: number;
    onClick?: () => void;
    ref?: React.MutableRefObject<any>;
    inlineFlex?: boolean;
};
export default function FlexContainer(props: Props) {
    const theme = useContext(ThemeContext);

    const style: React.CSSProperties = {
        display: 'flex',
        alignItems: props.alignItems ?? 'center',
        flexDirection: props.flexDirection,
        // Margins
        marginBottom: props.mb + 'px',
        marginRight: props.mr + 'px',
        marginLeft: props.ml + 'px',
        marginTop: props.mt + 'px',
        flexWrap: props.flexWrap ?? 'nowrap',
        justifyContent: props.justifyContent ?? 'center',
    };
    if (props.fluid) {
        style.width = '100%';
    }
    if (props.fullHeight) {
        style.height = '100%';
    }
    if (props.inlineFlex) {
        style.display = 'inline-flex';
    }
    if (props.backGroundColor) {
        style.backgroundColor = props.bgOpacity ? theme[props.backGroundColor] + String(props.bgOpacity) : theme[props.backGroundColor];
    }

    return (
        <div className={props.className} style={style} onClick={props.onClick} ref={props.ref}>
            {props.children}
        </div>
    );
}
