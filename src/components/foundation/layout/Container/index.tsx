import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { propToStyle } from '@/themes/utils/propToStyle';

interface IContainer {
  flex?: number;
  flexWrap?: string;
  flexDirection?: string;
  display?: string;
  position?: string;
  justifyContent?: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  backgroundPosition?: string;
}

export const Box = styled.div<IContainer>`
  transition: ${({ theme }) => theme.transition};
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('flexDirection')}
  ${propToStyle('display')}
  ${propToStyle('position')}
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

export function BorderedBox({ children, ...props }: IBorderedBox) {
  return (
    <BorderedBoxWrapper
      as={Box}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </BorderedBoxWrapper>
  );
};
