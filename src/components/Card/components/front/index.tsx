import React from 'react';

import IconSvg from '../../../../assets/icons/Icon.svg';
import {
  Front,
  HolderContainer,
  InformationContainer,
  LogoContainer,
  NumberContainer,
  Typography,
} from './styles';

interface CardFrontProps {
  cardNumber: string;
  cardHolder?: string;
  expiresIn?: string;
}
const CardFront: React.FC<CardFrontProps> = ({
  cardNumber,
  cardHolder,
  expiresIn,
}: CardFrontProps) => {
  const renderCardIcon = (): JSX.Element => {
    return <IconSvg />;
  };
  return (
    <Front>
      <LogoContainer>{renderCardIcon()}</LogoContainer>
      <NumberContainer>
        <Typography size={18}>{cardNumber}</Typography>
      </NumberContainer>

      <InformationContainer>
        <HolderContainer>
          <Typography>CardHolder</Typography>
          <Typography>{cardHolder}</Typography>
        </HolderContainer>

        <HolderContainer>
          <Typography>Expires</Typography>
          <Typography>{expiresIn}</Typography>
        </HolderContainer>
      </InformationContainer>
    </Front>
  );
};

export default CardFront;
