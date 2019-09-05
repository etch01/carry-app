import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
import Header from '../components/header/header';
import Input from '../components/textInputs/textInputWithImage';
import RectangleButton from '../components/buttons/rectangle';
import * as yup from 'yup';
import {Formik} from 'formik';
import str from '../language/localize';

//Validation Schema
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required(str.usernameValidation.required)
    .min(3, str.usernameValidation.min)
    .max(24, str.usernameValidation.max)
    .label(str.usernameValidation.label),
  password: yup
    .string()
    .required(str.passwordValidation.required)
    .min(6, str.passwordValidation.min)
    .max(24, str.passwordValidation.max)
    .label(str.passwordValidation.label),
  confirmPassword: yup
    .string()
    .required(str.repasswordValidation.required)
    .test('passwords-match', str.repasswordValidation.test, function(value) {
      return this.parent.password === value;
    })
    .label(str.repasswordValidation.label),
  email: yup
    .string()
    .required(str.emailValidation.required)
    .email(str.emailValidation.email)
    .label(str.emailValidation.label),
  phone: yup.string().matches(phoneRegExp, str.phoneValidation),
});
export default class signUp extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          menu={() => this.props.navigation.toggleDrawer()}
          titleImageURL={require('../assets/text/تسجيل_الدخول.png')}
        />
        <Formik
          initialValues={{
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            phone: '',
          }}
          onSubmit={(values, actions) => {
            this.props.navigation.navigate('ShippingOrTransfer');
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 1000);
          }}
          validationSchema={validationSchema}>
          {formikProps => (
            <React.Fragment>
              <View style={styles.logoContainer}>
                <Image
                  source={require('../assets/Logo.png')}
                  style={styles.logo}
                />
              </View>
              <View style={styles.inputGroup}>
                <Input
                  icon={require('../assets/icons/Shape2.png')}
                  placeholder={str.name}
                  onchange={formikProps.handleChange('username')}
                />
                <Input
                  icon={require('../assets/icons/lock-512.png')}
                  placeholder={str.password}
                  onchange={formikProps.handleChange('password')}
                />
                <Input
                  icon={require('../assets/icons/confirm_password_371113.png')}
                  placeholder={str.rePassword}
                  onchange={formikProps.handleChange('confirmPassword')}
                />
                <Input
                  icon={require('../assets/icons/27630.png')}
                  placeholder={str.email}
                  onchange={formikProps.handleChange('email')}
                />
                <Input
                  icon={require('../assets/icons/Telephone_copy.png')}
                  placeholder={str.phone}
                  onchange={formikProps.handleChange('phone')}
                />
                <Input
                  icon={require('../assets/icons/city_icon_728114.png')}
                  placeholder={str.city}
                  onchange={formikProps.handleChange('city')}
                />
                <Text style={{color: 'red'}}>
                  {formikProps.errors.username ||
                    formikProps.errors.password ||
                    formikProps.errors.confirmPassword ||
                    formikProps.errors.email ||
                    formikProps.errors.phone}
                </Text>
              </View>
              <View style={styles.button}>
                <RectangleButton
                  onPress={formikProps.handleSubmit}
                  title={str.signUp}
                />
              </View>
            </React.Fragment>
          )}
        </Formik>
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
