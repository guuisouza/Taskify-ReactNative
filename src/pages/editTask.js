import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ProfileButton, ProfileButtonText } from '../styles/stylesCreateOrEditTask';

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
            <View style={styles.container}>
                <Text style={styles.header}>Editar Tarefa</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Título da Tarefa"
                    placeholderTextColor= "#E9DEEB"
                    onChangeText={(text) => this.setState({ title: text })}
                    value={this.state.title}
                    color="#E9DEEB"
                />
                <TextInput
                    style={[styles.input, styles.textArea]}
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
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    textArea: {
        borderColor: '#E5BEEC'
    },
});