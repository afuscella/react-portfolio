import { DefaultTheme } from 'styled-components';
import { typographyVariants } from './typographyVariants';

export const lightTheme = {
  body: '#e5e5e5',
  text: '#32363a',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
}

export const darkTheme = {
  body: '#070C0E',
  text: '#e5e5e5',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
}

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
      color: '#070C0e',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',

    },
  },
  modes: {
    light: {},
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
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
};

export default theme;
