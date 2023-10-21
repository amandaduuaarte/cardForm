import {TextInput} from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  height: 90px;
  width: 100%;
`;

export const Label = styled.Text`
  padding: 4px;
  font-size: 16px;
  font-family: 'Inter-Regular';
`;

export const Input = styled(TextInput)`
  border: 1px solid black;
  height: 55%;
  border-radius: 12px;
  text-align: center;
  font-size: 20px;
  font-family: 'Inter-Medium';
`;
