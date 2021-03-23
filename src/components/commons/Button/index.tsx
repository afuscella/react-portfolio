import React, { ReactNode } from 'react';

import { ButtonBase } from './styles';

interface IButton {
  href?: string;
  children: ReactNode | ReactNode[];
}

export function Button({
  href, children, ...props
}: IButton) {
  const hasHref = Boolean(href);
  const tag = hasHref ? 'button' : 'button';
  return (
    <ButtonBase
      as={tag}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  href: undefined,
  // ghost: false,
};
