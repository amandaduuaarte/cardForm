import styled from 'styled-components/native';
import colors from '../../constants/colors';

interface InputContentProps {
  width?: number;
}
export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-top: 12%;
  background: ${colors.background.backgroundColor};
`;

export const CardContainer = styled.View`
  align-self: center;
  justify-content: center;
`;

export const InputsContainer = styled.View`
  justify-content: space-between;
  margin: 24px 16px 0 16px;
`;

export const InputsDateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputContent = styled.View<InputContentProps>`
  width: ${({width}) => width || 100}%;
`;
