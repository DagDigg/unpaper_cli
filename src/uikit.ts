import { css, FlattenInterpolation, ThemeProps } from 'styled-components';

export const colors = {
    light: {
        light: 1,
        white: '#FFFFFF',
        black: '#000000',

        // Primary
        'primary-1': '#606BCC',
        primary: '#7E87D5',
        'primary+1': '#B9BFF1',

        // Secondary
        'secondary-1': '#0973CC',
        secondary: '#0486F4',
        'secondary+1': '#D8EDFF',

        // Red
        'red-1': '#e04747',
        red: '#FF5757',
        'red+1': '#fdc1d2',

        // Green
        green: '#62FF98',

        // Small contrast
        'smContrast-1': '#E1E7F5',
        smContrast: '#ECF3FF',
        'smContrast+1': '#EFF6FD',

        // Medium contrast
        'mdContrast-1': '#242527',
        mdContrast: '#313336',
        'mdContrast+1': '#5e5e6d',

        // High contrast
        hiContrast: '#0d1119',

        // Low contrast. Eg: background
        lwContrast: '#FBFCFF',

        // Grayed
        'grayed-1': '#a9a9a9',
        grayed: '#e4e4e4',

        pink: '#FF7DA2',

        // Chips
        colorOrangeBg: '#FDE9C1',
        colorOrangeFg: '#FFA800',
        colorPinkFg: '#FF7DA2',
        colorPinkBg: '#ffebff',
        colorPurpleBg: '#f5e8ff',
        colorPurpleFg: '#a362d8',
        colorGreenBg: '#DFFFEF',
        colorGreenFg: '#1FC06F',
        colorAzureBg: '#d9faff',
        colorAzureFg: '#3c9fd4',
        colorDarkGrayFg: '#5e5e6d',
        colorDarkGrayBg: '#ecedf9',
    },

    dark: {
        light: 0,
        white: '#FFFFFF',
        black: '#000000',

        // Primary
        'primary-1': '#B9BFF1',
        primary: '#7E87D5',
        'primary+1': '#606BCC',

        // Secondary
        'secondary-1': '#D8EDFF',
        secondary: '#0486F4',
        'secondary+1': '#0973CC',

        // Red
        'red-1': '#ad3c3c',
        red: '#d14b4b',
        'red+1': '#D68E8E',

        // Green
        green: '#62FF98',

        // Small contrast
        'smContrast-1': '#171d2a',
        smContrast: '#343245',
        'smContrast+1': '#5e5e6d',

        // Medium contrast
        'mdContrast-1': '#F5F8FF',
        mdContrast: '#EDF1FA',
        'mdContrast+1': '#C9CEDA',

        // High contrast
        hiContrast: '#fbfcff',

        // Low contrast. Eg: background
        lwContrast: '#0d1119',

        // Grayed
        'grayed-1': '#808080',
        grayed: '#4E4E56',

        pink: '#FF7DA2',

        // Chips
        colorOrangeBg: '#7d572a',
        colorOrangeFg: '#FFE6C9',
        colorPinkFg: '#cd597a',
        colorPinkBg: '#dba7b6',
        colorPurpleBg: '#573263',
        colorPurpleFg: '#c69dd4',
        colorGreenBg: '#358e61',
        colorGreenFg: '#DFFFEF',
        colorAzureBg: '#3B8CB9',
        colorAzureFg: '#F6FCFF',
        colorDarkGrayFg: '#5e5e6d',
        colorDarkGrayBg: '#d2d9e9',
    },
};

export const weights = {
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
};

export const fontSizes = {
    mega: '80px',
    super: '40px',
    large: '34px',
    title: '26px',
    subtitle: '22px',
    regularBig: '19px',
    regular: '16px',
    small: '14px',
    extraSmall: '13px',
};

export type ScalesKeys = 'mega' | 'super' | 'large' | 'title' | 'subtitle' | 'regular' | 'regularBig' | 'small' | 'extraSmall';
export const scales: Record<ScalesKeys, FlattenInterpolation<ThemeProps<any>>> = {
    mega: css`
        font-size: ${fontSizes.mega};
        /* line-height: 1.05; */
        font-weight: ${weights.extraBold};
        color: ${({ theme }) => theme.hiContrast};
    `,
    super: css`
        font-size: ${fontSizes.super};
        /* line-height: 64px; */
        font-weight: ${weights.extraBold};
        color: ${({ theme }) => theme.hiContrast};
    `,
    large: css`
        font-size: ${fontSizes.large};
        /* line-height: 55px; */
        font-weight: ${weights.extraBold};
        color: ${({ theme }) => theme.hiContrast};
    `,
    title: css`
        font-size: ${fontSizes.title};
        /* line-height: 42px; */
        font-weight: ${weights.semiBold};
        color: ${({ theme }) => theme.hiContrast};
    `,
    subtitle: css`
        font-size: ${fontSizes.subtitle};
        /* line-height: 28px; */
        font-weight: ${weights.semiBold};
        color: ${({ theme }) => theme['mdContrast']};
    `,
    regularBig: css`
        font-size: ${fontSizes.regularBig};
        /* line-height: 31px; */
        font-weight: ${weights.medium};
        color: ${({ theme }) => theme['mdContrast']};
    `,
    regular: css`
        font-size: ${fontSizes.regular};
        /* line-height: 24px; */
        font-weight: ${weights.medium};
        color: ${({ theme }) => theme['mdContrast']};
    `,
    small: css`
        font-size: ${fontSizes.small};
        /* line-height: 22px; */
        font-weight: ${weights.medium};
        color: ${({ theme }) => theme['mdContrast+1']};
    `,
    extraSmall: css`
        font-size: ${fontSizes.extraSmall};
        /* line-height: 19px; */
        font-weight: ${weights.medium};
        color: ${({ theme }) => theme['mdContrast+1']};
    `,
};

export const shadows = {
    formField: '0px 0px 0px 4px',
};
