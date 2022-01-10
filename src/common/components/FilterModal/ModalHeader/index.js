import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

const ModalHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerDivider}></View>
      <Text style={styles.filterByText}>Filter By</Text>
    </View>
  );
};

export default ModalHeader;
