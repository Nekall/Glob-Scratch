import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// Context
import {AuthContext} from '../../context/Auth';

const Profile = ({navigation}: any) => {
  const {logout} = useContext(AuthContext);

  const username = 'Jaguette';
  const email = 'jeanbaguette@example.com';
  const lastName = 'Baguette';
  const firstName = 'Jean';
  const country = 'France';

  const totalCountries = 195;
  const visitedCountries = 30;
  const futureDestinations = 10;
  const visitedCountriesThisYear = 5;

  const handleLogout = () => {
    logout();
    navigation.navigate('Connexion');
    console.log('Logout');
  };

  const handleEditProfile = () => {
    console.log('Edit profile');
  };

  const handleDeleteAccount = () => {
    console.log('Delete account');
  };

  return (
    <View style={styles.container}>
      <Button title="Se déconnecter" onPress={handleLogout} />
      <Button title="Modifier mon profil" onPress={handleEditProfile} />
      <Button title="Supprimer mon compte" onPress={handleDeleteAccount} />
      <View style={styles.section}>
        <Text style={styles.title}>Informations personnelles :</Text>
        <Text style={styles.label}>Pseudo: {username}</Text>
        <Text style={styles.label}>Nom: {lastName}</Text>
        <Text style={styles.label}>Prénom: {firstName}</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
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
});

export default Profile;
