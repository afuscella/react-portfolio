import React from 'react';
import { ThemeProvider } from 'styled-components';

import type { AppProps } from 'next/app'
import Head from 'next/head';

import theme from '@/themes/index';
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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
