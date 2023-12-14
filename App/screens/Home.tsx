import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Header from '../components/Header';
import {COLORS, ScreenNames} from '../helpers/Constants';
import {HomeStyles} from '../helpers/GlobalStyles';
import {images} from '../helpers/data';
import MyStatusBar from '../components/MystatusBar';
import {SharedElement} from 'react-navigation-shared-element';

const Home = ({navigation}: any) => {
  const {height} = Dimensions.get('screen');
  const IMAGE_SCALE_FACTOR = 1.1;
  const scrollY = useRef(new Animated.Value(0)).current;
  

  const scaleValues = images.map(() => useRef(new Animated.Value(1)).current);

  const onPressImage = (index: number, item: object) => {
    // Start the spring animation for bouncy effect
    Animated.spring(scaleValues[index], {
      toValue: 0.95,
      useNativeDriver: true,
    }).start(() => {
      // After the animation completes, navigate to the details screen
      navigation.navigate(ScreenNames.DetailsScreen, {image: item});

      // For reseting the scale to its original value
      Animated.spring(scaleValues[index], {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={HomeStyles.container}>
      <MyStatusBar backgroundColor={COLORS.DarkBlack} />
      <Header color={COLORS.Blue} />
      <View style={HomeStyles.mainView}>
        <Animated.ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}>
          <Text style={HomeStyles.title}>GREAT GAMES</Text>
          <Text style={HomeStyles.Subtitle}>Coming Soon</Text>
          {images.map((item, index) => {
            
            // inputRange defines the points of transition for the animation.
            const inputRange = [
              ((index - 1) * height) / 2,
              (index * height) / 2,
              ((index + 1) * height) / 2,
            ];
            // translateY is the vertical translation.
            const translateY = scrollY.interpolate({
              inputRange,
              outputRange: [-75, 0, 75],
            });
            // scale is used to scale the item size based on the scroll position.
            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [1, IMAGE_SCALE_FACTOR, 1],
            });
            return (
              <TouchableWithoutFeedback
                key={item.key}
                onPress={() => onPressImage(index, item)}>
                <Animated.View
                  style={[
                    HomeStyles.imageView,
                    {transform: [{scale: scaleValues[index]}]},
                  ]}>
                  <View style={HomeStyles.imageWrapper}>
                    <View style={HomeStyles.imageContainer}>
                      <SharedElement id={`item.${item.key}.photo`} style={[StyleSheet.absoluteFillObject,{borderRadius:18}]}>
                        <Animated.Image
                          source={{uri: item.url}}
                          resizeMode={'cover'}
                          style={[
                            HomeStyles.image,
                            
                            {
                              transform: [
                                {
                                  translateY,
                                },
                                // We can add scale to get zoomIn effects
                                // {
                                //   scale
                                // }
                              ],
                            },
                          ]}
                        />
                      </SharedElement>
                    </View>
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>
            );
          })}
        </Animated.ScrollView>
      </View>
    </View>
  );
};

export default Home;
