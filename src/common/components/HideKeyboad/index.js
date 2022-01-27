import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

const HideKeyboard = ({setShowState, children}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setShowState(false);
      }}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default HideKeyboard;
