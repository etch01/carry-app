import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Packages from '../screens/packages';

const MainApp = createBottomTabNavigator(
  {
    Packages: Packages,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Packages') {
          return (
            <Image
              source={require('../assets/icons/courier-icon-28.png')}
              style={{width: 20, height: 20}}
            />
          );
        } else {
          return null;
          // <Image
          //   source={require('./assets/settings.png')}
          //   style={{width: 20, height: 20}}
          // />
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#5238CD',
      style: {
        backgroundColor: '#749EEC',
      },
      inactiveTintColor: '#ABC4F4',
      tabStyle: {
        //flexDirection: 'row',
        //borderBottomColor: '#5238CD',
        //borderBottomWidth: 4,
      },
    },
  },
);

export default MainApp;
