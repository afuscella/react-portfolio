import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  cursor: pointer;
  stroke: ${({ theme }) => theme.colors.primary.main.color};
  transition: ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.primary.main.color};
  }
`;

export function Code() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <polyline
        points="16 18 22 12 16 6">
      </polyline>
      <polyline
        points="8 6 2 12 8 18">
      </polyline>
    </Svg>
  );
}
