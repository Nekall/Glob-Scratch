// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';

// Screens
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Profile from './src/screens/Profile';
import WorldMap from './src/screens/WorldMap';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Connexion" component={Login} />
        <Stack.Screen name="Inscription" component={Signup} />
        <Stack.Screen name="Profil" component={Profile} />
        <Stack.Screen name="Carte" component={WorldMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
