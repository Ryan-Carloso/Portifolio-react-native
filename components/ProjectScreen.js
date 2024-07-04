import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
            {/* TouchableOpacity for Carousel */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CarouselPage')}
            >
                <Text style={styles.buttonText}>Carousel</Text>
            </TouchableOpacity>
            {/* TouchableOpacity for ButtonStyle1 */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ButtonStyle1')}
            >
                <Text style={styles.buttonText}>ButtonStyle1</Text>
            </TouchableOpacity>
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
    button: {
        backgroundColor: '#007AFF', // Example background color
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF', // Example text color
        textAlign: 'center',
    },
});

export default ProjectScreen;