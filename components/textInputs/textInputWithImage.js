import React from 'react';
import {TextInput, View, StyleSheet, Dimensions, Image} from 'react-native';

var {width, height} = Dimensions.get('window');

const InputImage = props => (
  <View style={styles.container}>
    <Image source={props.icon} style={{marginRight: (height * 1) / 100}} />
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      placeholderTextColor="#AFAFAF"
      onChangeText={props.onchange}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '80%',
    borderColor: '#6486C6',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    textAlign: 'right',
    fontSize: 20,
    marginRight: (height * 1) / 100,
  },
});

export default InputImage;
