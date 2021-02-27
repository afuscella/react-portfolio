import 'styled-components';
import { ITypographyVariants } from '@/themes/typographyVariants';
import { ModeType } from '@/types/themeModeType';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: ModeType;
      dark: ModeType;
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
