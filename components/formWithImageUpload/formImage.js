import React from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import str from '../../language/localize';
import Input from './input';

var {width, height} = Dimensions.get('window');

const formImage = props => (
  <View style={styles.main}>
    <View style={styles.form}>
      <View style={{flex: 1}}>
        <Text style={{color: '#6082c4', fontWeight: 'bold'}}>
          {str.packageDetails}
        </Text>
        <Input placeholder={str.whatIsTheContent} />
        <Input placeholder={str.notes} />
      </View>
    </View>
    <View style={styles.imageBox}>
      <View style={{width: '30%', height: '30%'}}>
        <Image
          style={{flex: 1, width: null, height: null, resizeMode: 'contain'}}
          source={require('../../assets/icons/camera.png')}
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  main: {
    height: height * 0.15,
    flexDirection: 'row',
  },
  form: {
    flex: 3,
    //justifyContent: '',
    marginLeft: (width * 0.1) / 2,
    marginRight: (width * 0.1) / 2,
    flexDirection: 'row-reverse',
  },
  imageBox: {
    flex: 1,
    borderColor: '#4B73BC',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default formImage;
