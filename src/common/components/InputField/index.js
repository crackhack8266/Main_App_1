import React from 'react';
import {View, Text, TextInput} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';
import Constants from '../../constants';

export const Input = ({set, titletext}) => {
  const convertedTitleText =
    titletext.charAt(0).toUpperCase() + titletext.slice(1);
  const titleText = titletext;

  const renderPasswordInputField = (titletext, convertedTitleText) => {
    if (titletext == Constants.PASSWORDFIELDIDENTIFICATIONSTRING) {
      return (
        <View style={styles.inputFieldView}>
          <TextInput
            onChangeText={set}
            placeholder={`Enter ${convertedTitleText}`}
            style={styles.inputPassField}
            secureTextEntry={true}
          />
          <SimpleLineIcons
            name="eye"
            size={14}
            color="black"
            style={styles.icon}
          />
        </View>
      );
    }
  };
  const renderSimpleInputField = (titletext, convertedTitleText) => {
    if (titletext != Constants.PASSWORDFIELDIDENTIFICATIONSTRING) {
      return (
        <TextInput
          onChangeText={set}
          placeholder={`Enter ${convertedTitleText}`}
          style={styles.inputEmailField}
        />
      );
    }
  };

  return (
    <View>
      <Text style={styles.titleText}>{convertedTitleText}</Text>
      {renderPasswordInputField(titletext, convertedTitleText)}
      {renderSimpleInputField(titleText, convertedTitleText)}
    </View>
  );
};

{
  /*
  const componentFields = [
  {
    type: 'text',
    errorText: '',
    placeHolder: '',
  },
  {},
];

const renderFormFields = componentFields =>
  componentFields.map(field => {
    <View style={styles.inputFieldView}>
      <TextInput
        onChangeText={set}
        placeholder={`Enter ${field.placeholder}`}
        style={styles.inputPassField}
        secureTextEntry={true}
      />
      <SimpleLineIcons name="eye" size={14} color="black" style={styles.icon} />
    </View>;
  });

*/
}
