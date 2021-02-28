import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import { TextBase } from './styles';
interface IText {
  tag: any;
  variant: string;
  color: string;
  href?: string;
  target?: string;
  children?: ReactNode | ReactNode[];
}

export function Text({
  tag, variant, children, ...props
}: IText) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  color: PropTypes.string.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['smallestException', 'title', 'subTitle', 'paragraph1', 'paragraph2']),
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'title',
  color: '#000'
};
