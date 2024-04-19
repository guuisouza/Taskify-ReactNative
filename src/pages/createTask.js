import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { ProfileButton, ProfileButtonText } from '../styles/stylesCreateOrEditTask';
export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      status: 'Pendente', // Define o status da task como 'Pendente' por padrão
    };
  }

  // Função para criar uma nova tarefa
  handleCreateTask = () => {
    const { title, description, status } = this.state;
    if (title.trim() === '') {
      alert('Por favor, insira um título para a tarefa.');
      return;
    }
    const newTask = {
      id: new Date().getTime(), // ID único
      title: title,
      description: description,
      status: status,
    };
    // Chama a função handleAddTask passada via parâmetro de navegação, passando a nova tarefa como argumento
    this.props.route.params.handleAddTask(newTask);
    // Navega de volta para a tela de tarefas após criar a tarefa
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Criar Nova Tarefa</Text>
        <TextInput
          style={[styles.input, styles.textArea1]}
          placeholder="Título da Tarefa"
          placeholderTextColor= "#E9DEEB"
          onChangeText={(text) => this.setState({ title: text })}
          value={this.state.title}
          color="#E9DEEB"
        />
        <TextInput
          style={[styles.input, styles.textArea2]}
          placeholder="Descrição da Tarefa"
          placeholderTextColor= "#E9DEEB"
          onChangeText={(text) => this.setState({ description: text })}
          value={this.state.description}
          color="#E9DEEB"
          multiline={true}
          numberOfLines={4}
        />
        <ProfileButton onPress={this.handleCreateTask}>
          <ProfileButtonText>Criar Tarefa</ProfileButtonText>
        </ProfileButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#917FB3'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#E9DEEB'
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  textArea1: {
    borderColor: '#E5BEEC'
  },
  textArea2: {
    height: 100,
    borderColor: '#E5BEEC'
  },
});