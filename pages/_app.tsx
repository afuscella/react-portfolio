import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import type { AppProps } from 'next/app';

import ThemeContext from '@/context/Theme';
import GlobalStyle from '@/themes/GlobalStyle';
import theme, { colors } from '@/themes/index';
import { Meta } from '@/components/commons/Meta';

export default function App({ Component, pageProps }: AppProps) {
  const [themeName, setThemeName] = useState<string>('dark');

  function themeToggler() {
    setThemeName(themeName === 'dark' ? 'light' : 'dark');
  }

  return (
    <>
      <Meta />

      <ThemeContext.Provider value={{ themeName, themeToggler }}>
        <ThemeProvider theme={{ ...theme, colors: colors[themeName] }}>

          <GlobalStyle />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
