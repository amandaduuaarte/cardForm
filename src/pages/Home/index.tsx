import React, {useState} from 'react';

import {useForm} from 'react-hook-form';

import Card from '../../components/Card';
import {
  CardContainer,
  Container,
  InputContent,
  InputsContainer,
  InputsDateContainer,
} from './styles';
import TextField from '../../components/TextField';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {CardNumberFormat, DateFormat} from '../../utils/stringHelpers';

interface FormTypes {
  cardNumber: string;
  cardHolder: string;
  expiresDate: string;
  securyCode: string;
}
const Home: React.FC = () => {
  const [isFront, setIsFront] = useState<boolean>(true);
  const {control, watch, setValue} = useForm<FormTypes>({
    defaultValues: {
      cardNumber: '',
      cardHolder: '',
      expiresDate: '',
      securyCode: '',
    },
  });

  const handleCardNumber = (input: string) => {
    setValue('cardNumber', input);
    const formattedNumber = CardNumberFormat(input);
    setValue('cardNumber', formattedNumber);
  };

  const handleExpiryDate = (input: string) => {
    setValue('expiresDate', input);
    const formattedNumber = DateFormat(input);
    setValue('expiresDate', formattedNumber);
  };

  const formData = {
    cardNumber: watch('cardNumber'),
    cardHolder: watch('cardHolder'),
    expiresIn: watch('expiresDate'),
    cvv: watch('securyCode'),
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CardContainer>
            <Card isFront={isFront} cardData={formData} />
          </CardContainer>

          <InputsContainer>
            <TextField
              isActive={!!watch('cardNumber')}
              size={19}
              onChangeText={handleCardNumber}
              name="cardNumber"
              control={control}
              label="Card Number"
              onFocus={() => setIsFront(true)}
              placeholder="XXXX XXXX XXXX XXXX"
              keyboardType="decimal-pad"
            />

            <TextField
              isActive={!!watch('cardHolder')}
              size={24}
              name="cardHolder"
              control={control}
              label="Name on Card"
              placeholder="Joe Due"
              keyboardType="default"
              onFocus={() => setIsFront(true)}
            />
            <InputsDateContainer>
              <InputContent width={55}>
                <TextField
                  isActive={!!watch('expiresDate')}
                  size={5}
                  name="expiresDate"
                  onChangeText={handleExpiryDate}
                  control={control}
                  label="Expiry Date"
                  placeholder="XX/XX"
                  onFocus={() => setIsFront(true)}
                  keyboardType="decimal-pad"
                />
              </InputContent>

              <InputContent width={40}>
                <TextField
                  isActive={!!watch('securyCode')}
                  size={3}
                  name="securyCode"
                  control={control}
                  onFocus={() => setIsFront(false)}
                  label="Secury code"
                  placeholder="***"
                  keyboardType="decimal-pad"
                />
              </InputContent>
            </InputsDateContainer>
          </InputsContainer>
        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Home;
