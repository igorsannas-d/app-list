import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomRoutes from './bottom.routes';

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomRoutes} />
    </Stack.Navigator>
  );
}