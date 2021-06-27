import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView }  from 'react-native'

import { 
  Container, 
  Title, 
  Input, 
  ButtonText, 
  BlackButton, 
  CreatAcountBtn, 
  CreatAcountText 
} from './styles'

const SignIn = () => (
  <KeyboardAvoidingView style={{flex: 1}} behavior="height"> 
    <Container>
      
      <StatusBar style="auto"/>
      <Title>SEE</Title>
      <Input placeholder="Email"/>
      <Input placeholder="Palavra-passe" secureTextEntry />

      <BlackButton activeOpacity={0.8}>
        <ButtonText>Entrar</ButtonText>
      </BlackButton>

      <CreatAcountBtn activeOpacity={0.8}>
        <CreatAcountText>Não Possuo uma Conta</CreatAcountText>
      </CreatAcountBtn>

    </Container>
  </KeyboardAvoidingView>
);

export default SignIn;
