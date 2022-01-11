import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {RadioButton} from 'react-native-paper';

const RadioButtonComponent = ({checked, setChecked}) => {
  return (
    <View style={styles.radioButtonView}>
      <RadioButton
        value="first"
        color="#ff0e89"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
      />
      <View style={styles.yesNoText}>
        {checked === 'first' ? (
          <Text style={styles.radioCheckedLabel}>Yes</Text>
        ) : (
          <Text style={styles.radioUncheckedLabel}>Yes</Text>
        )}
      </View>
      <RadioButton
        value="second"
        color="#ff0e89"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
      <View style={styles.yesNoText}>
        {checked === 'second' ? (
          <Text style={styles.radioCheckedLabel}>No</Text>
        ) : (
          <Text style={styles.radioUncheckedLabel}>No</Text>
        )}
      </View>
    </View>
  );
};

export default RadioButtonComponent;
