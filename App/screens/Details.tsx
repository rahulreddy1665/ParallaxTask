import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import MyStatusBar from '../components/MystatusBar';
import {COLORS, ICONSIZES} from '../helpers/Constants';
import {DetailsScreenStyles, HomeStyles} from '../helpers/GlobalStyles';
import {SharedElement} from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';
import useIsMounted from '../hooks/UseIsMounted';
import ImageOverlay from '../helpers/ImageOverlay';

interface DetailsProps {
  route: any;
  navigation: any;
}
const Details: React.FC<DetailsProps> = ({route, navigation}) => {
  const isMounted = useIsMounted();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    isMounted() &&
      setTimeout(() => {
        setLoader(false);
      }, 2000);
  }, []);

  return (
    <View style={DetailsScreenStyles.Container}>
      <MyStatusBar backgroundColor={COLORS.DarkBlack} />
      <Header color={COLORS.White} />
      <View style={DetailsScreenStyles.flexContainer}>
        <SharedElement
          id={`item.${route.params.image.key}.photo`}
          style={[StyleSheet.absoluteFillObject]}>
          <ImageBackground
            source={{uri: route.params.image.url}}
            style={DetailsScreenStyles.imageBackground}
            resizeMode="cover">
            <LinearGradient
              colors={['transparent', 'black']}
              style={DetailsScreenStyles.gradient}>
              <View style={DetailsScreenStyles.topBar}>
                <TouchableOpacity
                  style={DetailsScreenStyles.backButton}
                  onPress={() => navigation.goBack()}>
                  <Icon
                    name="chevron-back-outline"
                    size={ICONSIZES.medium}
                    color="#FFF"
                  />
                  <Text style={DetailsScreenStyles.backButtonText}>BACK</Text>
                </TouchableOpacity>

                <Animatable.View
                  animation={'bounceIn'}
                  duration={300}
                  delay={500}
                  style={DetailsScreenStyles.playButton}>
                  <Icon name="game-controller" size={30} color="#FFF" />
                  <Text style={DetailsScreenStyles.playButtonText}>GAMES</Text>
                </Animatable.View>
              </View>

              <View style={DetailsScreenStyles.preOrderButtonContainer}>
                <SharedElement
                  id={`item.${route.params.image.key}.text`}
                  style={StyleSheet.absoluteFillObject}>
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 135,
                      left: 20,
                      right: 0,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: 10,
                    }}>
                    <View style={HomeStyles.textContainer}>
                      <Text style={HomeStyles.titleText}>
                        {route.params.image.title}
                      </Text>
                      <Text style={HomeStyles.subtitleText}>
                        Esclusive PlayStation
                      </Text>
                      <Text style={HomeStyles.platformText}>PS4</Text>
                    </View>
                  </View>
                </SharedElement>
                {loader && (
                  <ActivityIndicator
                    color={'#fff'}
                    size={'large'}
                    style={{marginBottom: 20}}
                  />
                )}
                <TouchableOpacity style={DetailsScreenStyles.button}>
                  <Text style={DetailsScreenStyles.buttonText}>
                    PRE-ORDER NOW
                  </Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </ImageBackground>
        </SharedElement>
      </View>
    </View>
  );
};

export default Details;
