import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tasks from '../pages/tasks';
import CreateTask from '../pages/createTask';
import EditTask from '../pages/editTask';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tasks">
                <Stack.Screen
                    name="tasks"
                    component={Tasks}
                    options={{
                        title: 'TASKIFY',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#2A2F4F',
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: '#E9DEEB',
                        },
                    }}
                />
                <Stack.Screen
                    name="createTask"
                    component={CreateTask}
                    options={{
                        title: 'CRIAR TASK',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#2A2F4F',
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: '#E9DEEB',
                        },
                    }}
                />
                <Stack.Screen
                    name="editTask"
                    component={EditTask}
                    options={{
                        title: 'EDITAR TASK',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#2A2F4F',
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: '#E9DEEB',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}