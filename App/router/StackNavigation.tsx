import React from 'react';
import {
  ScreenNames,
  header_shown_false,
} from '../helpers/Constants';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import Details from '../screens/Details';

const Stack = createSharedElementStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.SplashScreen}
        options={header_shown_false}
        component={Splash}
      />
      <Stack.Screen
        name={ScreenNames.HomeScreen}
        options={header_shown_false}
        component={Home}
      />
      <Stack.Screen
        name={ScreenNames.DetailsScreen}
        options={header_shown_false}
        sharedElements={(route) => {
          const {image} = route.params;
          return [
            {
              id: `item.${image.key}.photo`,
              animation: 'fade',
             
            },
          ];
        }}
        component={Details}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
