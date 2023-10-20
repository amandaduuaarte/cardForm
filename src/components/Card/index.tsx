import React from 'react';

import IconSvg from '../../assets/icons/Icon.svg';
import {
  Container,
  Front,
  HolderContainer,
  InformationContainer,
  LogoFrontContainer,
  NumberContainer,
  Typography,
} from './styles';

const Card: React.FC = () => {
  return (
    <Container colors={['#030712', '#595959']}>
      <Front>
        <LogoFrontContainer>
          <IconSvg />
        </LogoFrontContainer>
        <NumberContainer>
          <Typography size={20}>XXXX-XXXX-XXXX-XXXX</Typography>
        </NumberContainer>

        <InformationContainer>
          <HolderContainer>
            <Typography>CardHolder</Typography>
            <Typography>XXXX XXXX</Typography>
          </HolderContainer>

          <HolderContainer>
            <Typography>CardHolder</Typography>
            <Typography>XXXX XXXX</Typography>
          </HolderContainer>
        </InformationContainer>
      </Front>
    </Container>
  );
};

export default Card;
