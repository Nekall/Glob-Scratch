import React, {useContext, useRef, useState} from 'react';
import {View, StyleSheet, Animated, TouchableOpacity, Text} from 'react-native';
import {PinchGestureHandler, State} from 'react-native-gesture-handler';

// Components
import FranceSVG from '../../components/FranceSVG';

// Context
import {AuthContext} from '../../context/Auth';

const FranceMap = ({navigation}: any) => {
  const {userInfo, updateUser} = useContext(AuthContext);

  const [scale, setScale] = useState(0.4);
  const scaleValue = useRef(new Animated.Value(scale)).current;

  const onPinchGestureEvent = Animated.event(
    [{nativeEvent: {scale: scaleValue}}],
    {useNativeDriver: true},
  );

  const onPinchHandlerStateChange = (event: any) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      setScale(scale * event.nativeEvent.scale);
      scaleValue.setValue(0.4);
    }
  };

  const transformedStyle = {
    transform: [{scale: scaleValue}],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profil')}>
        <Text style={styles.textButton}>Profil</Text>
      </TouchableOpacity>
      <PinchGestureHandler
        onGestureEvent={onPinchGestureEvent}
        onHandlerStateChange={onPinchHandlerStateChange}>
        <Animated.View style={transformedStyle}>
          <FranceSVG
            departments={JSON.parse(userInfo.franceDpt)}
            updateUser={updateUser}
            userInfo={userInfo}
          />
        </Animated.View>
      </PinchGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

export default FranceMap;
