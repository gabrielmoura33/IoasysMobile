import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 310px;
  height: 60px;
  background: #721EA8;
  border-radius: 10px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  
  color: #FFF;
  font-size: 18px;
`;
