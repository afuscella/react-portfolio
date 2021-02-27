import { css } from 'styled-components';

import { breakpoints } from '../index';

// eslint-disable-next-line import/prefer-default-export
export function breakpointsMedia(cssByBreakpoint: IBreakpointsMedia) {
  const breakpointsNames = Object.keys(cssByBreakpoint);

  return breakpointsNames
    .filter((breakpointsName) => Boolean(cssByBreakpoint[breakpointsName]))
    .map((breakpointsName) => css`
        @media only screen and (min-width: ${breakpoints[breakpointsName]}px) {
          ${cssByBreakpoint[breakpointsName]} ;
        }
      `);
}
