import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const WorldMap = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profil')}>
        <Text style={styles.textButton}>Profil</Text>
      </TouchableOpacity>
      <Text>Map Screen</Text>
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
  button: {
    backgroundColor: '#CBA365',
    padding: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    position: 'absolute',
    top: 10,
    right: 0,
  },
  textButton: {
    color: '#141311',
    fontSize: 18,
  },
});

export default WorldMap;
