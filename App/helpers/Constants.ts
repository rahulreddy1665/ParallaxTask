import { Dimensions } from "react-native";
import { StackAnimationTypes } from "react-native-screens";

export const ScreenNames = {
    HomeScreen : "Home",
    SplashScreen : "Splash",
    DetailsScreen:"Details"
}

export const header_shown_false = {
    headerShown:false
}

export const animationwithheader = {
    headerShown:false,
    animation:"fade" as StackAnimationTypes
}

export const COLORS = {
    primaryBg : "#192023",
    Blue:"#1f87dc",
    White:"#FFFFFF",
    Black:"#5c5c5c",
    DarkBlack:"#000000",
    buttonBg: "#1c87de"
}

export const ICONSIZES = {
    tiny: 16,
    small: 20,
    normal: 24,
    medium: 30,
    large: 45,
    xl: 50,
};

export const {width} = Dimensions.get('screen');
export const ITEM_WIDTH = width * 0.86;
export const ITEM_HEIGHT = ITEM_WIDTH * 1.2;
export const IMAGE_SCALE_FACTOR = 1.1;