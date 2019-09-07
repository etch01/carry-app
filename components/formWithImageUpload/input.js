import React from 'react';
import {Text, View, TextInput} from 'react-native';
import str from '../../language/localize';

const input = props => (
  <View style={{flex: 1}}>
    <TextInput
      style={{borderBottomColor: '#C4C4C4', borderBottomWidth: 1}}
      placeholder={props.placeholder}
      placeholderTextColor="#C4C4C4"
    />
  </View>
);

export default input;
