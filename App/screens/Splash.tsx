// SplashScreen.js
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';
import { ScreenNames } from '../helpers/Constants';
import { GlobalStyles } from '../helpers/GlobalStyles';

const SplashScreen = () => {
   const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={GlobalStyles.container}>
      <LottieView
        source={require('../assets/splash.json')} 
        autoPlay
        loop={false}
        style={GlobalStyles.lottieView}
        onAnimationFinish={() => {
          navigation.replace(ScreenNames.HomeScreen);
        }}
      />
    </View>
  );
};

export default SplashScreen;
