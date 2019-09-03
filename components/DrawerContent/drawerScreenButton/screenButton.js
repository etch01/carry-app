import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

var {width, height} = Dimensions.get('window');

const drawerButton = props => (
  <TouchableOpacity style={styles.container}>
    <Text style={styles.text}>{props.name}</Text>
    <Image source={props.src} />
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: (height * 0.1) / 4,
  },
  text: {
    color: '#ffffff',
    marginRight: (height * 0.1) / 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default drawerButton;
