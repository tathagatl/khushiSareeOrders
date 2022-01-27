/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainTabNavigator from './src/navigators/MainTabNavigator';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};

export default App;
