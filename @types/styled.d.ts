import 'styled-components';
import { ITypographyVariants } from '@/themes/typographyVariants';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        light: {
          color: string;
        };
        main: {
          color: string;
        };
      };
      borders: {
        main: {
          color: string;
        };
      };
      primary: {
        main: {
          color: string;
          contrastText: string;
        };
      };
      secondary: {
        main: {
          color: string;
          contrastText: string;
        };
      };
      modes: {
        dark: {};
      };
    },
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    },
    typographyVariants: ITypographyVariants;
    transition: string;
    fontFamily: string;
  }
}
