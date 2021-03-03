import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@/themes/utils/breakpointsMedia';

export const CardWrapper = {
  Card: styled.section`   
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

    a {
      text-decoration: none;
      &:hover,
      &:focus {
        opacity: .7;
        transition: ${({ theme }) => theme.transition};
        cursor: pointer;
      }
    }

    article {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      padding-left: 15px;
      padding-right: 15px;
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
