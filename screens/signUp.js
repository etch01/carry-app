import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import Header from '../components/header/header';
import Input from '../components/textInputs/textInputWithImage';
import RectangleButton from '../components/buttons/rectangle';

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
          <Input
            icon={require('../assets/icons/confirm_password_371113.png')}
            placeholder="تأكيد الرقم السري"
          />
          <Input
            icon={require('../assets/icons/27630.png')}
            placeholder="البريد الالكتروني"
          />
          <Input
            icon={require('../assets/icons/Telephone_copy.png')}
            placeholder="الهاتف"
          />
          <Input
            icon={require('../assets/icons/city_icon_728114.png')}
            placeholder="المدينه"
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
    justifyContent: 'center',
    flex: 1.5,
  },
  logo: {
    resizeMode: 'contain',
    width: '90%',
    height: '90%',
  },
  inputGroup: {
    alignItems: 'center',
    flex: 4,
    justifyContent: 'space-around',
  },
  button: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
