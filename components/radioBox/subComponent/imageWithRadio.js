import React from 'react';
import {Text, View, Image} from 'react-native';
import Radio from '../../radio/radio';
const sub = props => (
  <View
    style={{
      justifyContent: 'center',
      flex: 1,
    }}>
    <View style={{width: '20%', height: '30%'}}>
      <Image
        source={props.ImageSource}
        style={{flex: 1, resizeMode: 'contain'}}
      />
    </View>
    <Radio selected={props.selected} radioText={props.radioText} />
  </View>
);

export default sub;
