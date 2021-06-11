import styled, { css } from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { TextInput as TInput  } from 'react-native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}
export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #FFF;
  border-radius: 5px;
  border-width: 2px;
  border-color: #FFF;

  margin-bottom: 8px;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #721EA8;
    `}
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled(TInput)`
  flex: 1;
  color: #333;
  font-size: 16px;
  
`;

export const Icon = styled(Feather)`
  margin-right: 10px;
`;
