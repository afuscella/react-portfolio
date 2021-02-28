import styled, { css } from 'styled-components';
import { breakpointsMedia } from '@/themes/utils/breakpointsMedia';

export const AboutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  ${breakpointsMedia({
    xs: css`
      margin-left: auto;
      margin-right: auto;
      max-width: 768px;
      width: 100%;
    `,
    md: css`
      padding: 0 32px;
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}

  section {
    padding-left: ${({ theme }) => theme.padding};
    padding-right: ${({ theme }) => theme.padding};
  }
`;
