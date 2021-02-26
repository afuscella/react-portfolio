import styled, { css } from 'styled-components';
import { breakpointsMedia } from '@/themes/utils/breakpointsMedia';

export const FooterWrapper = {
  Footer: styled.footer`
    display: flex;
    align-items: center;
    flex-direction: row;
    border-radius: 4px;
    display: flex;
    ${breakpointsMedia({
      xs: css`
        justify-content: center;
      `,
      md: css`
        justify-content: flex-start;
      `
     })
    }
  `,

  Icon: styled.div`
    margin-right: 20px;
    img {
      width: 32px;
      margin-left: 10px;
      margin-right: 10px;
    }
    a {
      text-decoration: none;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.secondary.light.color};
      transition: ${({ theme }) => theme.transition};
      &:hover,
      &:focus {
        opacity: .5;
      }
    }
  `,
}
