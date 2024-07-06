import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel from './Carousel'; // Assuming Carousel is correctly implemented
import ButtonStyle1 from './buttonStyle'; // Assuming ButtonStyle1 is correctly implemented
import Carousel3D from './Carousel3D'; // Assuming Carousel3D is correctly implemented
import MenuNav from './MenuNav'; // Assuming MenuNav is correctly implemented

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
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Components</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ButtonStyle')}
            >
                <Text style={styles.buttonText}>ButtonStyle</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CarouselPage')}
            >
                <Text style={styles.buttonText}>Carousel</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Carousel3D')}
            >
                <Text style={styles.buttonText}>Carousel3D</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('MenuNav')}
            >
                <Text style={styles.buttonText}>MenuNav</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        marginBottom: 10,
        width: '70%',
        alignItems: 'center',
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontFamily: "Open Sans",
        fontWeight: '800',
    },
});

export default ProjectScreen;