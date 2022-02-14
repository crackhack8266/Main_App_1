import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

const HideKeyboard = ({setShowDropdown, children}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setShowDropdown(false);
      }}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default HideKeyboard;
