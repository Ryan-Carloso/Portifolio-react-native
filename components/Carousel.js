import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';


const { width: viewportWidth } = Dimensions.get('window');

const data = [
  {
    title: 'Project 1',
    subtitle: 'Description of Project 1',
    illustration: 'https://via.placeholder.com/400',
  },
  {
    title: 'Project 2',
    subtitle: 'Description of Project 2',
    illustration: 'https://via.placeholder.com/400',
  },
  {
    title: 'Project 3',
    subtitle: 'Description of Project 3',
    illustration: 'https://via.placeholder.com/400',
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State for active slide index
  const [activeDotIndex, setActiveDotIndex] = useState(0); // State for active pagination dot index
  const scrollViewRef = useRef();

  const scrollToIndex = (index) => {
    setActiveIndex(index);
    setActiveDotIndex(index); // Update active dot index when clicking pagination dot
    scrollViewRef.current.scrollTo({
      animated: true,
      x: index * viewportWidth,
      y: 0,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const index = Math.round(contentOffsetX / viewportWidth);
          setActiveIndex(index);
          setActiveDotIndex(index);
        }}
        scrollEventThrottle={200}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: item.illustration }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.paginationDot,
              activeDotIndex === index && styles.paginationDotActive,
            ]}
            onPress={() => scrollToIndex(index)}
          >
            <View style={styles.dotContainer}>
              {activeDotIndex === index ? (
                <Octicons name="dot-fill" size={24} color="black" />
              ) : (
                <Octicons name="dot" size={24} color="black" />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={{ textAlign: 'center', margin: 15 }}>
        Can be used for news site articles, app features, and ecommerce products, to creative professionals portfolios.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: viewportWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    color: '#666',
  },
  image: {
    width: viewportWidth * 0.4,
    height: viewportWidth * 0.2,
    borderRadius: 8,
    margin: 0,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  paginationDot: {
    marginHorizontal: 5,
  },
  paginationDotActive: {
    borderRadius: 12, // Adjust the shape of the background behind the dot
    paddingHorizontal: 5, // Adjust spacing for better appearance
  },
  dotContainer: {
    width: 24, // Adjust the container width to fit the dot properly
    height: 24, // Adjust the container height to fit the dot properly
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    fontSize: 20, // Adjust the dot size if needed
  },
});

export default Carousel;