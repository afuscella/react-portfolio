import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
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
    }
  }
}
