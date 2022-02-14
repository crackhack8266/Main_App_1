import React from 'react';
import {View, Modal} from 'react-native';
import styles from './styles';
import Constants from '../../constants';
import ModalFooter from './ModalFooter';
import ModalForm from './ModalForm';
import ModalHeader from './ModalHeader';

const FilterModal = ({
  showState,
  setState,
  multiSliderValue,
  setMultiSliderValue,
  checked,
  setChecked,
  miles,
  setMiles,
}) => {
  const multiSliderValuesChange = values => setMultiSliderValue(values);

  return (
    <Modal transparent={true} visible={showState} animationType="fade">
      <View style={styles.outerModalView}>
        <View style={styles.innerModalView}>
          <ModalHeader title={Constants.FILTERTITLE} />
          <View style={styles.horizontalDivider}></View>
          <ModalForm
            setState={setState}
            multiSliderValue={multiSliderValue}
            multiSliderValuesChange={multiSliderValuesChange}
            checked={checked}
            setChecked={setChecked}
            miles={miles}
            setMiles={setMiles}
          />
          <ModalFooter setState={setState} />
        </View>
      </View>
    </Modal>
  );
};
export default FilterModal;
