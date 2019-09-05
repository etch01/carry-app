import React from 'react';
import {
  Switch,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';
import DrawerScreens from './drawerScreenButton/screenButton';
import str from '../../language/localize';

var {width, height} = Dimensions.get('window');
//props.navigation.dispatch(DrawerActions.closeDrawer())
class drawerContent extends React.Component {
  state = {switchValue: false};

  //switch off or on
  switchHandler = () => {
    this.setState({switchValue: !this.state.switchValue});
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  };

  render() {
    return (
      <View style={styles.drawerContainer}>
        <View style={styles.card}>
          <View style={styles.switchContainer}>
            <Switch
              thumbColor="#350D96"
              trackColor={{true: '#FFFFFF', false: '#FFFFFF'}}
              style={{transform: [{scaleX: 1}, {scaleY: 1}]}}
              onValueChange={this.switchHandler}
              value={this.state.switchValue}
            />
          </View>
          <View style={styles.avatar}>
            <View style={styles.imageContainer}>
              <Image
                resizeMode={'contain'}
                style={{width: null, height: null, flex: 1}}
                source={require('../../assets/pictures/avater.png')}
              />
            </View>
            <View style={styles.textContainer}>
              <Image
                resizeMode={'contain'}
                style={styles.cardText}
                source={require('../../assets/text/محمد_عبد_السلام_الشبراوى.png')}
              />
            </View>
            <View style={styles.textContainer}>
              <Image
                resizeMode={'contain'}
                style={styles.cardText}
                source={require('../../assets/text/شارع_العليا_في_وسط_مدينة_الرياض.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.screens}>
          <DrawerScreens
            name={str.sideMenuScreens.home}
            src={require('../../assets/icons/IconFeed.png')}
          />
          <DrawerScreens
            name={str.sideMenuScreens.personal}
            src={require('../../assets/icons/IconProfile.png')}
          />
          <DrawerScreens
            name={str.sideMenuScreens.orders}
            src={require('../../assets/icons/list.png')}
          />
          <DrawerScreens
            name={str.sideMenuScreens.settings}
            src={require('../../assets/icons/Icon_Setting.png')}
          />
          <DrawerScreens
            name={str.sideMenuScreens.contactUs}
            src={require('../../assets/icons/IconFriends.png')}
          />
          <DrawerScreens
            name={str.sideMenuScreens.policy}
            src={require('../../assets/icons/729352-200.png')}
          />
          <DrawerScreens
            name={str.sideMenuScreens.exit}
            src={require('../../assets/icons/Icon_Logout.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#395DB4',
  },
  card: {
    flex: 1,
    marginTop: (height * 0.1) / 5,
  },
  switchContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: (height * 0.1) / 5,
  },
  screens: {
    flex: 2,
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 4,
  },
  imageContainer: {
    borderColor: '#FFFFFF',
    borderWidth: 5,
    borderRadius: 70,
    height: height / 8,
    width: height / 8,
  },
  textContainer: {
    flex: 1,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardText: {
    width: null,
    height: null,
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
});

export default drawerContent;
