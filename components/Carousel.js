import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef();

  const scrollToIndex = (index) => {
    setActiveIndex(index);
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
          setActiveIndex(Math.round(contentOffsetX / viewportWidth));
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
          <Text
            key={index}
            style={[
              styles.paginationDot,
              activeIndex === index && styles.paginationDotActive,
            ]}
            onPress={() => scrollToIndex(index)}
          >
            ⚫
          </Text>
        ))}
      </View>
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
    fontSize: 24,
    color: '#888',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    color: '#333',
  },
});

export default Carousel;