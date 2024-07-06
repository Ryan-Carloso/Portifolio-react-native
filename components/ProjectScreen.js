import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel from './Carousel'; // Assuming Carousel is correctly implemented
import ButtonStyle1 from './buttonStyle'; // Assuming BotaoEstilizado is correctly implemented
import Carousel3D  from './Carousel3D'
import MenuNav from "./MenuNav"


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
                name="ButtonStyle"
                component={ButtonStyle1}
                options={{ title: 'ButtonStyle' }}
            />
            <Stack.Screen
                name="CarouselPage"
                component={Carousel}
                options={{ title: 'Carousel' }}
            />
            <Stack.Screen
                name="Carousel3D"
                component={Carousel3D}
                options={{ title: 'Carousel3D' }}
            />
            <Stack.Screen
                name="MenuNav"
                component={MenuNav}
                options={{ title: 'MenuNav' }}
            />
        </Stack.Navigator>
    );
};

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Portfolio</Text>
            <Button
                title="ButtonStyle"
                onPress={() => navigation.navigate('ButtonStyle')}
            />
            <Button
                title="Carousel"
                onPress={() => navigation.navigate('CarouselPage')}
            />

              <Button
                title="Carousel3D"
                onPress={() => navigation.navigate('Carousel3D')}
            />

              <Button
                title="MenuNav"
                onPress={() => navigation.navigate('MenuNav')}
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