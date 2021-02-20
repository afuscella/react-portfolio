import React from 'react';
import { ThemeProvider } from 'styled-components';

import type { AppProps } from 'next/app';
import Head from 'next/head';

// eslint-disable-next-line import/no-unresolved
import theme from '@/themes/index';
// eslint-disable-next-line import/no-unresolved
import GlobalStyle from '@/themes/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Arthur Fuscella Silva - Portfólio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Raleway&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
