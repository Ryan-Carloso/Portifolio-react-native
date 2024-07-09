import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const ShibaHelperScreen = () => {
  const handlePress = (url) => {
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.TitleText}>Shiba Helper (Chatbot)</Text>
      <Text style={styles.BodyText}>This project was made using React, Firebase AUTH and API of the ChatGPT for made a chatbot</Text>
      <TouchableOpacity style={styles.touchablebutton} onPress={() => handlePress('https://shibahelper.netlify.app/')}>
        <Text style={styles.touchabletext}>Build</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchablebutton} onPress={() => handlePress('https://github.com')}>
        <Text style={styles.touchabletext}>Github</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  TitleText: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
    marginRight: 20,
    margin: 5,
  },
  BodyText: {
    fontSize: 15,
    fontWeight: '500',
    width: '95%',
    textAlign: 'center',
    margin: 2,
  },
  touchablebutton: {
    padding: 7,
    margin: 5,
    backgroundColor: 'green',
    borderRadius: 15,
    width: '50%',
  },
  touchabletext: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default ShibaHelperScreen;