import styled, { css } from 'styled-components';
import { breakpointsMedia } from '@/themes/utils/breakpointsMedia';

export const HeartWrapper = styled.button`
  background: ${({ theme }) => `${theme.colors.tertiary.light.color}`};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 6px;
  outline: 0;
  cursor: pointer;

  width: 450px;
  ${breakpointsMedia({
  xs: css`
      width: 350px;
    `,
  md: css`
      width: 325px;
    `,
  lg: css`
      width: 450px;
    `,
  xl: css`
      width: 450px;
    `,
})}

  div {
    --size: 35px;
    width: var(--size);
    height: var(--size);

    pointer-events: none;  
  };
`;
