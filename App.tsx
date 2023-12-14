
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigation from './App/router/StackNavigation';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
     <StackNavigation/>
    </NavigationContainer>
  );
};

export default App;
