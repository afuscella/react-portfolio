/* eslint-disable import/no-unresolved */
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '@/themes/utils/breakpointsMedia';

// eslint-disable-next-line import/prefer-default-export
export const CoverWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  flex-direction: column;
  ${breakpointsMedia({
    md: css`
      margin-left: auto;
      margin-right: auto;
      max-width: 768px;
      width: 100%;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;
