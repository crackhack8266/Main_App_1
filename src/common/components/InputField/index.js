import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from './styles';

export const Input = ({
  setChangeText,
  secureTextEntry,
  source,
  titletext,
  circularField,
  keyboardType,
  value,
  styleprop,
  title_style_prop,
}) => {
  const convertedTitleText =
    titletext.charAt(0).toUpperCase() + titletext.slice(1);

  const renderInputField = (
    setChangeText,
    secureTextEntry,
    source,
    convertedTitleText,
    circularField,
    keyboardType,
    value,
    styleprop,
  ) => {
    return (
      <View style={styles.inputFieldView}>
        <TextInput
          onChangeText={setChangeText}
          placeholder={`Enter ${convertedTitleText}`}
          style={
            circularField ? styles.inputField : [styles.inputField, styleprop]
          }
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          value={value}
        />
        {source == false ? null : (
          <Image
            source={require('../../assets/eye-open2x.png')}
            style={styles.icon}
          />
        )}
      </View>
    );
  };
  return (
    <View>
      <Text style={[styles.titleText, title_style_prop]}>
        {convertedTitleText}
      </Text>
      {renderInputField(
        setChangeText,
        secureTextEntry,
        source,
        convertedTitleText,
        circularField,
        keyboardType,
        value,
        styleprop,
      )}
    </View>
  );
};
