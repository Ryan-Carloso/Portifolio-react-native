import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel from './Carousel'; // Assuming Carousel is correctly implemented
import ButtonStyle1 from './buttonStyle'; // Assuming BotaoEstilizado is correctly implemented

const Stack = createStackNavigator();

const ProjectScreen = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Portfolio' }}
            />
            <Stack.Screen
                name="CarouselPage"
                component={Carousel}
                options={{ title: 'Carousel' }}
            />
            <Stack.Screen
                name="ButtonStyle1"
                component={ButtonStyle1}
                options={{ title: 'ButtonStyle1' }}
            />
        </Stack.Navigator>
    );
};

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Portfolio</Text>
            <Button
                title="Carousel"
                onPress={() => navigation.navigate('CarouselPage')}
            />
            <Button
                title="ButtonStyle1"
                onPress={() => navigation.navigate('ButtonStyle1')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default ProjectScreen;