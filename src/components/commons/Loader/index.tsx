import React from 'react';

import { LoaderWrapper } from './styles';

export function Loader({ children }) {
  return (
    <>
      <LoaderWrapper>
        <span className="loader__ball loader__ball--1" />
        <span className="loader__ball loader__ball--2" />
        <span className="loader__ball loader__ball--3" />
      </LoaderWrapper>
      {children}
    </>
  );
}
