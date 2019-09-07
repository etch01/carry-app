import React from 'react';
import {TextInput, View, StyleSheet, Dimensions, Text} from 'react-native';

var {width, height} = Dimensions.get('window');

const InputImage = props => (
  <View
    style={{
      marginLeft: (width * 0.1) / 2,
      marginRight: (width * 0.1) / 2,
      marginTop: (height * 0.1) / 10,
    }}>
    <Text style={{color: '#6082c4', fontWeight: 'bold'}}>{props.title}</Text>
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      placeholderTextColor="#c8c8c8"
      onChangeText={props.onchange}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    textAlign: 'right',
    borderColor: '#c8c8c8',
    borderWidth: 1,
    borderRadius: 10,
    padding: '2%',
    marginTop: (height * 0.1) / 10,
  },
});

export default InputImage;
