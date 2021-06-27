import styled from 'styled-components/native';

import colors from '../../utils/colors'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: 800;
  color: ${colors.black};

  margin-bottom: 40px;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  border-radius: 25px;
  border-width: 2px;
  border-color: ${colors.black};
  padding: 0 20px;
  font-size: 20px;


  margin: 10px 0;
`;


export const BlackButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  border-radius: 25px;
  border-width: 2px;
  border-color: ${colors.black};
  background-color: ${colors.black};
  padding: 0 20px;
  font-size: 20px;

  align-items: center;
  justify-content: center;

  margin: 20px 0;
`;

export const ButtonText = styled.Text`
  font-size: 26px;
  font-weight: 600;
  color: ${colors.white};
`;

export const CreatAcountBtn = styled.TouchableOpacity`
  border: none;
  background-color: transparent;
`;

export const CreatAcountText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.black};
`;