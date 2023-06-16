import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// Context
import {AuthContext} from '../../context/Auth';

const Profile = ({navigation}: any) => {
  const {logout, userInfo} = useContext(AuthContext);
  const {email, firstname, lastname, country, franceDpt, countries} = userInfo;
  const franceAchievements: any[] = [
    {
      icon: '🥖',
      title: 'Baguette',
      description: 'Visiter 5 départements français',
      dpts: 5,
    },
    {
      icon: '🍷',
      title: 'Vin',
      description: 'Visiter 20 départements français',
      dpts: 20,
    },
    {
      icon: '🧀',
      title: 'Fromage',
      description: 'Visiter 50 départements français',
      dpts: 50,
    },
    {
      icon: '🥐',
      title: 'Croissant',
      description: 'Visiter 90 départements français',
      dpts: 90,
    },
  ];

  const worldAchievements = [
    {
      icon: '🥇',
      title: 'National',
      description: 'Visiter 5 pays',
      cnts: 5,
    },
    {
      icon: '🥈',
      title: 'International',
      description: 'Visiter 10 pays',
      cnts: 10,
    },
    {
      icon: '🌎',
      title: 'Mondial',
      description: 'Visiter 50 pays',
      cnts: 50,
    },
    {
      icon: '🌏',
      title: 'Terrien',
      description: 'Visiter 100 pays',
      cnts: 100,
    },
    {
      icon: '🌍',
      title: 'Cosmopolite',
      description: 'Visiter 150 pays',
      cnts: 150,
    },
    {
      icon: '🚀',
      title: 'Spationaute',
      description: 'Visiter 195 pays',
      cnts: 195,
    },
  ];

  const totalDepartments = 96;
  const visitedDepartments = JSON.parse(franceDpt).length;

  const totalCountries = 195;
  const visitedCountries = JSON.parse(countries).length;

  const handleLogout = () => {
    logout();
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionInfos}>
        <Text style={styles.titleName}>
          {firstname.toUpperCase()} {lastname.toUpperCase()}
        </Text>
        <Text style={styles.title}>Informations personnelles :</Text>
        <Text style={styles.label}>Prénom & Nom</Text>
        <Text style={styles.infos}>
          {firstname} {lastname}
        </Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.infos}>{email}</Text>
        <Text style={styles.label}>Pays</Text>
        <Text style={styles.infos}>{country}</Text>
      </View>
      <View style={styles.sectionStats}>
        <Text style={styles.title}>Statistiques France :</Text>
        <Text style={styles.label}>
          Nombre de département (métropole) visités: {visitedDepartments} /{' '}
          {totalDepartments}
        </Text>
        <Text style={styles.title}>Statistiques Mondiales :</Text>
        <Text style={styles.label}>
          Nombre de département visités: {visitedCountries} / {totalCountries}
        </Text>
      </View>
      <View style={styles.badgesBox}>
        <Text style={styles.title}>Badges :</Text>
        <Text style={styles.label}>Badges France :</Text>
        <ScrollView horizontal={true}>
          {franceAchievements.length > 0 ? (
            franceAchievements.map((achievement, index) => {
              return (
                achievement.dpts <= visitedDepartments && (
                  <View key={index} style={styles.badge}>
                    <Text style={styles.iconBadge}>{achievement.icon}</Text>
                    <Text style={styles.titleBadge}>{achievement.title}</Text>
                    <Text style={styles.descriptionBadge}>
                      {achievement.description}
                    </Text>
                  </View>
                )
              );
            })
          ) : (
            <Text>
              Vous n'avez pas encore dévloquez de badges pour la France.
            </Text>
          )}
        </ScrollView>
        <Text style={styles.label}>Badges Monde :</Text>
        <ScrollView horizontal={true}>
          {worldAchievements.length > 0 ? (
            worldAchievements.map((achievement, index) => {
              return (
                achievement.cnts <= visitedCountries && (
                  <View key={index} style={styles.badge}>
                    <Text style={styles.iconBadge}>{achievement.icon}</Text>
                    <Text style={styles.titleBadge}>{achievement.title}</Text>
                    <Text style={styles.descriptionBadge}>
                      {achievement.description}
                    </Text>
                  </View>
                )
              );
            })
          ) : (
            <Text>
              Vous n'avez pas encore dévloquez de badges pour le Monde.
            </Text>
          )}
        </ScrollView>
      </View>
      <View style={styles.buttonsBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('update-profile')}>
          <Text style={styles.textButton}>Modifier mon profil</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.version}>v0.0.1</Text>
      <View style={styles.buttonLogoutBox}>
        <TouchableOpacity style={styles.buttonLogout} onPress={handleLogout}>
          <Text style={styles.textButtonLogout}>Déconnexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#242424',
  },
  sectionInfos: {
    flex: 3.2,
    marginBottom: 6,
  },
  sectionStats: {
    flex: 1.5,
    marginBottom: 6,
  },
  titleName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,
    color: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  infos: {
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 8,
    color: '#ffffff',
  },
  buttonsBox: {
    flex: 0.55,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 6,
  },
  button: {
    backgroundColor: '#CBA365',
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    color: '#141311',
    fontSize: 16,
  },
  buttonLogoutBox: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonLogout: {
    padding: 10,
  },
  textButtonLogout: {
    color: '#700000',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  badgesBox: {
    flex: 3.4,
    marginBottom: 10,
  },
  badge: {
    borderWidth: 0.5,
    borderColor: '#fff',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 8,
    backgroundColor: '#9c9c9c',
  },
  iconBadge: {
    fontSize: 25,
  },
  titleBadge: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  descriptionBadge: {
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#3d3d3d',
  },
  version: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 14,
  },
});

export default Profile;
