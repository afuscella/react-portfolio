import styled, { css } from 'styled-components';

import { breakpointsMedia } from '@/themes/utils/breakpointsMedia';

export const SocialMediasWrapper = {
  Social: styled.footer`
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

  Icons: styled.div`
    img {
      width: 32px;
      margin-left: 10px;
      margin-right: 10px;
    }
    a {
      text-decoration: none;
      cursor: pointer;
      /* color: ${({ theme }) => theme.colors.secondary.light.color}; */
      transition: ${({ theme }) => theme.transition};
      &:hover,
      &:focus {
        opacity: .5;
      }
    }
    &:first-child {
      margin-left: 0;
    }
    margin-left: 20px;
  `,
}
