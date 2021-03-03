import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@/themes/utils/breakpointsMedia';
import { propToStyle } from '@/themes/utils/propToStyle';

export const Grid = {
  Container: styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;

    ${propToStyle('marginTop')};

    ${breakpointsMedia({
    xs: css`
        max-width: initial;
      `,
    sm: css`
        padding-right: 28px;
        padding-left: 28px;
        max-width: 576px; 
      `,
    md: css`
        max-width: 768px;
        padding-right: 16px;
        padding-left: 16px; 
      `,
    lg: css`
        max-width: 1160px; 
      `,
    xl: css`
        max-width: 1222px;
    `,
  })}
  `,

  Row: styled.div`
    display: flex;
    flex-wrap: wrap;

    ${breakpointsMedia({
    sm: css`
        margin-left: -16px;
        margin-right: -16px;
      `,
  })}
  `,

  Column: styled.div`
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;

    ${breakpointsMedia({
    sm: css`
        padding-left: 16px;
        padding-right: 16px;
      `,
  })}

    ${propToStyle('display')}
    ${propToStyle('alignItems')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flexDirection')}

    ${propToStyle('marginTop')}

    ${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
        margin-left: ${(100 * offset) / 12}%;
        `;
    }
    return breakpointsMedia({
      ...(offset?.xs && {
        xs: css`
            margin-left: ${(100 * offset.xs) / 12}%;
          `,
      }),
      ...(offset?.sm && {
        sm: css`
            margin-left: ${(100 * offset.sm) / 12}%;
          `,
      }),
      ...(offset?.md && {
        md: css`
            margin-left: ${(100 * offset.md) / 12}%;
          `,
      }),
      ...(offset?.lg && {
        lg: css`
            margin-left: ${(100 * offset.lg) / 12}%;
          `,
      }),
      ...(offset?.xl && {
        xl: css`
            margin-left: ${(100 * offset.xl) / 12}%;
          `,
      }),
    });
  }}

    ${({ value }) => {
    if (typeof value === 'number') {
      return css`
          flex: 0 0 ${(100 * value) / 12}%;
          max-width: ${(100 * value) / 12}%;
        `;
    }

    return breakpointsMedia({
      ...(value.xs && {
        xs: css`
            flex: 0 0 ${(100 * value.xs) / 12}%;
            max-width: ${(100 * value.xs) / 12}%;
          `,
      }),

      ...(value.sm && {
        sm: css`
            flex: 0 0 ${(100 * value.sm) / 12}%;
            max-width: ${(100 * value.sm) / 12}%;
          `,
      }),

      ...(value.md && {
        md: css`
            flex: 0 0 ${(100 * value.md) / 12}%;
            max-width: ${(100 * value.md) / 12}%;
          `,
      }),

      ...(value.lg && {
        lg: css`
            flex: 0 0 ${(100 * value.lg) / 12}%;
            max-width: ${(100 * value.lg) / 12}%;
          `,
      }),

      ...(value.xl && {
        xl: css`
            flex: 0 0 ${(100 * value.xl) / 12}%;
            max-width: ${(100 * value.xl) / 12}%;
          `,
      }),
    });
  }}
  `,
};
