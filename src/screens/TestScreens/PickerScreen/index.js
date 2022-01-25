import React, {useState} from 'react';
import CustomPicker from 'components/CustomPicker';
import Constants from 'constants/';
import {View} from 'react-native';
import HideKeyboard from 'components/HideKeyboad';

const PickerScreen = () => {
  const [showState, setShowState] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [isMultiple, setIsMultiple] = useState(false);
  const [multipleSelectedItem, setMultipleSelectedItem] = useState([]);
  const [data, setData] = useState(Constants.NUTRITIONAL_VALUES_DROP_DOWN);
  const [filteredData, setFilteredData] = useState(
    Constants.NUTRITIONAL_VALUES_DROP_DOWN,
  );
  const [state, setState] = useState({});

  return (
    <HideKeyboard showState={showState} setShowState={setShowState}>
      <View style={{flex: 1}}>
        <CustomPicker
          showState={showState}
          setShowState={setShowState}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          isMultiple={isMultiple}
          setIsMultiple={setIsMultiple}
          multipleSelectedItem={multipleSelectedItem}
          setMultipleSelectedItem={setMultipleSelectedItem}
          data={data}
          setData={setData}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          state={state}
          setState={setState}
        />
      </View>
    </HideKeyboard>
  );
};

export default PickerScreen;
