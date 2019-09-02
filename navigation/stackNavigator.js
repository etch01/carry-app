import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Splash from '../screens/splash';
import SignUp from '../screens/signUp';


const StackNavigator = createStackNavigator(
  {
    Splash: { screen: Splash },
    SignUp: { screen: SignUp },
  },
  {
    headerMode: "none",
    mode: "modal",
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default createAppContainer(StackNavigator);
