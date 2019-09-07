import React from 'react';
import {Text, View, TextInput, Dimensions, StyleSheet} from 'react-native';
import str from '../../language/localize';

var {width, height} = Dimensions.get('window');

const textArea = props => (
  <View style={styles.main}>
    <Text style={{color: '#6082c4', fontWeight: 'bold'}}>{props.title}</Text>
    <TextInput
      style={styles.textArea}
      multiline={true}
      numberOfLines={4}
      placeholder={props.placeholder}
      placeholderTextColor="#C4C4C4"
    />
  </View>
);
const styles = StyleSheet.create({
  main: {
    marginTop: (height * 0.1) / 5,
    marginLeft: (width * 0.1) / 2,
    marginRight: (width * 0.1) / 2,
    height: height * 0.17,
  },
  textArea: {
    borderColor: '#4B73BC',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default textArea;
