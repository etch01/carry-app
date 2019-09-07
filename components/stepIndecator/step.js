import React from 'react';
import {Text, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const Step = props => {
  var labels = [...props.labels];
  return (
    <View>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={props.currentPosition}
        labels={labels}
        stepCount={props.stepCount}
      />
    </View>
  );
};

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#3A66B7',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#3A66B7',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#3A66B7',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#3A66B7',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#3A66B7',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#ffffff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#ffffff',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#1A1A1A',
};

export default Step;
