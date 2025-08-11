import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainHome from './MainHome';
import TalkToLawyerScreen from './TalkToLawyerScreen';
import ProductScreen from './ProductScreen';
import OrderScreen from './OrderScreen';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Talk to Lawyer') iconName = 'chatbox-ellipses-outline';
          else if (route.name === 'Product') iconName = 'pricetags-outline';
          else if (route.name === 'Order') iconName = 'cart-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4338ca',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="HomeTab" component={MainHome}  options={{ title: 'Home' }}/>
      <Tab.Screen name="Talk to Lawyer" component={TalkToLawyerScreen} />
      <Tab.Screen name="Product" component={ProductScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
    </Tab.Navigator>
  );
}
