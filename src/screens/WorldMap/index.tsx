import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

const WorldMap = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Button title="Profil" onPress={() => navigation.navigate('Profil')} />
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
});

export default WorldMap;
