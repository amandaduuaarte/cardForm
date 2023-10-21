/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import IconSvg from '../../../../assets/icons/Icon.svg';
import {
  Container,
  CardDetail,
  CvvContainer,
  NumberContainer,
  Typography,
} from './styles';
import {View} from 'react-native';

interface CardBackProps {
  cvv: string;
}
const CardBack: React.FC<CardBackProps> = ({cvv}: CardBackProps) => {
  const renderCardIcon = (): JSX.Element => {
    return <IconSvg />;
  };
  return (
    <Container>
      <CardDetail />
      <CvvContainer>
        <NumberContainer width={30}>
          <Typography size={20}>{cvv}</Typography>
        </NumberContainer>
      </CvvContainer>

      <View style={{marginLeft: 16}}>{renderCardIcon()}</View>
    </Container>
  );
};

export default CardBack;
