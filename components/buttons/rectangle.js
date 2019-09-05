import React from 'react';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const rectangle = props => (
  <TouchableOpacity onPress={props.onPress}>
    <ImageBackground
      source={require('../../assets/buttons/Rounded_Rectangle1.png')}
      style={styles.background}>
      <Text style={styles.title}>{props.title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  background: {
    width: width * 0.4,
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default rectangle;
