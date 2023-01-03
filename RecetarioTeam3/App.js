import React from 'react';

import Home from './screens/home';
import DetailsFood from './screens/detailsFood'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="detailsFood" component={DetailsFood} />

    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}