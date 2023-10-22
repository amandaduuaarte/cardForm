import React from 'react';

import {Container} from './styles';
import CardBack from './components/back/Index';
import CardFront from './components/front';

interface CardProps {
  isFront: boolean;
  cardData: {
    cardNumber: string;
    cardHolder: string;
    expiresIn: string;
    cvv: string;
  };
}
const Card: React.FC<CardProps> = ({isFront, cardData}: CardProps) => {
  return (
    <Container colors={['#030712', '#595959']} accessible={true}>
      {isFront ? (
        <CardFront
          cardHolder={cardData.cardHolder || 'Joe Doe'}
          expiresIn={cardData.expiresIn || 'XX/XX'}
          cardNumber={cardData.cardNumber || 'XXXX XXXX XXXX XXXX'}
        />
      ) : (
        <CardBack cvv={cardData.cvv || '***'} />
      )}
    </Container>
  );
};

export default Card;
