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
      <Stack.Navigator initialRouteName={userToken ? 'world-map' : 'login'}>
        <Stack.Screen
          name="france-map"
          component={FranceMap}
          options={{
            title: 'Carte France',
            headerStyle: {
              backgroundColor: '#141311',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="world-map"
          component={WorldMap}
          options={{
            title: 'Carte',
            headerStyle: {
              backgroundColor: '#141311',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: 'Connexion',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{
            title: 'Inscription',
            headerStyle: {
              backgroundColor: '#141311',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
          options={{
            title: 'Profil',
            headerStyle: {
              backgroundColor: '#141311',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="update-profile"
          component={UpdateProfile}
          options={{
            title: 'Mise à jour du Profil',
            headerStyle: {
              backgroundColor: '#141311',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
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
