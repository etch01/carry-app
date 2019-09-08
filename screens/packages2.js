import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../components/header/header';
import str from '../language/localize';
import Steps from '../components/stepIndecator/step';
import ImageForm from '../components/formWithImageUpload/formImage.js';
import Button from '../components/buttons/rectagleWithArrows';
import Box from '../components/radioBox/radioBox';

var {width, height} = Dimensions.get('window');

export default class packages2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          title={str.package}
          menu={() => this.props.navigation.toggleDrawer()}
        />
        <ScrollView style={styles.mainContainer}>
          <Steps
            labels={[str.package, str.receipt, str.summary]}
            stepCount={3}
            currentPosition={0}
          />
          <View style={styles.forms}>
            <ImageForm />
            <Box title="التعامل مع الطرد" />
          </View>
          <View
            style={{
              flex: 1,
              height: height / 4,
              justifyContent: 'center',
            }}>
            <Button title={str.package} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: (height * 0.1) / 5,
  },
  forms: {
    flex: 1,
    marginLeft: (width * 0.1) / 2,
    marginRight: (width * 0.1) / 2,
    marginTop: (width * 0.1) / 3,
  },
});
