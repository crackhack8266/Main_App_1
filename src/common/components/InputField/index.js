import React from 'react';
import {View, Text, TextInput} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';
import Constants from '../../constants';

export const Input = ({set, titletext}) => {
  return (
    <View>
      <Text style={styles.titleText}>{titletext}</Text>
      {titletext == Constants.PASSWORDFIELDIDENTIFICATIONSTRING ? (
        <View style={styles.inputFieldView}>
          <TextInput
            onChangeText={set}
            placeholder={`Enter ${titletext.toUpperCase()}`}
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
      ) : (
        <TextInput
          onChangeText={set}
          placeholder={`Enter ${titletext}`}
          style={styles.inputEmailField}
        />
      )}
    </View>
  );
};
