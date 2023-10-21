import React from 'react';

import {Container} from './styles';
import CardBack from './components/back/Index';
import CardFront from './components/front';

interface CardProps {
  isFront: boolean;
  cardData: {
    cardNumber: string;
  };
}
const Card: React.FC<CardProps> = ({isFront, cardData}: CardProps) => {
  return (
    <Container colors={['#030712', '#595959']} accessible={true}>
      {isFront ? (
        <CardFront
          cardHolder="Amanda Linda"
          expiresIn="12/33"
          cardNumber={cardData.cardNumber}
        />
      ) : (
        <CardBack cvv="123" />
      )}
    </Container>
  );
};

export default Card;
