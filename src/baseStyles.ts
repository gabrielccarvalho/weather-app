export const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    red: '#ff0000',
    lightest: '#e7e4fc',
    light: '#beb6f0',
    medium: '	#968bde',
    dark: '#7365c7',
    darkest: '#5345ac',
    transparent: 'transparent',
  },
  textWeights: {
    normal: '400',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
  },
  textSizes: {
    xl: '28px',
    llg: '26px',
    lg: '24px',
    mmd: '22px',
    md: '20px',
    sm: '16px',
    xs: '14px',
  },
  shadow: '0px 0px 11px #0000002C',
  space: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '18px',
    xl: '20px',
    xxl: '24px',
  },
}

export type ThemeColors = keyof typeof theme['colors']
export type ThemeTextSizes = keyof typeof theme['textSizes']
