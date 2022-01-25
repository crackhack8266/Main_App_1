import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

const HideKeyboard = ({showState, setShowState, children}) => {
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
