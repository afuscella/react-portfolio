import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import { LoaderWrapper } from './styles';

interface ILoader {
  isRunning: boolean;
  children: ReactNode | ReactNode[];
}

export function Loader({ isRunning, children }: ILoader) {
  return (
    <LoaderWrapper.Content>
      <LoaderWrapper.Loader
        isRunning={isRunning}
      >
        <span className="loader__ball loader__ball--1" />
        <span className="loader__ball loader__ball--2" />
        <span className="loader__ball loader__ball--3" />
      </LoaderWrapper.Loader>
      {children}
    </LoaderWrapper.Content>
  );
}

Loader.propTypes = {
  isRunning: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Loader.defaultValue = {
  isRunning: false,
}
