import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding: 28px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    text-decoration: none;
    transition: ${({ theme }) => theme.transition};
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;
