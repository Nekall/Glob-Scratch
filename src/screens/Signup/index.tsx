import React, {useEffect, useState} from 'react';
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

// Env
import {API_BASE_URL} from '../../utils/config';

const Signup = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [country, setCountry] = useState('');
  const [inputsIsValid, setInputsIsValid] = useState(false);

  useEffect(() => {
    if (
      email &&
      password &&
      confirmPassword &&
      firstname &&
      lastname &&
      country
    ) {
      setInputsIsValid(true);
    }
  }, [confirmPassword, email, password, firstname, lastname, country]);

  const handleSignUp = () => {
    if (password === confirmPassword) {
      if (isEmail(email)) {
        fetch(`${API_BASE_URL}/signup`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: email.toLowerCase(),
            password,
            firstname,
            lastname,
            country,
          }),
        })
          .then(res => res.json())
          .then(responseJson => {
            if (responseJson.success) {
              Toast.success('Compte créé avec succès.');
              navigation.navigate('Connexion');
            } else {
              Toast.error(responseJson.message);
            }
          })
          .catch(err => {
            Toast.error('Erreur lors de la création du compte.');
            console.error(err);
          });
      } else {
        Toast.error('Email invalide.');
      }
    } else {
      Toast.error('Les mots de passe ne correspondent pas.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/globescratch.png')}
      />
      <TextInput
        placeholder="Prénom"
        value={firstname}
        onChangeText={setFirstname}
        style={styles.input}
      />
      <TextInput
        placeholder="Nom"
        value={lastname}
        onChangeText={setLastname}
        style={styles.input}
      />
      <TextInput
        placeholder="Adresse e-mail"
        value={email}
        onChangeText={setEmail} //.toLowerCase()
        style={styles.input}
      />
      <TextInput
        placeholder="Pays"
        value={country}
        onChangeText={setCountry}
        style={styles.input}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirmer le mot de passe"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
        disabled={!inputsIsValid}>
        <Text style={styles.textButton}>Créer un compte</Text>
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
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
    marginTop: -50,
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
  button: {
    backgroundColor: '#CBA365',
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    color: '#141311',
  },
});

export default Signup;
