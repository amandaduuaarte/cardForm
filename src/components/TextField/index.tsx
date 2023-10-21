import React from 'react';

import {TextInput} from 'react-native/types';
import {Control, Controller} from 'react-hook-form';

import {Container, Input, Label} from './styles';

interface TextFieldProps extends TextInput {
  control: Control | any;
  name: string;
  size: number;
  label: string;
  placeholder?: string;
  inputType?: 'decimal-pad' | 'default';
}
const TextField: React.FC<TextFieldProps> = ({
  control,
  name,
  size,
  label,
  placeholder,
  inputType = 'default',
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
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            keyboardType={inputType}
            maxLength={size}
            {...rest}
          />
        </Container>
      )}
    />
  );
};

export default TextField;
