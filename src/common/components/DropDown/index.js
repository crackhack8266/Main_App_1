import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';

const DropDown = ({
  open,
  onOpen,
  value,
  items,
  setOpen,
  setValue,
  style,
  placeholder,
  dropDownContainerStyle,
  dropDownDirection,
  iconContainerStyle,
  textStyle,
  multiple,
  min,
  max,
  badgeDotColors,
}) => {
  DropDownPicker.setMode('BADGE');
  return (
    <>
      <DropDownPicker
        open={open}
        onOpen={onOpen}
        value={value}
        items={items}
        iconContainerStyle={iconContainerStyle || null}
        textStyle={textStyle || null}
        setOpen={setOpen}
        setValue={setValue}
        style={[style, styles.dropdownStyle]}
        placeholder={placeholder}
        dropDownContainerStyle={[
          dropDownContainerStyle,
          styles.dropdownContainerStyle,
        ]}
        dropDownDirection={dropDownDirection || 'BOTTOM'}
        //for multiple picker
        multiple={multiple || false}
        min={min || 0}
        max={max || 2}
        badgeDotColors={['red', 'blue', 'orange']}
      />
    </>
  );
};

export default DropDown;
