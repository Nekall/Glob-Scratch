import React, {useState, useContext} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {Toast} from 'toastify-react-native';

// Utils
import {isEmail} from '../../utils/email';

// Context
import {AuthContext} from '../../context/Auth';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useContext(AuthContext);

  const handleLogin = async () => {
    if (email && password) {
      if (isEmail(email)) {
        await login(email.toLowerCase(), password);
        navigation.navigate('world-map');
      } else {
        Toast.error('Veuillez saisir un email valide');
      }
    } else {
      Toast.error('Veuillez remplir tous les champs');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/globescratch.png')}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('signup')}
        style={styles.signupBtn}>
        <Text style={styles.textSignupBtn}>Créer un compte</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.textButton}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#242424',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  signupBtn: {
    marginTop: 10,
    marginBottom: 10,
  },
  textSignupBtn: {
    color: '#ffffffb5',
    textDecorationLine: 'underline',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
    marginTop: -50,
  },
  button: {
    backgroundColor: '#CBA365',
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    color: '#141311',
  },
});

export default Login;
