import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 50px;
  background: #ff9000;
  border-radius: 10px;

  align-items: center;
  margin-top: 8px;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 18px;
`;
