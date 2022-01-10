import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import Constants from '../../../constants';

const ModalFooter = setState => {
  return (
    <TouchableOpacity
      onPress={() => {
        setState(false);
      }}>
      <View style={styles.applyFilterView}>
        <Text style={styles.buttonTextForFilter}>
          {Constants.APPLYFILTER.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ModalFooter;
