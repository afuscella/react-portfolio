import React from 'react';
import Head from 'next/head';
import { HOME_OG_IMAGE_URL } from '@/lib/constants';

export function Meta() {
  return (
    <Head>
      <title>Arthur Fuscella Silva - Portfólio</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />

      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />

      <meta
        name="description"
        content="My personal portfolio, with projects, thoughts and ideas. Hope you like it."
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
}
