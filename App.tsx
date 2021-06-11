import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background-color: #44f;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export default function App() {
  return (
    <Container>
      <Title>SEE</Title>
      <StatusBar style="auto" />
    </Container>
  );
}

