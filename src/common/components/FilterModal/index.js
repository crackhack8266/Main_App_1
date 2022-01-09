import React from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import styles from './styles';
import Constants from '../../../common/constants';
import DropDownPicker from 'react-native-dropdown-picker';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {CustomButton} from '../Button';

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
  return (
    <Modal transparent={true} visible={showState}>
      <View style={styles.outerModalView}>
        <View style={styles.innerModalView}>
          <View style={styles.header}>
            <View style={styles.headerDivider}></View>
            <Text style={styles.filterByText}>Filter By</Text>
          </View>
          <View style={styles.horizontalDivider}></View>

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

            <View style={styles.fromToPrice}>
              <View style={styles.fromStyle}>
                <Text style={[styles.fromToText, {color: '#a1a1b4'}]}>
                  From :
                </Text>
                <Text
                  style={[
                    styles.fromToText,
                    {color: '#121229', marginLeft: 7.7},
                  ]}>
                  $5
                </Text>
              </View>
              <View style={styles.fromStyle}>
                <Text style={[styles.fromToText, {color: '#a1a1b4'}]}>
                  To :
                </Text>
                <Text
                  style={[
                    styles.fromToText,
                    {color: '#121229', marginLeft: 7.7},
                  ]}>
                  $40
                </Text>
              </View>
            </View>
            <Text style={[styles.fieldTitle, {marginTop: 20.4}]}>Pickup</Text>

            <Text style={[styles.fieldTitle, {marginTop: 55}]}>Status</Text>

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
            <View style={styles.inputMilesView}>
              <TextInput
                onChangeText={setMiles}
                value={miles}
                style={{width: 277}}
              />
              <Text style={styles.miles}>Miles</Text>
            </View>

            <CustomButton buttitle={Constants.APPLYFILTER} />
          </View>
          {/*<Text style={{fontSize: 30}}>Modal Text</Text>
          <Button
            title="Hide Modal"
            onPress={() => {
              setState(false);
            }}
        /> */}
        </View>
      </View>
    </Modal>
  );
};
export default FilterModal;
