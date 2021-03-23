import styled from 'styled-components';
import { propToStyle } from '@/themes/utils/propToStyle';

interface IContainer {
  flex: number;
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
  ${propToStyle('background')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}

  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}
  
`;
