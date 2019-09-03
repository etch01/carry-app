import {Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import CustomDrawerContentComponent from '../components/DrawerContent/customeDrawerContent';
import SignUp from '../screens/signUp';

const {width} = Dimensions.get('window');

const DrawerNavigation = createDrawerNavigator(
  {
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
  },

  {
    contentComponent: CustomDrawerContentComponent,
    drawerPosition: 'right',
    drawerWidth: width * 0.7,
  },
);

const drawerContainer = createAppContainer(DrawerNavigation);
export default drawerContainer;
