import styled from 'styled-components/native';
import colors from '../../../../constants/colors';

interface TypographyProps {
  size?: number;
}

interface NumberContainerProps {
  width?: number;
}

export const Container = styled.View`
  height: 100%;
  justify-content: space-between;
`;

export const LogoContainerBack = styled.View`
  height: 45px;
  width: 100%;
  align-items: flex-end;
`;

export const NumberContainer = styled.View<NumberContainerProps>`
  height: 45px;
  width: ${({width}) => width || 100}%;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid ${colors.border.cardNumber};
`;

export const Typography = styled.Text<TypographyProps>`
  color: white;
  font-size: ${({size}) => size || 14}px;
  font-family: 'Inter-SemiBold';
`;

export const CardDetail = styled.View`
  height: 36px;
  width: 100%;
  background: grey;
  margin-top: 16%;
  border-radius: 2px;
`;

export const CvvContainer = styled.View`
  width: 95%;
  align-items: flex-end;
`;
