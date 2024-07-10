import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, View, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Platform } from 'react-native-web';

const projects = [
  {
    name: 'Shiba Helper',
    image: 'https://firebasestorage.googleapis.com/v0/b/portifolio-c0281.appspot.com/o/chatbot.png?alt=media&token=2198674c-4e03-468f-8ec3-99c714975cd4',
    screen: 'ShibaHelper',
    desc: '(Chatbot AI)',
    date: '2024/07',
    rating: 4.5,
    techsUsed: ['React', 'Firebase Auth', 'GPT-API'],
  },
  {
    name: 'Securebit',
    image: 'https://firebasestorage.googleapis.com/v0/b/portifolio-c0281.appspot.com/o/_e8b55b06-b4b8-4eaa-98a2-b4d5425d120b.jpeg?alt=media&token=527e3e6a-33ae-4190-b36c-56ead4ddd4e3',
    desc: 'Crypto Exchange',
    screen: 'Securebit',
    date: '2024/06',
    rating: 4.0,
    techsUsed: ['HTML', 'JS', 'CoinGecko-API'],
  },
  {
    name: 'GeoFinder',
    image: 'https://firebasestorage.googleapis.com/v0/b/portifolio-c0281.appspot.com/o/_951c18cb-f42b-4ec2-a015-fd1a6a186086.jpeg?alt=media&token=b3754feb-8ece-46a3-a813-6071622a7a25',
    screen: 'GeoFinder',
    desc: 'Geolocation Finder',
    date: '2024/05',
    rating: 4.8,
    techsUsed: ['React Native', 'Firebase', 'React', 'CRUD'],
  },
  {
    name: 'This Portfolio',
    image: 'https://firebasestorage.googleapis.com/v0/b/portifolio-c0281.appspot.com/o/_a915dc0c-2a37-43fe-9595-410c7793e299.jpeg?alt=media&token=4ba71102-aae3-4ee3-8051-4b4b5de5aaf4',
    screen: '1',
    desc: 'portfolio',
    date: '2024/07',
    rating: 3.2,
    techsUsed: ['React Native', 'React Native For Web', 'Firebase Storage'],
  },
];

const MainPortfolioScreen = ({ navigation }) => {
  const [sortBy, setSortBy] = useState('date'); // 'date' or 'rating'

  const sortedByDate = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));
  const sortedByRating = [...projects].sort((a, b) => b.rating - a.rating);

  const renderProject = (project) => (
    <TouchableOpacity key={project.name} style={styles.card} onPress={() => navigation.navigate(project.screen)}>
      <Image style={styles.cardImage} source={{ uri: project.image }} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardText}>{project.name}</Text>
        <View style={styles.bottomInfo}>
          {sortBy === 'rating' && (
            <Text style={styles.ratingText}> {project.rating}⭐</Text>
          )}
          {sortBy === 'date' && (
            <Text style={styles.dateText}> {project.date}</Text>
          )}
        </View>
        <Text style={styles.cardDesc}>{project.desc}</Text>
        <Text style={styles.techText}>{project.techsUsed.join(', ')}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.titleText}>Portfolio</Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.button, sortBy === 'date' && styles.selectedButton]}
              onPress={() => setSortBy('date')}
            >
              <Text style={styles.buttonText}>Most Recently</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, sortBy === 'rating' && styles.selectedButton]}
              onPress={() => setSortBy('rating')}
            >
              <Text style={styles.buttonText}>More Complex</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.listContent} style={styles.scrollView}>
          {sortBy === 'date' ? sortedByDate.map(renderProject) : sortedByRating.map(renderProject)}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    paddingVertical: 10,
  },
  selectedButton: {
    borderBottomWidth: 2,
    borderColor: 'blue',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  listContent: {
    paddingHorizontal: 20,
  },
  scrollView: {
    flex: 1,
    ...(Platform.OS === 'web' && { overflowY: 'scroll' }),
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
    elevation: 2,
  },
  cardImage: {
    width: 70,
    height: 80,
    borderRadius: 10,
  },
  cardInfo: {
    flex: 1,
    marginLeft: 20,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
  },
  bottomInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 14,
  },
  dateText: {
    fontSize: 14,
  },
  techText: {
    fontSize: 14,
    color: '#0000FF',
  },
});

export default MainPortfolioScreen;
