import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 156px;
  background: #FFF;
  margin: 0 0 10px 0;
  border-radius: 16px;
`;

export const Thumbnail = styled.Image`
  width: 156px;
  height: 92px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

export const Content = styled.View`
  padding: 9px;
`;

export const Title = styled.Text`
  font-size: 10px;
  margin-bottom: 5px;  
  font-weight: bold;  
  line-height: 12px; 
  color: #721EA8; 
`;

export const Description = styled.Text.attrs({
  numberOfLines: 5
})`
  font-size: 7px;
  line-height: 8px;
  color: #8C8C96;
`;