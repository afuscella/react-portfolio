import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '@/components/foundation/Text';

export const InputBase = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.quaternary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};

  &::placeholder {
    opacity: .4;    
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .4;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

InputBase.propTypes = {
  tag: PropTypes.oneOf(['input', 'text'])
}

InputBase.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};
