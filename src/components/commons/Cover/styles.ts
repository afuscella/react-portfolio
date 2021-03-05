import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@/themes/utils/breakpointsMedia';
import { propToStyle } from '@/themes/utils/propToStyle';

export const CoverWrapper = {
  Cover: styled.section`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    font-family: ${({ theme }) => theme.fontFamily};
    min-height: 90vh;
    ${breakpointsMedia({
    xs: css`
        margin-left: auto;
        margin-right: auto;
        padding: ${({ theme }) => theme.padding};
      `,
    md: css`
        padding-right: 16px;
        padding-left: 16px; 
        max-width: 768px;
      `,
    lg: css`
        max-width: 1160px;
        `,
    xl: css`
        max-width: 1222px;
      `,
  })}

    ${propToStyle('marginTop')};
  `,

  Header: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    ${breakpointsMedia({
    xs: css`
        order: initial;
      `,
    md: css`
      order: 3;
      `,
  })}

    img {
      box-shadow: 0px 0px 10px 4px #747de8;
      animation: glow 7s ease-in-out infinite alternate;
      border-radius: 50%;

      @keyframes glow {
        to {
          box-shadow: 0px 0px 8px 2px #535fed;
        }
      }

      ${breakpointsMedia({
    xs: css`
          width: 75%
        `,
    md: css`
          width: 100%
        `,
  })}
    }
  `,

  Content: styled.div`
    order: 3;
    nav {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ${breakpointsMedia({
    xs: css`
        width: 100%;
        height: 100%;
      `,
    md: css`
        width: 30%;
        height: 50%;
      `,
  })}
  `,
};
