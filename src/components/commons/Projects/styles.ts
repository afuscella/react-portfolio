import styled, { css } from 'styled-components';
import { breakpointsMedia } from '@/themes/utils/breakpointsMedia';

export const ProjectsWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100vh;

  ${breakpointsMedia({
    xs: css`
      margin-left: auto;
      margin-right: auto;
      max-width: 768px;
      width: 100%;
    `,
    md: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;
