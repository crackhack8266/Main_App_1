import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Constants from '../../../constants';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import DropDown from '../../DropDown';
import RadioButtonComponent from '../../RadioButton';
import {Input} from '../../InputField';

const renderMultiSlider = (multiSliderValue, multiSliderValuesChange) => {
  return (
    <MultiSlider
      values={[multiSliderValue[0], multiSliderValue[1]]}
      sliderLength={347}
      onValuesChange={multiSliderValuesChange}
      min={0}
      max={10}
      step={0.01}
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
      <Input
        setChangeText={setMiles}
        secureTextEntry={false}
        source={false}
        titletext={Constants.DISTANCETEXT}
        circularField={false}
        value={miles}
        keyboardType="numeric"
        styleprop={{
          borderRadius: 5,
          marginLeft: 0,
          width: 345,
          borderColor: '#ecebf1',
          borderWidth: 1,
        }}
        title_style_prop={{
          marginLeft: 0,
        }}
      />
      <Text style={styles.miles}>Miles</Text>
    </View>
  );
};

const ModalForm = ({
  setState,
  open,
  value,
  setOpen,
  setValue,
  multiSliderValue,
  multiSliderValuesChange,
  checked,
  setChecked,
  miles,
  setMiles,
}) => {
  return (
    <View style={styles.form}>
      <Text style={styles.fieldTitle}>Nutritional Value</Text>
      <DropDown
        open={open}
        value={value}
        items={Constants.NUTRITIONAL_VALUES_DROP_DOWN}
        setOpen={setOpen}
        setValue={setValue}
        style={{
          backgroundColor: '#f9f8f8',
          borderColor: '#ecebf1',
          marginTop: 12.6,
        }}
        placeholder="High"
        dropDownContainerStyle={{
          backgroundColor: '#dfdfdf',
          marginTop: 5,
        }}
        dropDownDirection="BOTTOM"
      />
      <Text style={[styles.fieldTitle, {marginTop: 20.4}]}>Price</Text>
      {renderMultiSlider(multiSliderValue, multiSliderValuesChange)}
      {renderFromTo()}
      <Text style={[styles.fieldTitle, {marginTop: 20.4}]}>Pickup</Text>
      <RadioButtonComponent checked={checked} setChecked={setChecked} />

      <Text style={[styles.fieldTitle, {marginTop: 20}]}>Status</Text>
      <DropDown
        open={open}
        value={value}
        items={Constants.STATUS_DROP_DOWN}
        setOpen={setOpen}
        setValue={setValue}
        style={{
          backgroundColor: '#f9f8f8',
          borderColor: '#ecebf1',
          marginTop: 12.6,
        }}
        placeholder="Medium"
        dropDownContainerStyle={{
          backgroundColor: '#dfdfdf',
          marginTop: 15,
        }}
        dropDownDirection="BOTTOM"
      />

      {renderMilesInputField(setMiles, miles)}
    </View>
  );
};

export default ModalForm;
