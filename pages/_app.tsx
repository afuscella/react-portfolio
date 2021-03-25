import React from 'react';
import type { AppProps } from 'next/app';

import { Head } from '@/components/commons/Head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}
