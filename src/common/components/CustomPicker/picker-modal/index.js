import React from 'react';
import {View, Modal, Text} from 'react-native';
import styles from './styles';
const PickerModal = ({showState, setShowState}) => {
  return (
    <Modal transparent={true} visible={showState} animationType="fade">
      <View style={styles.innerModalView}></View>
    </Modal>
  );
};

export default PickerModal;
