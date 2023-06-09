import React, {useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import ToastManager from 'toastify-react-native';

// Screens
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Profile from './src/screens/Profile';
import WorldMap from './src/screens/WorldMap';

// Components
import Loading from './src/components/Loading';

// Context
import {AuthProvider, AuthContext} from './src/context/Auth';

const Stack = createNativeStackNavigator();

const App = () => {
  const {userToken, isLoading} = useContext(AuthContext);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={userToken ? 'Carte' : 'Connexion'}>
        <Stack.Screen name="Carte" component={WorldMap} />
        <Stack.Screen name="Connexion" component={Login} />
        <Stack.Screen name="Inscription" component={Signup} />
        <Stack.Screen name="Profil" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  return (
    <AuthProvider>
      <ToastManager />
      <App />
    </AuthProvider>
  );
};

export default AppWrapper;
