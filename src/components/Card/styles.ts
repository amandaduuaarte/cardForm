import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';
import colors from '../../constants/colors';

interface TypographyProps {
  size?: number;
}

export const Container = styled(LinearGradient)`
  height: 30%;
  width: 80%;
  border-radius: 16px;
  align-self: center;
  padding: 12px;
`;

export const Front = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const LogoFrontContainer = styled.View`
  height: 45px;
  width: 100%;
  align-items: flex-end;
`;

export const NumberContainer = styled.View`
  height: 45px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid ${colors.border.cardNumber};
`;

export const InformationContainer = styled.View`
  flex-direction: row;
  height: 45px;
  width: 100%;
  justify-content: space-between;
`;

export const Typography = styled.Text<TypographyProps>`
  color: white;
  font-size: ${({size}) => size || 14}px;
`;

export const HolderContainer = styled.View`
  justify-content: space-between;
`;
