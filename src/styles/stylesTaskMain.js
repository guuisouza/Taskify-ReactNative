import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 25px;
`;

export const List = styled.FlatList`
  margin-top: 20px;
`;

export const TaskItem = styled.View`
    flex-direction: row;
    marginBottom: 10px;
    padding: 10px;
    border: 2px solid #E5BEEC;
    padding: 4px;
    background: #373A4E;
    min-height: 200px;
    borderRadius: 10px;
`;

export const ContentContainer = styled.View`
  flex-direction: column;
  flex: 1;
  height: 100%;
  padding-top: 5px
`;

export const InfoText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #E9DEEB;
`

export const InfoContainer = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 8px;
`

export const ButtonContainer = styled.View`
  flex-direction: column;
  justify-content: start;
  margin-right: 10px;
  padding: 10px;
`

export const ProfileButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    background: #2A2F4F;
    margin-left: 10px;
    padding: 15px 15px;
    border-radius: 55px;
    border: 1px solid #E5BEEC
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;