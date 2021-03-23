import 'styled-components';
import { ITypographyVariants } from '@/themes/typographyVariants';
import { ColorsType } from '@/types/colorsType';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType,
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    },
    typographyVariants: ITypographyVariants;
    padding: string;
    borderRadius: string;
    transition: string;
    fontFamily: string;
  }
}
