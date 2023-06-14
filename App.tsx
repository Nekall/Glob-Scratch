import React, {useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import ToastManager from 'toastify-react-native';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// Screens
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Profile from './src/screens/Profile';
import UpdateProfile from './src/screens/UpdateProfile';
import WorldMap from './src/screens/WorldMap';
import FranceMap from './src/screens/FranceMap';

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
        <Stack.Screen name="Carte France" component={FranceMap} />
        <Stack.Screen name="Carte" component={WorldMap} />
        <Stack.Screen name="Connexion" component={Login} />
        <Stack.Screen name="Inscription" component={Signup} />
        <Stack.Screen name="Profil" component={Profile} />
        <Stack.Screen name="Mise à jour du Profil" component={UpdateProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AuthProvider>
        <ToastManager />
        <App />
      </AuthProvider>
    </GestureHandlerRootView>
  );
};

export default AppWrapper;
