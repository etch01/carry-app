import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const rectangle = props => (
  <View style={styles.container}>
    <TouchableOpacity onPress={props.rightOnPress}>
      <Image source={require('../../assets/icons/Arrowcopy.png')} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.background} onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.leftOnPress}>
      <Image source={require('../../assets/icons/Arrowcopy2.png')} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  background: {
    width: '45%',
    height: '60%',
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
