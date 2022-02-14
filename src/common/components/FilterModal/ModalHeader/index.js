import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const ModalHeader = ({title}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerDivider}></View>
      <Text style={styles.filterByText}>{title}</Text>
    </View>
  );
};

export default ModalHeader;
