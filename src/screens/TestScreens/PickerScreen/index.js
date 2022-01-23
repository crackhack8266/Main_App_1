import React, {useState} from 'react';
import CustomPicker from 'components/CustomPicker';

const PickerScreen = () => {
  const [showState, setShowState] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [isMultiple, setIsMultiple] = useState(true);
  const [multipleSelectedItem, setMultipleSelectedItem] = useState([]);

  return (
    <CustomPicker
      showState={showState}
      setShowState={setShowState}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      isMultiple={isMultiple}
      setIsMultiple={setIsMultiple}
      multipleSelectedItem={multipleSelectedItem}
      setMultipleSelectedItem={setMultipleSelectedItem}
    />
  );
};

export default PickerScreen;
