import React, {useState} from 'react';
// import CustomPicker from 'components/CustomPicker';
import CustomPicker2 from 'components/CustomPicker2';
import Constants from 'constants/';
import {View, Image} from 'react-native';
import HideKeyboard from 'components/HideKeyboad';
import styles from './styles';

const PickerScreen = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [isMultiple, setIsMultiple] = useState(true);
  const [multipleSelectedItem, setMultipleSelectedItem] = useState([]);
  const [data, setData] = useState(Constants.NUTRITIONAL_VALUES_DROP_DOWN);
  const [isInputEnabled, setIsInputEnabled] = useState(true);

  const capitalize_FirstLetterOfWord = pickerText => {
    return pickerText.charAt(0).toUpperCase() + pickerText.slice(1);
  };

  const pickerText = 'hello shail select multiple item';
  return (
    <HideKeyboard setShowDropdown={setShowDropdown}>
      <View style={{flex: 1}}>
        <CustomPicker2
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          data={data}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          // isMultiple={isMultiple}
          // multipleSelectedItem={multipleSelectedItem}
          // setMultipleSelectedItem={setMultipleSelectedItem}
          // isInputEnabled={isInputEnabled}
          // tagViewStyle={styles.tagView}
          // tagIcon={<Image source={require('images/envelope.png')} />}
          // tagIconStyle={styles.tagIcon}
          // tagTextStyle={styles.tagText}
          // selectedItemStyle={styles.selectedItemView}
          placeholderText={capitalize_FirstLetterOfWord(
            'pick single abc defdad ',
          )}
          defaultSelectText={pickerText}
        />
      </View>
    </HideKeyboard>
  );
};

export default PickerScreen;
