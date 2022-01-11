import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  style,
  placeholder,
  dropDownContainerStyle,
  dropDownDirection,
}) => {
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      style={style}
      placeholder={placeholder}
      dropDownContainerStyle={dropDownContainerStyle}
      dropDownDirection={dropDownDirection}
    />
  );
};

export default DropDown;
