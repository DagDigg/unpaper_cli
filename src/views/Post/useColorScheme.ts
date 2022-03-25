import { lighten } from 'common/colors';
import { createContext, useContext } from 'react';
import { ThemeContext } from 'styled-components';

export type ColorScheme = {
    lwstContrast: string;
    lwContrast: string;
    smContrast: string;
    base: string;
    hiContrast: string;
    progressBarBG: string;
    progressBarHL: string;
    ripple: string;
};

/**
 * Generates a monochromatic color palette
 * starting from a base color
 *
 * @param baseColor Color from which a palette is generated
 * @returns Color palette
 */
export default function useColorScheme(baseColor: string): ColorScheme {
    const theme = useContext(ThemeContext);
    const darken30 = lighten(baseColor, -30);
    const darken65 = lighten(baseColor, -65);
    const darken70 = lighten(baseColor, -70);
    const lighten20 = lighten(baseColor, 20);
    const lighten39 = lighten(baseColor, 39);
    return {
        base: baseColor,
        lwstContrast: theme.light ? lighten39 : darken70,
        lwContrast: theme.light ? lighten20 + '14' : darken70 + '14',
        smContrast: theme.light ? lighten20 + '61' : darken65,
        hiContrast: theme.light ? darken30 : lighten20,
        progressBarBG: theme.light ? darken30 + '21' : lighten20 + '21',
        progressBarHL: theme.light ? baseColor : lighten20,
        ripple: theme.light ? baseColor + '91' : lighten20 + '91',
    };
}

export const ColorSchemeContext = createContext<ColorScheme>({
    base: '',
    hiContrast: '',
    lwContrast: '',
    lwstContrast: '',
    smContrast: '',
    progressBarBG: '',
    progressBarHL: '',
    ripple: '',
});
