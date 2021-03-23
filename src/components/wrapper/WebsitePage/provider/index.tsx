import React, { ReactNode, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/themes/GlobalStyle';
import ThemeContext from '@/context/Theme';
import theme, { colors } from '@/themes/index';

interface IWebsiteGlobalProvider {
  children: ReactNode | ReactNode[],
}

export default function WebsiteGlobalProvider({ children }: IWebsiteGlobalProvider) {
  const themeState = {
    DARK: 'dark',
    LIGHT: 'light',
  };
  const [themeName, setThemeName] = useState<string>(themeState.DARK);

  function themeToggler() {
    setThemeName(themeName === themeState.DARK ? themeState.LIGHT : themeState.DARK);
  }

  return (
    <ThemeContext.Provider value={{ themeName, themeToggler }}>
      <ThemeProvider theme={{ ...theme, colors: colors[themeName] }}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
