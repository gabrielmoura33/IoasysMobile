import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled(LinearGradient)`
  flex: 1;
  
  
`;
export const Container = styled.View`
  flex: 1;
  align-items: center; 
  justify-content: center;
  padding-horizontal: 30px;
`;


export const Logo = styled.Image`
  margin-bottom: 20px;
`;




export const Label = styled.Text`
  color: #DDD;
  font-size: ${RFValue(15)}px;
  margin-bottom: 3px;
  margin-top: 10px;
`;
