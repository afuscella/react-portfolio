import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@/themes/utils/breakpointsMedia';

export const CardWrapper = {
  Card: styled.section`
    flex-wrap: wrap;
    border-radius: 4px;
    text-decoration: none;
    flex-direction: row;
    margin-bottom: 32px;
    box-shadow: 0 1px 1px rgb(0 0 0 / 35%);
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

    &:hover,
    &:focus {
      opacity: .6;
      transition: ${({ theme }) => theme.transition};
      cursor: pointer;
    }

    article {
      padding: 1rem;
    }

    img {
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
    }
  `,
};
