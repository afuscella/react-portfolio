import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import ThemeContext from '@/context/Theme';
import GlobalStyle from '@/themes/GlobalStyle';
import theme, { colors } from '@/themes/index';

export default function App({ Component, pageProps }: AppProps) {
  const [themeName, setThemeName] = useState<string>('light');

  function themeToggler() {
    setThemeName(themeName === 'dark' ? 'light' : 'dark');
  }

  return (
    <>
      <Head>
        <title>Arthur Fuscella Silva - Portfólio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

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
