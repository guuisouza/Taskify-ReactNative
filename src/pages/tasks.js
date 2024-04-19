import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

  async componentDidMount() {
    const tasksInfo = await AsyncStorage.getItem('tasks');

    if (tasksInfo) {
      this.setState({ tasks: JSON.parse(tasksInfo) });
    }
  }

  async componentDidUpdate(_, prevState) {
    const { tasks } = this.state;

    if (prevState.tasks !== tasks) {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    }
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

  navigateToEdit = (task) => {
    this.props.navigation.navigate('editTask', { task });
  }

  render() {
    const { tasks } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.titlePage}>Tarefas</Text>

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
                  <ProfileButtonText>
                    <Icon name="check" size={20} color="#fff" />
                  </ProfileButtonText>
                </ProfileButton>

                <ProfileButton
                  onPress={() => {
                    this.props.navigation.navigate('editTask', { task: item });
                  }}>
                  <ProfileButtonText>
                    <Icon name="edit" size={20} color="#fff" />
                  </ProfileButtonText>
                </ProfileButton>

                <ProfileButton
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
    backgroundColor: '#917FB3'
  },
  titlePage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#E9DEEB'
  },
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