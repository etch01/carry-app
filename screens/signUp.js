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

//Validation Schema
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username is too short')
    .max(24, 'Username cannot be more than 24 character')
    .label('username'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password should be 6 characters or more')
    .max(24, 'Password should not be more than 24 character')
    .label('Password'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .test('passwords-match', "Password doesn't match.", function(value) {
      return this.parent.password === value;
    })
    .label('Confirm Password'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid Email !')
    .label('Email'),
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
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
            alert('All good !');
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
                  placeholder="الأسم"
                  onchange={formikProps.handleChange('username')}
                />
                <Input
                  icon={require('../assets/icons/lock-512.png')}
                  placeholder="الرقم السري"
                  onchange={formikProps.handleChange('password')}
                />
                <Input
                  icon={require('../assets/icons/confirm_password_371113.png')}
                  placeholder="تأكيد الرقم السري"
                  onchange={formikProps.handleChange('confirmPassword')}
                />
                <Input
                  icon={require('../assets/icons/27630.png')}
                  placeholder="البريد الالكتروني"
                  onchange={formikProps.handleChange('email')}
                />
                <Input
                  icon={require('../assets/icons/Telephone_copy.png')}
                  placeholder="الهاتف"
                  onchange={formikProps.handleChange('phone')}
                />
                <Input
                  icon={require('../assets/icons/city_icon_728114.png')}
                  placeholder="المدينه"
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
                  innerImage={require('../assets/text/تسجيل.png')}
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
