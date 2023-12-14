import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ICONSIZES } from '../helpers/Constants';
import { GlobalStyles } from '../helpers/GlobalStyles';

interface HeaderProps {
  color:string
}

const Header:React.FC<HeaderProps> = ({color}) => {
  return (
    <View style={GlobalStyles.headerContainer}>
      <View style={GlobalStyles.leftIcon}>
        <TouchableOpacity>
          <Ionicons
            name={'reorder-two-sharp'}
            size={ICONSIZES.normal}
            color={color}
          />
        </TouchableOpacity>
      </View>

      <View style={GlobalStyles.midIcon}>
        <Ionicons
          name={'logo-playstation'}
          size={ICONSIZES.medium}
          color={color}
        />
      </View>


      <View style={GlobalStyles.endIcons}>
        <TouchableOpacity style={GlobalStyles.iconMarginRight}>
          <Ionicons
            name={'cart-outline'}
            size={ICONSIZES.normal}
            color={color}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name={'search'}
            size={ICONSIZES.normal}
            color={color}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
