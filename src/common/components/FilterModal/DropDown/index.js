import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

const DropDown = (open, value, setOpen, setValue) => {
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
  />;
};

export default DropDown;
