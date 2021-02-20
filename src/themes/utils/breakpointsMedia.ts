/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components';
import { breakpoints } from '../index';

export function breakpointsMedia(cssByBreakpoint) {
  const breakpointsNames = Object.keys(cssByBreakpoint);

  return breakpointsNames
    .filter((breakpointsName) => Boolean(cssByBreakpoint[breakpointsName]))
    .map((breakpointsName) => css`
        @media only screen and (min-width: ${breakpoints[breakpointsName]}px) {
          ${cssByBreakpoint[breakpointsName]} ;
        }
      `);
}
