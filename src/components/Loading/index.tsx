import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Loader = () => {
  return (
    <View style={styles.container}>
      {/* <Animatable.View
        style={styles.loader}
        animation="rotate"
        iterationCount="infinite"
        duration={1000}
        easing="linear"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // loader: {
  //   width: 75,
  //   height: 75,
  //   borderTopWidth: 5,
  //   borderRightWidth: 5,
  //   borderRightColor: 'transparent',
  //   borderRadius: 50,
  //   borderColor: '#141311',
  // },
});

export default Loader;
