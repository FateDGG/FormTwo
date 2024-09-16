import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { FormPage1 } from '../screens/forms/chapters/cap1/FormPage1';
import { FormPage2 } from '../screens/forms/chapters/cap1/FormPage2';
import { FormPage3 } from '../screens/forms/chapters/cap2/FormPage3';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false,
      headerStyle:{
        elevation: 0,
        shadowColor: 'transparent',
      },
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="page1" component={FormPage1} />
      <Stack.Screen name="page2" component={FormPage2} />
      <Stack.Screen name="page3" component={FormPage3} />
    </Stack.Navigator>
  );
}