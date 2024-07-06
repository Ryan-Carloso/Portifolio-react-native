import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, interpolate } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.35; // Diminuir a largura do item
const ITEM_HEIGHT = height * 0.25; // Diminuir a altura do item

const data = [
  { id: 1, image: require('../assets/images/img_1.jpeg') },
  { id: 2, image: require('../assets/images/img_2.jpeg') },
  { id: 3, image: require('../assets/images/img_3.jpeg') },
  { id: 4, image: require('../assets/images/img_4.jpeg') },
  { id: 5, image: require('../assets/images/img_5.jpeg') },
];

const Carousel3D = () => {
  const [index, setIndex] = useState(0);
  const translateX = useSharedValue(0);

  const onGestureEvent = (event) => {
    translateX.value = event.nativeEvent.translationX;
  };

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.state === 5) {
      if (event.nativeEvent.translationX < -width * 0.25) {
        setIndex((prevIndex) => (prevIndex + 1) % data.length);
      } else if (event.nativeEvent.translationX > width * 0.25) {
        setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
      }
      translateX.value = withSpring(0);
    }
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.carouselContainer}>
        <TouchableOpacity style={{marginLeft: 20}}  onPress={handlePrevious}>
          <AntDesign name="stepbackward" size={24} color="black" />
        </TouchableOpacity>
        <PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange}>
          <Animated.View style={styles.container}>
            {data.map((item, i) => {
              const offset = (i - index + data.length) % data.length;
              const inputRange = [-width, 0, width];
              const animatedStyle = useAnimatedStyle(() => {
                const translateXVal = interpolate(translateX.value, inputRange, [-ITEM_WIDTH, 0, ITEM_WIDTH]);
                const rotateY = interpolate(translateX.value, inputRange, [-10, 0, 10]);

                // Adjusting the translateX and rotateY to show previous images
                const adjustedTranslateX = translateXVal + (offset - Math.floor(data.length / 2)) * ITEM_WIDTH;
                const adjustedRotateY = rotateY + (offset - Math.floor(data.length / 2)) * 40;

                return {
                  transform: [
                    { perspective: 1000 },
                    { rotateY: `${adjustedRotateY}deg` },
                    { translateX: adjustedTranslateX },
                    { scale: offset === 0 ? 1 : 0.9 }
                  ],
                  zIndex: data.length - offset // This ensures the correct layering of items
                };
              });

              return (
                <Animated.Image key={item.id} source={item.image} style={[styles.item, animatedStyle]} />
              );
            })}
          </Animated.View>
        </PanGestureHandler>
        <TouchableOpacity style={{marginRight: 20}} onPress={handleNext}>
          <AntDesign name="stepforward" size={24} color="black" />
        </TouchableOpacity>
      </View>
      
      <Text style={{ textAlign: 'center', margin: 15 }}>
      Can be used for news site articles, app features, and ecommerce products, to creative professionals portfolios      
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH * 2,
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  item: {
    position: 'absolute',
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 10,
  },
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width,
    height: ITEM_HEIGHT,
    marginTop: '10%',
  },
});

export default Carousel3D;
