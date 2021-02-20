import { DefaultTheme } from 'styled-components';
import { typographyVariants } from './typographyVariants';

const colors = {
  background: {
    light: {
      color: '#e5e5e5',
    },
    main: {
      color: '#f2f2f2',
    },
  },
  borders: {
    main: {
      color: '#f1f1f1',
    },
  },
  primary: {
    main: {
      color: '#32363a',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',

    },
  },
  modes: {
    dark: {},
  },
};

export const breakpoints = {
  xs: 0, // extra small
  sm: 480, // small
  md: 768, // medium
  lg: 992, // large
  xl: 1200, // extra large
};

const theme: DefaultTheme = {
  colors,
  typographyVariants,
  breakpoints,
  fontFamily: '\'Rubik\', sans-serif',
};

export default theme;
