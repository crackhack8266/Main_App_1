import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import FilterModal from '../../../common/components/FilterModal';

const ModalScreen = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [miles, setMiles] = useState('9');
  const [multiSliderValue, setMultiSliderValue] = useState([3, 7]);

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 50}}>Normal Text</Text>
      <Button title="Show Modal" onPress={() => setShow(true)} />
      <FilterModal
        showState={show}
        setState={setShow}
        open={open}
        value={value}
        setOpen={setOpen}
        setValue={setValue}
        miles={miles}
        setMiles={setMiles}
        multiSliderValue={multiSliderValue}
        setMultiSliderValue={setMultiSliderValue}
      />
    </View>
  );
};
export default ModalScreen;
