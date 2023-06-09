import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

// Context
import {AuthContext} from '../../context/Auth';

const Profile = ({navigation}: any) => {
  const {logout, userInfo} = useContext(AuthContext);
  const {email, firstname, lastname, country} = userInfo;

  const totalCountries = 195;
  const visitedCountries = 30;
  const futureDestinations = 10;
  const visitedCountriesThisYear = 5;

  const handleLogout = () => {
    logout();
    navigation.navigate('Connexion');
  };

  const handleEditProfile = () => {
    console.log('Edit profile');
  };

  const handleDeleteAccount = () => {
    console.log('Delete account');
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Badges :</Text>
        <Text style={styles.label}>Badges à venir</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Informations personnelles :</Text>
        <Text style={styles.label}>Nom: {lastname}</Text>
        <Text style={styles.label}>Prénom: {firstname}</Text>
        <Text style={styles.label}>Email: {email}</Text>
        <Text style={styles.label}>Pays: {country}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Statistiques :</Text>
        <Text style={styles.label}>
          Nombre de pays visités: {visitedCountries} / {totalCountries}
        </Text>
        <Text style={styles.label}>
          Nombre de pays dans la liste des futures destinations :{' '}
          {futureDestinations}
        </Text>
        <Text style={styles.label}>
          Nombre de pays visités cette année : {visitedCountriesThisYear}
        </Text>
      </View>
      <View style={styles.buttonsBox}>
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.textButton}>Modifier mon profil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDeleteAccount}>
          <Text style={styles.textButton}>Supprimer mon compte</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.buttonLogoutBox}>
        <TouchableOpacity style={styles.buttonLogout} onPress={handleLogout}>
          <Text style={styles.textButtonLogout}>Se déconnecter</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    flex: 1,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  buttonsBox: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#CBA365',
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    color: '#141311',
  },
  buttonLogoutBox: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonLogout: {
    padding: 10,
  },
  textButtonLogout: {
    color: '#141311',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default Profile;
