/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { InputBase, InputWrapper } from './styles';

interface ITextField {
  placeholder: string;
  disabled: boolean;
  name: string;
  onChange: () => {};
  value: string;
}

export function TextField({
  placeholder, name, disabled, onChange, value }: ITextField) {
  return (
    <InputWrapper>
      <InputBase
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
