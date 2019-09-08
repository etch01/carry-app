import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import Buttons from '../components/buttons/rectangleLarge';
import str from '../language/localize';

const sOrT = props => (
  <ImageBackground
    style={styles.background}
    source={require('../assets/background.png')}>
    <View style={styles.buttonsRow}>
      <Buttons
        title={str.transfare}
        onPress={() =>
          props.navigation.navigate('Packages', {screen: 'second'})
        }
      />
      <Buttons
        onPress={
          (() => props.navigation.navigate('BottomNavigator'),
          {screen: 'first'})
        }
        title={str.shipping}
      />
    </View>
  </ImageBackground>
);
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsRow: {
    flex: 1,
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default sOrT;
