import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { propToStyle } from '@/themes/utils/propToStyle';

interface IContainer {
  flex?: number;
  display?: string;
  flexWrap?: string;
  flexDirection?: string;
  justifyContent?: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  backgroundPosition?: string;
}

export const Box = styled.div<IContainer>`
  transition: ${({ theme }) => theme.transition};
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexWrap')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('background')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}

  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}
  ${propToStyle('paddingLeft')}
  ${propToStyle('paddingRight')}
  ${propToStyle('paddingTop')}
  ${propToStyle('paddingBottom')}
  ${propToStyle('height')}
`;

const BorderedBoxWrapper = styled.div<IContainer>`
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
`;

interface IBorderedBox {
  children: ReactNode | ReactNode[],
}

export const BorderedBox: FC<IBorderedBox> = ({ children, ...props }) => (
  <BorderedBoxWrapper
    as={Box}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children}
  </BorderedBoxWrapper>
);
