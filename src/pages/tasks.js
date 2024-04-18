import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  ContentContainer,
  InfoContainer,
  InfoText,
  List,
  TaskItem,
  ButtonContainer,
  ProfileButton,
  ProfileButtonText
} from '../styles/stylesTaskMain'

export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: null
    };
  }

  // Função para adicionar uma nova tarefa à lista de tarefas
  handleAddTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
      newTask: task, // Atualiza newTask com a nova tarefa criada
    }));
  };

  // Função para navegar para a tela de criar nova tarefa
  navigateToCreateTask = () => {
    this.props.navigation.navigate('createTask', {
      handleAddTask: this.handleAddTask
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.titlePage}>Tarefas</Text>

        {/* Botão para criar nova tarefa */}
        <TouchableOpacity style={styles.button} onPress={this.navigateToCreateTask}>
          <Text style={styles.buttonText}>Criar Nova Tarefa</Text>
        </TouchableOpacity>

        {/* Lista de tarefas */}
        <List
          data={tasks}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem>
              <ContentContainer>
                <InfoContainer>
                  <InfoText>Tarefa:</InfoText>
                  <Text>{item.title}</Text>
                  <InfoText>Descrição:</InfoText>
                  <Text>{item.description}</Text>
                  <InfoText>Status:</InfoText>
                  <Text>{item.status}</Text>
                </InfoContainer>
              </ContentContainer>

              <ButtonContainer>
                <ProfileButton
                  onPress={() => {
                    const updatedTasks = this.state.tasks.map(task => {
                      if (task.title === item.title) {
                        return {
                          ...task,
                          status: 'Concluída'
                        };
                      }
                      return task;
                    });
                    this.setState({ tasks: updatedTasks });
                  }}>
                  <ProfileButtonText>V</ProfileButtonText>
                </ProfileButton>
                <ProfileButton
                  onPress={() => {
                    this.setState({
                      tasks: this.state.tasks.filter(
                        newTask => newTask.title !== item.title,
                      ),
                    });
                  }}
                  style={{ backgroundColor: '#FFC0CB' }}>
                  <ProfileButtonText>Excluir</ProfileButtonText>
                </ProfileButton>
              </ButtonContainer>
            </TaskItem>


          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  titlePage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});