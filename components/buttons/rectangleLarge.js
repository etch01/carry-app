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
  <TouchableOpacity style={styles.background} onPress={props.onPress}>
    <Text style={styles.title}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  background: {
    width: '45%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AF7420',
    borderRadius: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default rectangle;
