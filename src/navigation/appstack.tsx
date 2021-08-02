import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/home';
import {Provider, useSelector} from 'react-redux';

const Stack = createStackNavigator();

export const AppStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
