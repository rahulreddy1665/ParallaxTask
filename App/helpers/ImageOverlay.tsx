import {View, Text,TouchableOpacity} from 'react-native';
import React from 'react';
import { HomeStyles } from './GlobalStyles';
import { COLORS, ICONSIZES } from './Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ImageOverlayProps {
    title: string;
    subtitle: string;
  }

const ImageOverlay: React.FC<ImageOverlayProps> = ({title, subtitle}) => {
  return (
    <View style={HomeStyles.overlay}>
      <View style={HomeStyles.textContainer}>
        <Text style={HomeStyles.titleText}>{title}</Text>
        <Text style={HomeStyles.subtitleText}>{subtitle}</Text>
        <Text style={HomeStyles.platformText}>PS4</Text>
      </View>
      <View style={HomeStyles.rightContainer}>
        <TouchableOpacity style={HomeStyles.playButton}>
          <Ionicons
            name={'add-sharp'}
            size={ICONSIZES.small}
            color={COLORS.White}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageOverlay;
