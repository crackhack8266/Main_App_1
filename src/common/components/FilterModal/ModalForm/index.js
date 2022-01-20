import React, {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
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
  multiSliderValue,
  multiSliderValuesChange,
  checked,
  setChecked,
  miles,
  setMiles,
}) => {
  const [nutrientsOpen, setNutrientsOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [nutrientsValue, setNutrientsValue] = useState([]);
  const [statusValue, setStatusValue] = useState([]);

  const onNutrientsOpen = () => {
    setStatusOpen(false);
  };

  const onStatusOpen = () => {
    setNutrientsOpen(false);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.fieldTitle}>Nutritional Value</Text>
      <DropDown
        open={nutrientsOpen}
        onOpen={onNutrientsOpen}
        value={nutrientsValue}
        items={Constants.NUTRITIONAL_VALUES_DROP_DOWN}
        setOpen={setNutrientsOpen}
        setValue={setNutrientsValue}
        placeholder="Select Nutrients"
        multiple={true}
      />
      <Text style={[styles.fieldTitle, {marginTop: 20.4}]}>Price</Text>
      {renderMultiSlider(multiSliderValue, multiSliderValuesChange)}
      {renderFromTo()}
      <Text style={[styles.fieldTitle, {marginTop: 20.4}]}>Pickup</Text>
      <RadioButtonComponent checked={checked} setChecked={setChecked} />

      <Text style={[styles.fieldTitle, {marginTop: 20}]}>Status</Text>
      <DropDown
        open={statusOpen}
        onOpen={onStatusOpen}
        value={statusValue}
        items={Constants.STATUS_DROP_DOWN}
        setOpen={setStatusOpen}
        setValue={setStatusValue}
        placeholder="Select Status"

        //main thing starts

        // iconContainerStyle={Constants.DROPDOWN_ICON_CONTAINER_STYLE}
        //textStyle={Constants.TEXT_STYLE}

        //main thing ends
      />

      {renderMilesInputField(setMiles, miles)}
    </View>
  );
};

export default ModalForm;
