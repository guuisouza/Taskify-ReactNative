import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      status: 'pendente', // Define o status como 'pendente' por padrão
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
      id: new Date().getTime(), // Use um ID único, por exemplo, timestamp atual
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
          style={styles.input}
          placeholder="Título da Tarefa"
          onChangeText={(text) => this.setState({ title: text })}
          value={this.state.title}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descrição da Tarefa"
          onChangeText={(text) => this.setState({ description: text })}
          value={this.state.description}
          multiline={true}
          numberOfLines={4}
        />
        <Button title="Criar" onPress={this.handleCreateTask} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  textArea: {
    height: 100,
  },
});