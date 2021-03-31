import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@/themes/utils/breakpointsMedia';
import { propToStyle } from '@/themes/utils/propToStyle';

export const CoverWrapper = {
  Cover: styled.section`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: ${({ theme }) => theme.fontFamily};
    min-height: 90vh;

    ${breakpointsMedia({
    xs: css`
        margin-left: auto;
        margin-right: auto;
        padding: ${({ theme }) => theme.padding};
      `,
    md: css`
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

  Content: styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    ${breakpointsMedia({
    xs: css`
      flex-direction: column;
    `,
    md: css`
      flex-direction: row;
    `,
  })}

  `,

  Left: styled.div`
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

  Right: styled.div`
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
}
`,

  Header: styled.header`
    ${breakpointsMedia({
    xs: css`
        width: 100%;
        height: 100%;
      `,
    md: css`
        width: 65%;
        height: 50%;
      `,
  })}
  `,

  Bottom: styled.footer`
    order: 4;
  `,
};
