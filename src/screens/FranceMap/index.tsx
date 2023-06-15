import React, {useContext, useRef, useState} from 'react';
import {View, StyleSheet, Animated, TouchableOpacity, Text} from 'react-native';
import {
  PinchGestureHandler,
  State,
  PanGestureHandler,
} from 'react-native-gesture-handler';

// Components
import FranceSVG from '../../components/FranceSVG';

// Context
import {AuthContext} from '../../context/Auth';

const FranceMap = ({navigation}: any) => {
  const {userInfo, updateUser} = useContext(AuthContext);

  const [scale, setScale] = useState(0.6);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const scaleValue = useRef(new Animated.Value(scale)).current;
  const translateXValue = useRef(new Animated.Value(translateX)).current;
  const translateYValue = useRef(new Animated.Value(translateY)).current;

  const onPinchGestureEvent = Animated.event(
    [{nativeEvent: {scale: scaleValue}}],
    {useNativeDriver: true},
  );

  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateXValue,
          translationY: translateYValue,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const onPinchHandlerStateChange = (event: any) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      setScale(scale * event.nativeEvent.scale);
    }
  };

  const onPanHandlerStateChange = (event: any) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      setTranslateX(translateX + event.nativeEvent.translationX);
      setTranslateY(translateY + event.nativeEvent.translationY);
      translateXValue.setValue(0);
      translateYValue.setValue(0);
    }
  };

  const transformedStyle = {
    transform: [
      {scale: scaleValue},
      {
        translateX: Animated.add(
          translateXValue,
          new Animated.Value(translateX),
        ),
      },
      {
        translateY: Animated.add(
          translateYValue,
          new Animated.Value(translateY),
        ),
      },
    ],
  };

  const resetPositionAndZoom = () => {
    setScale(0.6);
    setTranslateX(0);
    setTranslateY(0);
    scaleValue.setValue(0.6);
    translateXValue.setValue(0);
    translateYValue.setValue(0);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('profile')}>
        <Text style={styles.textButton}>Profil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonReset}
        onPress={() => resetPositionAndZoom()}>
        <Text style={styles.textButtonReset}>Reset</Text>
      </TouchableOpacity>
      <PinchGestureHandler
        onGestureEvent={onPinchGestureEvent}
        onHandlerStateChange={onPinchHandlerStateChange}>
        <Animated.View style={transformedStyle}>
          <PanGestureHandler
            onGestureEvent={onPanGestureEvent}
            onHandlerStateChange={onPanHandlerStateChange}>
            <Animated.View style={transformedStyle}>
              <FranceSVG
                departments={JSON.parse(userInfo.franceDpt)}
                updateUser={updateUser}
                userInfo={userInfo}
              />
            </Animated.View>
          </PanGestureHandler>
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
    backgroundColor: '#242424',
  },
  button: {
    backgroundColor: '#CBA365',
    padding: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    position: 'absolute',
    top: 10,
    right: 0,
    zIndex: 1,
  },
  textButton: {
    color: '#141311',
    fontSize: 18,
  },
  buttonReset: {
    backgroundColor: '#141311',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    left: 10,
    zIndex: 1,
  },
  textButtonReset: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FranceMap;
