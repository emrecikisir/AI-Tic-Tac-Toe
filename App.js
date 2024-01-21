import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import GameScreen from './Screens/GameScreen';
import GameScreenAI from './Screens/GameScreenAI'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="AI Player" component={GameScreenAI} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
