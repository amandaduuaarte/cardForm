import {TextInput} from 'react-native';

import styled from 'styled-components/native';
import colors from '../../constants/colors';

interface InputProps {
  isActive?: boolean;
}
export const Container = styled.View`
  height: 90px;
`;

export const Label = styled.Text`
  padding: 4px;
  font-size: 16px;
  font-family: 'Inter-Regular';
  color: ${colors.text.label};
`;

export const Input = styled(TextInput)<InputProps>`
  background: ${colors.background.inputBackground};
  border: 1px solid;
  border-color: ${({isActive}) =>
    isActive ? colors.border.cardNumber : colors.border.inputBorder};
  height: 55%;
  border-radius: 12px;
  text-align: center;
  font-size: 20px;
  font-family: 'Inter-Medium';
`;
