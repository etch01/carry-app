import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Header from '../components/header/header';
import Input from '../components/textInputs/textInputWithImage';
import RectangleButton from '../components/buttons/rectangle';

var {width, height} = Dimensions.get('window');

export default class signUp extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    loading: false,
  };

  signUserIn = (username, password) => {
    if (username === '' || password === '') {
      this.setState({errorMessage: 'من فضلك ادخل اسم المستخدم و كلمة السر'});
    }
  };

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
            onchange={text => this.setState({username: text})}
          />
          <Input
            icon={require('../assets/icons/lock-512.png')}
            placeholder="الرقم السري"
            onchange={text => this.setState({password: text})}
          />
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        </View>
        <View style={styles.button}>
          <RectangleButton
            onPress={() =>
              this.signUserIn(this.state.username, this.state.password)
            }
            innerImage={require('../assets/text/تسجيل.png')}
          />
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
