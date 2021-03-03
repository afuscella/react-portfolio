import { DefaultTheme } from 'styled-components';
import { typographyVariants } from './typographyVariants';

import { ColorsType } from '@/types/colorsType';

const light: ColorsType = {
  background: {
    light: {
      color: '#f0f0f0',
    },
    main: {
      color: '#e5e5e5',
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
      color: '#88989e',
      contrastText: '#fff',
    },
    light: {
      color: '#32363a',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#070C0e',
      contrastText: '#fff',
    },
    light: {
      color: '#f0f0f7',
      contrastText: '#fff',
    },
  },
};

const dark: ColorsType = {
  background: {
    light: {
      color: '#000',
    },
    main: {
      color: '#e5e5e5',
    },
  },
  primary: {
    main: {
      color: '#fff',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#88989e',
      contrastText: '#fff',
    },
    light: {
      color: '#e5e5e5',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#f0f0f7',
      contrastText: '#fff',
    },
    light: {
      color: '#070C0e',
      contrastText: '#fff',
    },
  },
};

export const colors = {
  light: light,
  dark: dark,
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
  padding: '15px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
};

export default theme;
