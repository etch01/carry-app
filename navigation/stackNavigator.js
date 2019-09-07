import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../screens/splash';
import DrawerNavigator from './DrawerNavigator';
import ShippingOrTransfer from '../screens/shippingOrTransfer';
import BottomNavigator from './bottomNavigator';

const StackNavigator = createStackNavigator(
  {
    Splash: {screen: Splash},
    DrawerNavigator: {screen: DrawerNavigator},
    ShippingOrTransfer: {screen: ShippingOrTransfer},
    BottomNavigator: {screen: BottomNavigator},
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
