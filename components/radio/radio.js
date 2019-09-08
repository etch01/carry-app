import React from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';

var {width, height} = Dimensions.get('window');
function RadioButton(props) {
  return (
    <View style={styles.radioGroup}>
      <View
        style={[
          {
            height: 16,
            width: 16,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#A2BDF2',
            alignItems: 'center',
            justifyContent: 'center',
          },
          props.style,
        ]}>
        {props.selected ? (
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#80E020',
            }}
          />
        ) : null}
      </View>
      <Text
        adjustsFontSizeToFit={Boolean}
        style={{color: props.selected ? '#ACC5F3' : '#C8C8C8'}}>
        {props.radioText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  radioGroup: {
    width: '20%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: (height * 0.1) / 10,
    marginLeft: (width * 0.1) / 2,
    marginRight: (width * 0.1) / 2,
  },
});

export default RadioButton;
