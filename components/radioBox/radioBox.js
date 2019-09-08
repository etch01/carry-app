import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
var {width, height} = Dimensions.get('window');
import Sub from './subComponent/imageWithRadio';
import str from '../../language/localize';

const box = props => (
  <View style={styles.mainContainer}>
    <Text style={{color: '#6082c4', fontWeight: 'bold'}}>{props.title}</Text>
    <View style={styles.box}>
      <Sub
        //radioText={str.envelope}
        ImageSource={require('../../assets/icons/box.png')}
        selected={true}
      />
      <Sub
        //radioText={str.breakable}
        ImageSource={require('../../assets/icons/breakable.png')}
        selected={false}
      />
      <Sub
        //radioText={str.cold}
        ImageSource={require('../../assets/icons/cold.png')}
        selected={false}
      />
      <Sub
        //radioText={str.keeper}
        ImageSource={require('../../assets/icons/re.png')}
        selected={false}
      />
      <Sub
        //radioText={str.extraHelp}
        ImageSource={require('../../assets/icons/help.png')}
        selected={false}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: (height * 0.7) / 10,
  },
  box: {
    height: height / 7,
    marginTop: (height * 0.7) / 30,
    borderColor: '#B0C1E2',
    borderWidth: 1,
    borderRadius: height / 7 / 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

export default box;
