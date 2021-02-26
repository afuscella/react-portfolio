import styled, { css } from 'styled-components';

export const CardWrapper = {
  Card: styled.div`
    flex-wrap: wrap;
    /* background-color: ${({ theme }) => `${theme.colors.secondary.light.color}20`}; */
    border-radius: 8px;
    text-decoration: none;
    &:hover,
    &:focus {
      opacity: .6;
      transition: ${({ theme }) => theme.transition};
      cursor: pointer;
    }
  `,
};
