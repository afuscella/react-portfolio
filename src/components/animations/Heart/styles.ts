import styled from 'styled-components';

export const HeartWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  padding: 8px;
  outline: 0;
  cursor: pointer;

  div {
    --size: 30px;
    width: var(--size);
    height: var(--size);

    pointer-events: none;  
  };
`;
