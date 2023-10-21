import React from 'react';

import {TextInputProps} from 'react-native/types';
import {Control, Controller} from 'react-hook-form';

import {Container, Input, Label} from './styles';

interface TextFieldProps extends TextInputProps {
  control: Control | any;
  name: string;
  size: number;
  label: string;
  isActive?: boolean;
  placeholder?: string;
}
const TextField: React.FC<TextFieldProps> = ({
  control,
  name,
  size,
  label,
  isActive,
  placeholder,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, value}}) => (
        <Container>
          <Label>{label}</Label>
          <Input
            isActive={isActive}
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            maxLength={size}
            {...rest}
          />
        </Container>
      )}
    />
  );
};

export default TextField;
