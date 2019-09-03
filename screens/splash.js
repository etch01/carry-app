import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

var {width, height} = Dimensions.get('window');
const splashImage = require('../assets/splash.png');

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('DrawerNavigator');
    }, 3000);
  }
  render() {
    return <Image style={styles.splashImage} source={splashImage} />;
  }
}

const styles = StyleSheet.create({
  splashImage: {
    flex: 1,
    width: null,
    height: null,
  },
});
