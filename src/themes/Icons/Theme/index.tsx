import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.primary.main.color};
  width: 24px;
  height: 24px;
  margin-right: 10px;
  transition: 200ms ease-in-out;
  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.primary.main.color};
  }
`;

interface IThemeIcon {
  onClick(): void;
}

export function ThemeIcon({ onClick }: IThemeIcon) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </Svg>
  );
}
