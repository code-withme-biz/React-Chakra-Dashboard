const ROOT_FONT_SIZE = 16;

const REM_PRECISION = 3;
const pxToRem = (pxValue: number) => (pxValue / ROOT_FONT_SIZE).toFixed(REM_PRECISION) + 'rem';

const fontSizes = {
  xs: pxToRem(10), // label
  sm: pxToRem(13), // navigation, table small
  md: pxToRem(14), // h4, button
  lg: pxToRem(15), // table
  xl: pxToRem(ROOT_FONT_SIZE), // h3, paragraph
  // '2xl' is vacant
  '3xl': pxToRem(20), // h2
  // '4xl' is vacant
  '5xl': pxToRem(28) // h1, numbers
  // '6xl' - '9xl' are vacant
};

const lineHeights = {
  normal: 'normal',
  none: 1,
  shorter: pxToRem(15.6), // navigation, table small
  short: pxToRem(19.2), // h3
  base: pxToRem(24), // h2, paragraph
  tall: pxToRem(26), // table
  taller: pxToRem(33.6), // h1, numbers
  // '3' is vacant
  '4': pxToRem(12), // label
  '5': pxToRem(14), // h4
  // '6' is vacant
  '7': pxToRem(16.8), // button
  // '8' and '9' are vacant
  '10': '2.5rem'
};

const typography = {
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, serif'
  },
  fontSizes,
  lineHeights
};

const typographyOverrides = {
  Heading: {
    variants: {
      h1: {
        fontSize: '5xl',
        fontWeight: 600,
        lineHeight: lineHeights['taller']
      },
      h2: {
        fontSize: '3xl',
        fontWeight: 500,
        lineHeight: lineHeights['base']
      },
      h3: {
        fontSize: 'xl',
        fontWeight: 600,
        lineHeight: lineHeights['shorter']
      },
      h4: {
        fontSize: 'md',
        fontWeight: 600,
        lineHeight: lineHeights['5']
      }
    }
  },
  Text: {
    variants: {
      button: {
        fontSize: 'md',
        fontWeight: 500,
        lineHeight: lineHeights['shorter']
      },
      label: {
        fontSize: 'xs',
        fontWeight: 600,
        lineHeight: lineHeights['4']
      },
      paragraph: {
        fontSize: 'xl',
        fontWeight: 400,
        lineHeight: lineHeights['base']
      },
      navigation: {
        fontSize: 'sm',
        fontWeight: 500,
        lineHeight: lineHeights['shorter']
      },
      numbers: {
        fontSize: '5xl',
        fontWeight: 600,
        lineHeight: lineHeights['taller']
      },
      table: {
        fontSize: 'lg',
        fontWeight: 600,
        lineHeight: lineHeights['tall']
      },
      tableSmall: {
        fontSize: 'sm',
        fontWeight: 700,
        lineHeight: lineHeights['shorter']
      }
    }
  },
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: 'none'
      }
    }
  }
};

export default typography;
export { typographyOverrides };
