import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../screens/splash';
import DrawerNavigator from './DrawerNavigator';

const StackNavigator = createStackNavigator(
  {
    Splash: {screen: Splash},
    DrawerNavigator: {screen: DrawerNavigator},
  },
  {
    headerMode: 'none',
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default createAppContainer(StackNavigator);
