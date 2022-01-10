import React, {useState} from 'react';
import {View, Modal, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import Constants from '../../../common/constants';
import DropDownPicker from 'react-native-dropdown-picker';
import {RadioButton} from 'react-native-paper';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const renderHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerDivider}></View>
      <Text style={styles.filterByText}>Filter By</Text>
    </View>
  );
};

const renderApplyFilterButton = setState => {
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

const renderMultiSlider = (multiSliderValue, multiSliderValuesChange) => {
  return (
    <MultiSlider
      values={[multiSliderValue[0], multiSliderValue[1]]}
      sliderLength={347}
      onValuesChange={multiSliderValuesChange}
      min={0}
      max={10}
      step={1}
      allowOverlap
      snapped
    />
  );
};

const renderFromTo = () => {
  return (
    <View style={styles.fromToPrice}>
      <View style={styles.fromStyle}>
        <Text style={[styles.fromToText, {color: '#a1a1b4'}]}>From :</Text>
        <Text style={[styles.fromToText, {color: '#121229', marginLeft: 7.7}]}>
          $5
        </Text>
      </View>
      <View style={styles.fromStyle}>
        <Text style={[styles.fromToText, {color: '#a1a1b4'}]}>To :</Text>
        <Text style={[styles.fromToText, {color: '#121229', marginLeft: 7.7}]}>
          $40
        </Text>
      </View>
    </View>
  );
};

const renderMilesInputField = (setMiles, miles) => {
  return (
    <View style={styles.inputMilesView}>
      <TextInput onChangeText={setMiles} value={miles} style={{width: 277}} />
      <Text style={styles.miles}>Miles</Text>
    </View>
  );
};
const renderRadioButtons = (checked, setChecked) => {
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

const renderForm = (
  setState,
  open,
  value,
  setOpen,
  setValue,
  multiSliderValue,
  multiSliderValuesChange,
  miles,
  setMiles,
  checked,
  setChecked,
) => {
  return (
    <View style={styles.form}>
      <Text style={styles.fieldTitle}>Nutritional Value</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={Constants.DROPDOWN1}
        setOpen={setOpen}
        setValue={setValue}
        style={styles.dropdownStyle}
        placeholder="High"
        dropDownContainerStyle={{
          backgroundColor: '#dfdfdf',
          marginTop: 15,
        }}
      />
      <Text style={[styles.fieldTitle, {marginTop: 20.4}]}>Price</Text>
      {renderMultiSlider(multiSliderValue, multiSliderValuesChange)}
      {renderFromTo()}
      <Text style={[styles.fieldTitle, {marginTop: 20.4}]}>Pickup</Text>
      {renderRadioButtons(checked, setChecked)}

      <Text style={[styles.fieldTitle, {marginTop: 20}]}>Status</Text>
      <DropDownPicker
        open={open}
        dropDownDirection="BOTTOM"
        value={value}
        items={Constants.DROPDOWN2}
        setOpen={setOpen}
        setValue={setValue}
        style={styles.dropdownStyle}
        dropDownContainerStyle={{
          backgroundColor: '#dfdfdf',
          marginTop: 15,
        }}
      />
      <Text style={[styles.fieldTitle, {marginTop: 19.4}]}>Distance</Text>
      {renderMilesInputField(setMiles, miles)}
      {renderApplyFilterButton(setState)}
    </View>
  );
};
const FilterModal = ({
  showState,
  setState,
  open,
  value,
  setOpen,
  setValue,
  multiSliderValue,
  setMultiSliderValue,
  miles,
  setMiles,
}) => {
  const multiSliderValuesChange = values => setMultiSliderValue(values);
  const [checked, setChecked] = useState('first');
  return (
    <Modal transparent={true} visible={showState} animationType="fade">
      <View style={styles.outerModalView}>
        <View style={styles.innerModalView}>
          {renderHeader()}
          <View style={styles.horizontalDivider}></View>

          {renderForm(
            setState,
            open,
            value,
            setOpen,
            setValue,
            multiSliderValue,
            multiSliderValuesChange,
            miles,
            setMiles,
            checked,
            setChecked,
          )}
        </View>
      </View>
    </Modal>
  );
};
export default FilterModal;
