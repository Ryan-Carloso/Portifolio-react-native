import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectScreen from './components/ProjectScreen'; // Import corrected to ProjectScreen

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ProjectScreen"
                    component={ProjectScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const MainScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.profileImage}>
                    <Image source={require('./ryan.jpg')} style={styles.image} />
                </View>
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Hi, my name is Ryan</Text>
                    <Text style={styles.description}>
                        a Developer with nearly two years of experience in React and React Native. I recently created a project that earned $8,851 with 130+ paid users. Before I worked at a company for 1.6 years, refining my skills in React, JavaScript, HTML, and Python scraping. Native in Portuguese and English C2.
                    </Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={() => console.log('Education button pressed')}>
                    <Text style={styles.buttonText}>Education</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProjectScreen')}>
                    <Text style={styles.buttonText}>Portfolio</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        marginRight: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    profileInfo: {
        flex: 1,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        lineHeight: 22,
        color: '#333',
    },
    buttons: {
        marginTop: 20,
        width: '100%',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default App;