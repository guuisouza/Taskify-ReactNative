import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  ContainerTasks,
  ContentContainer,
  TitlePage,
  InfoContainer,
  InfoText,
  List,
  TaskItem,
  ButtonContainer,
  ProfileButtonText,
  ProfileButtonActions
} from '../styles/stylesTaskMain'

export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: null
    };
  }

  // Async Storage
  async componentDidMount() {
    const tasksInfo = await AsyncStorage.getItem('tasks');

    if (tasksInfo) {
      this.setState({ tasks: JSON.parse(tasksInfo) });
    }
  }

  // Async Storage
  async componentDidUpdate(_, prevState) {
    const { tasks } = this.state;

    if (prevState.tasks !== tasks) {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  // Adicionar uma nova tarefa à lista de tarefas
  handleAddTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
      newTask: task,
    }));
  };

  // Navegar para a tela de criar nova tarefa
  navigateToCreateTask = () => {
    this.props.navigation.navigate('createTask', {
      handleAddTask: this.handleAddTask
    });
  };

  // Navegar para a tela de editar tarefa
  navigateToEdit = (task) => {
    this.props.navigation.navigate('editTask', { task });
  }

  render() {
    const { tasks } = this.state;

    return (
      <ContainerTasks>
        <TitlePage>Tarefas</TitlePage>

        <TouchableOpacity style={styles.buttonNewTask} onPress={this.navigateToCreateTask}>
          <Text style={styles.buttonText}>Nova Tarefa    +</Text>
        </TouchableOpacity>

        <List
          data={tasks}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem>
              <ContentContainer>
                <InfoContainer>
                  <InfoText>Tarefa:</InfoText>
                  <Text style={styles.textTask}>{item.title}</Text>
                  <InfoText>Descrição:</InfoText>
                  <Text style={styles.textTask}>{item.description}</Text>
                  <InfoText>Status:</InfoText>
                  <Text style={styles.textTask}>{item.status}</Text>
                </InfoContainer>
              </ContentContainer>

              <ButtonContainer>
                <ProfileButtonActions
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
                  <ProfileButtonText>
                    <Icon name="check" size={20} color="#fff" />
                  </ProfileButtonText>
                </ProfileButtonActions>

                <ProfileButtonActions
                  onPress={() => {
                    this.props.navigation.navigate('editTask', { task: item });
                  }}>
                  <ProfileButtonText>
                    <Icon name="edit" size={20} color="#fff" />
                  </ProfileButtonText>
                </ProfileButtonActions>

                <ProfileButtonActions
                  onPress={() => {
                    this.setState({
                      tasks: this.state.tasks.filter(
                        newTask => newTask.title !== item.title,
                      ),
                    });
                  }}
                  style={{ backgroundColor: '#D52623' }}>
                  <ProfileButtonText>
                    <Icon name="delete" size={20} color="#fff" />
                  </ProfileButtonText>
                </ProfileButtonActions>
              </ButtonContainer>
            </TaskItem>
          )}
        />
      </ContainerTasks>
    );
  }
}

const styles = StyleSheet.create({
  buttonNewTask: {
    backgroundColor: '#2A2F4F',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#E9DEEB',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textTask: {
    fontSize: 16,
    color: '#D6D6D6'
  }
});
