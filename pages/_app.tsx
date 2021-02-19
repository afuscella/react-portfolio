import React from 'react';
import { ThemeProvider } from 'styled-components';

import type { AppProps } from 'next/app'
import Head from 'next/head';

import theme from '../src/themes';
import GlobalStyle from '../src/themes/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Arthur Fuscella Silva</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
