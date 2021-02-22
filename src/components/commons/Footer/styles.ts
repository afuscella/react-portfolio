import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #88989E10;
  background: ${({ theme }) => `${theme.colors.secondary.light.color}10`};

img {
  width: 32px;
  margin-right: 23px;
}
a {
  color: ${({ theme }) => theme.colors.primary.main.color};
  text-decoration: none;
  transition: .3s;
    &:hover,
    &:focus {
    opacity: .5;
  }
}
`;