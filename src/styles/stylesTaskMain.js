import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 25px;
`;

export const List = styled.FlatList`
  margin-top: 20px;
`;

export const CreateTaskButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #2E867F;
  margin-left: 10px;
  padding: 0 12px;
`; 

export const TaskItem = styled.View`
    flex-direction: row;
    marginBottom: 10px;
    padding: 10px;
    borderWidth: 1px;
    borderColor: '#2E867F';
    borderRadius: 5px;
`;

export const ContentContainer = styled.View`
  flex-direction: column;
  width: 75%;
  height: 100%;
  padding-top: 5px
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: #35403C;
`

export const InfoContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background: #fff;
  padding: 8px;
`

export const ButtonContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
  padding: 10px;
`

export const ProfileButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #2E867F;
    margin-left: 10px;
    padding: 15px 15px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

