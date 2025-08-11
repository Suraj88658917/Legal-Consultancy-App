import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Splash from './screens/Splash';
import Welcome from './screens/Welcome';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DrawerNavigator from './screens/DrawerNavigation';
import ConsultNow from './components/ConsultNow';



const Stack = createNativeStackNavigator();

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{ title: 'Login' }}>
          {props => <LoginScreen {...props} setToken={setToken} />}
        </Stack.Screen>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
        <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="ConsultNow" component={ConsultNow} options={{ headerShown: false }} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
