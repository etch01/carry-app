import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/header';

export default class signUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="تسجيل الدخول" />
        <Text> signUp </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
