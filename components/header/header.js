import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

var {width, height} = Dimensions.get('window');

const header = props => {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.adjustmentContainer}>
        <TouchableOpacity
          onPress={props.backArrow}
          style={{justifyContent: 'center', flex: 1}}>
          <Image source={require('../../assets/icons/arrow-left.png')} />
        </TouchableOpacity>
        <View style={styles.rightSide}>
          <View>
            <Image source={props.titleImageURL} style={styles.images} />
          </View>
          <TouchableOpacity onPress={props.menu}>
            <Image
              style={{
                width: width * 0.2,
                resizeMode: 'contain',
              }}
              source={require('../../assets/icons/menu.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerMainContainer: {
    backgroundColor: '#3A66B7',
    height: height / 10,
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  adjustmentContainer: {
    width: '90%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightSide: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  images: {
    width: width * 0.3,
    resizeMode: 'contain',
  },
});

export default header;
