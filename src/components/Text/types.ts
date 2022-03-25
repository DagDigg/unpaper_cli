import { colors, ScalesKeys, weights } from 'uikit';

export type TextProps = {
    color?: keyof typeof colors.light;
    lightColor?: keyof typeof colors.light;
    darkColor?: keyof typeof colors.dark;
    customColor?: string;
    alpha?: string;
    scale?: ScalesKeys;
    weight?: keyof typeof weights;
    align?: 'center' | 'end' | 'start';
    responsive?: Responsive;
    ml?: number;
    mt?: number;
    mr?: number;
    mb?: number;
    lh?: number;
};

type Responsive = { maxWidth: number } & TextProps;
