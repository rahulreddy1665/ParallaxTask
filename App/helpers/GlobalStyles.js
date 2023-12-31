import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, ITEM_WIDTH,ITEM_HEIGHT,width} from './Constants';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBg,
  },
  lottieView: {
    width: 400,
    height: 400,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  rightIcons: {
    flexDirection: 'row',
  },
  iconMarginRight: {
    marginRight: 10,
  },
  leftIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  midIcon: {
    flex: 1,
    alignItems: 'center',
  },
  endIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});



export const HomeStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.White,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: COLORS.Blue,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  Subtitle: {
    textAlign: 'center',
    color: COLORS.Black,
    fontSize: 26,
  },
  mainView: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imageView: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    borderRadius: 14,
    marginBottom:30,
   
  },
  imageContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    backgroundColor: COLORS.Transparent,
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 14,
    
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT ,
    resizeMode: 'cover',
    borderRadius: 18,
    
  },
  overlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10, 
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  titleText: {
    color: COLORS.White,
    fontSize: 18, 
    fontWeight: 'bold',
    marginBottom: 2, 
  },
  subtitleText: {
    color: COLORS.White,
    fontSize: 16,
    marginBottom: 2, 
  },
  playButton: {
    marginRight: 20,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.Blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  playButtonText: {
    color: 'black',
    fontSize: 30,
  },
  platformText: {
    color: COLORS.White,
    fontSize: 22,
    fontWeight: 'bold',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const DetailsScreenStyles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.DarkBlack,
    flex: 1,
    justifyContent: 'center',
  },
  flexContainer: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',  
    height: '100%',
  },
  gradient: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 10,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  playButton: {
    backgroundColor: COLORS.Blue,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginTop: 15,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  playButtonText: {
    color: COLORS.White,
    fontWeight: 'bold',
    fontSize: 10,
  },
  preOrderButtonContainer: {
    paddingBottom: Dimensions.get('screen').height / 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.buttonBg,
    padding: 15,
    borderRadius: 6,
    width: '85%',
  },
  buttonText: {
    color: COLORS.White,
    textAlign: 'center',
    fontSize: 18,
  },
});
