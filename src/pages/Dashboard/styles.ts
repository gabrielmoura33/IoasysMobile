import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';

export const Wrapper = styled(LinearGradient)`
  flex:1;  
`;

export const Header = styled.View`
  padding: 60px 30px 30px 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;  
`;

export const Icon = styled(Feather)``;
export const Logo = styled.Image``;

export const ExitButton = styled(TouchableOpacity)``;

export const Form = styled.View`
  padding-horizontal: 30px;
  margin-bottom: 30px;
`;

export const Container = styled.View`
  flex: 1;
  background: #F0EDF5;
  border-radius: 40px;
  padding: 30px 15px;  
`;

export const InfoWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
`;
export const Title = styled.Text`
  color: #3D3D4C;
  font-size: ${RFValue(20)}px;
`;
export const Count = styled.Text`
  color: #A0A0B2;
  font-size: ${RFValue(15)}px;
`;

export const EnterpriseList = styled(FlatList)`
  flex: 1;
  width: 100%;
`;