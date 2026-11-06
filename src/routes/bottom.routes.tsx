import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { themes } from '../global/themes';
import NewProduct from '../pages/newProduct';
import ProductExit from '../pages/productExit';
import StockControl from '../pages/stockControl';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: themes.colors.primary,
        tabBarInactiveTintColor: themes.colors.inactive,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '700' },
        tabBarStyle: {
          height: 68,
          paddingTop: 8,
          paddingBottom: 10,
          backgroundColor: themes.colors.surface,
          borderTopWidth: 0,
          elevation: 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.12,
          shadowRadius: 6,
        },
      }}
    >
      <Tab.Screen
        name="NewProduct"
        component={NewProduct}
        options={{
          tabBarLabel: 'Novo Produto',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-box" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProductExit"
        component={ProductExit}
        options={{
          tabBarLabel: 'Saída',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="exit-to-app" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="StockControl"
        component={StockControl}
        options={{
          tabBarLabel: 'Estoque',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="warehouse" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}