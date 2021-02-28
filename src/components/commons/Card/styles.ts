import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@/themes/utils/breakpointsMedia';

export const CardWrapper = {
  Card: styled.section`
    flex-wrap: wrap;
    text-decoration: none;
    flex-direction: row;
    margin-bottom: 12px;
    background: ${({ theme}) => theme.colors.light.tertiary.main.color};
    box-shadow: 0 1px 0 rgb(0 0 0 / 20%);
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
      opacity: .8;
      transition: ${({ theme }) => theme.transition};
      cursor: pointer;
    }

    article {
      padding: 10px;
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
