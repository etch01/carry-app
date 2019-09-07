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
import TextArea from '../components/textArea/textArea';
import Radio from '../components/radio/radio';
import Input from '../components/textInputs/textInputWithTitle';
import Button from '../components/buttons/rectagleWithArrows';

var {width, height} = Dimensions.get('window');

export default class packages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
    };
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
            <TextArea title={str.notes} placeholder={str.notesHere} />
            <View style={styles.radioGroup}>
              <Text style={{color: '#6082c4', fontWeight: 'bold'}}>
                {str.whatDoYouWant}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Radio selected={true} radioText={str.private} />
                <Radio selected={false} radioText={str.subscribed} />
              </View>
            </View>
            <Input title={str.containerType} placeholder={str.containerType} />
            <View style={styles.blueButtonContainer}>
              <TouchableOpacity style={styles.blueButton}>
                <Text style={{color: '#ffffff'}}>{str.add}</Text>
              </TouchableOpacity>
            </View>
            <Input
              title={str.chooseDestination}
              placeholder={str.chooseDestination}
            />
            <Input title={str.choosePort} placeholder={str.choosePort} />
            <View style={styles.Button}>
              <Button title={str.package} />
            </View>
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
  radioGroup: {
    marginTop: (height * 0.1) / 5,
    marginLeft: (width * 0.1) / 2,
    marginRight: (width * 0.1) / 2,
  },
  blueButtonContainer: {
    flexDirection: 'row-reverse',
    marginLeft: (width * 0.1) / 2,
    marginRight: (width * 0.1) / 2,
  },
  blueButton: {
    backgroundColor: '#3A66B7',
    width: width * 0.1,
    borderRadius: 5,
    height: (height * 0.1) / 3,
    alignItems: 'center',
    marginTop: (height * 0.1) / 10,
  },
  Button: {
    marginTop: (height * 0.1) / 5,
    marginLeft: (width * 0.1) / 2,
    marginRight: (width * 0.1) / 2,
    marginBottom: width * 0.1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
