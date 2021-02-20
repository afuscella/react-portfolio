import styled from 'styled-components';

import { propToStyle } from '@/themes/utils/propToStyle';

interface IContainer {
  flex?: number;
  display: string;
  flexWrap: string;
  flexDirection: string;
  justifyContent: string;
}

// eslint-disable-next-line import/prefer-default-export
export const Box = styled.div<IContainer>`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`;
