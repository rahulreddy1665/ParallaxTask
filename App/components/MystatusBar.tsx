import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

interface MyStatusBarProps {
  backgroundColor:string
}

const MyStatusBar:React.FC<MyStatusBarProps> =({backgroundColor}) => (
  <View style={[styles.statusBar]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor}  />
    </SafeAreaView>
  </View>
);

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});



export default  MyStatusBar;

// export default MyStatusBar;
