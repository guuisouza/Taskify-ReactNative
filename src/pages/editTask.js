import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Container, TitlePage, ProfileButton, ProfileButtonText } from '../styles/stylesCreateOrEditTask';

export default class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        };
    }

    componentDidMount() {
        const { route } = this.props;
        const task = route.params.task;

        // Preenche os campos com os dados da tarefa selecionada
        this.setState({
            title: task.title,
            description: task.description,
        });
    }

    handleSaveTask = () => {
        const { navigation, route } = this.props;
        const { title, description } = this.state;
        const task = route.params.task;

        // Atualiza os dados da tarefa selecionada
        task.title = title;
        task.description = description;

        // Navega de volta para a tela de tarefas após salvar a tarefa
        navigation.navigate('tasks', { task });
    };

    render() {
        return (
            <Container>
                <TitlePage>Editar Tarefa</TitlePage>
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
                <ProfileButton onPress={this.handleSaveTask}>
                    <ProfileButtonText>Salvar Alterações</ProfileButtonText>
                </ProfileButton>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    textArea1: {
        borderColor: '#E5BEEC'
      },
      textArea2: {
        height: 100,
        borderColor: '#E5BEEC'
      },
});