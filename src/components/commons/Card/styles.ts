import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@/themes/utils/breakpointsMedia';

export const CardWrapper = {
  Card: styled.section`
    background: ${({ theme}) => theme.colors.tertiary.light.color};
    text-decoration: none;
    margin-bottom: 12px;
    box-shadow: ${({ theme }) => `0 1px 0 ${theme.colors.tertiary.main.color}20`};
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
      opacity: .7;
      transition: ${({ theme }) => theme.transition};
      cursor: pointer;
    }

    article {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      padding: 10px 20px 10px 20px;
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
