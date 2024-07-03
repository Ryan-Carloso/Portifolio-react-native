// DrawerNav.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import Carousel from './Carousel';
import BotaoEstilizado from './buttonStyle';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Carousel" component={Carousel} />
        <Drawer.Screen name="Profile" component={BotaoEstilizado} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNav;