import React, {useState} from 'react';
import CustomPicker from 'components/CustomPicker';
import Constants from 'constants/';
import {View, Image} from 'react-native';
import HideKeyboard from 'components/HideKeyboad';
import styles from './styles';

const PickerScreen = () => {
  const [showState, setShowState] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [isMultiple, setIsMultiple] = useState(true);
  const [multipleSelectedItem, setMultipleSelectedItem] = useState([]);
  const [data, setData] = useState(Constants.NUTRITIONAL_VALUES_DROP_DOWN);
  const [isInputEnabled, setIsInputEnabled] = useState(true);
  return (
    <HideKeyboard setShowState={setShowState}>
      <View style={{flex: 1}}>
        <CustomPicker
          showState={showState}
          setShowState={setShowState}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          // isMultiple={isMultiple}
          // multipleSelectedItem={multipleSelectedItem}
          // setMultipleSelectedItem={setMultipleSelectedItem}
          data={data}
          // isInputEnabled={isInputEnabled}
          //tagViewStyle={styles.tagView}
          //tagIcon={<Image source={require('images/envelope.png')} />}
          //tagIconStyle={styles.tagIcon}
          //tagTextStyle={styles.tagText}
          //selectedItemStyle={styles.selectedItemView}
          //placeholderText="Hello Shail Select an Item"
        />
      </View>
    </HideKeyboard>
  );
};

export default PickerScreen;
