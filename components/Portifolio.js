

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPortifolioScreen from './Portifolio/MainPortifolioScreen';
import ShibaHelperScreen from './Portifolio/ShibaHelperScreen';
import SecurebitScreen from './Portifolio/SecurebitScreen';
import GeoFinderScreen from './Portifolio/GeoFinderScreen';

const PortifolioStack = createStackNavigator();

const Portifolio = () => {
  return (
    <PortifolioStack.Navigator initialRouteName="MainPortifolio">
      <PortifolioStack.Screen name="MainPortifolio" component={MainPortifolioScreen} />
      <PortifolioStack.Screen name="ShibaHelper" component={ShibaHelperScreen} />
      <PortifolioStack.Screen name="Securebit" component={SecurebitScreen} />
      <PortifolioStack.Screen name="GeoFinder" component={GeoFinderScreen} />
    </PortifolioStack.Navigator>
  );
};

export default Portifolio;

