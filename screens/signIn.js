import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, Image, Dimensions} from 'react-native';
import Header from '../components/header/header';
import Input from '../components/textInputs/textInputWithImage';
import RectangleButton from '../components/buttons/rectangle';

var {width, height} = Dimensions.get('window');

export default class signUp extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header titleImageURL={require('../assets/text/تسجيل_الدخول.png')} />
        <View style={styles.logoContainer}>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
        </View>
        <View style={styles.inputGroup}>
          <Input
            icon={require('../assets/icons/Shape2.png')}
            placeholder="الأسم"
          />
          <Input
            icon={require('../assets/icons/lock-512.png')}
            placeholder="الرقم السري"
          />
        </View>
        <View style={styles.button}>
          <RectangleButton innerImage={require('../assets/text/تسجيل.png')} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    height: height * 0.2,
    marginTop: height * 0.1,
  },
  logo: {
    resizeMode: 'contain',
    width: '90%',
    height: '90%',
  },
  inputGroup: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: height * 0.3,
  },
  button: {
    alignItems: 'center',
    height: height * 0.2,
  },
});
