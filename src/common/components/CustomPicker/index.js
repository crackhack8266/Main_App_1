import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import Constants from 'constants/';
import styles from './styles';

const renderSelectView = (showState, setShowState, selectedItem) => {
  const pickerText = selectedItem.value || 'Select A Nutrient';
  return (
    <TouchableOpacity
      onPress={() => {
        update_Show_State(showState, setShowState);
      }}>
      <View style={styles.searchView}>
        <Text>{pickerText}</Text>
        {showState ? (
          <Image
            source={require('images/right.png')}
            style={[styles.searchBarIcon, {transform: [{rotate: '90deg'}]}]}
          />
        ) : (
          <Image
            source={require('images/right.png')}
            style={styles.searchBarIcon}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const update_Show_State = (showState, setShowState) => {
  if (showState) {
    setShowState(false);
  } else {
    setShowState(true);
  }
};

const update_isSelected_State = (
  isSelected,
  setIsSelected,
  setSelectedItem,
) => {
  console.log(isSelected);
  if (isSelected) {
    setSelectedItem({id: null, value: null});
    setIsSelected(false);
  } else {
    setIsSelected(true);
  }
};

const update_Selected_Item = (setSelectedItem, {id, value}) => {
  console.log(id);
  setSelectedItem({id: id, value: value});
};

const renderDropdown = (
  isSelected,
  setIsSelected,
  selectedItem,
  setSelectedItem,
) => {
  return (
    <View style={styles.dropdownView}>
      <FlatList
        data={Constants.NUTRITIONAL_VALUES_DROP_DOWN}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={({item}) => {
          const id = item.id;
          const value = item.value;
          return (
            <View style={styles.dropdownItem}>
              <TouchableOpacity
                onPress={() => {
                  update_Selected_Item(setSelectedItem, {id: id, value: value});
                  update_isSelected_State(
                    isSelected,
                    setIsSelected,
                    setSelectedItem,
                  );
                }}>
                {selectedItem.id == id && isSelected ? (
                  <Text style={{backgroundColor: 'red'}}>{item.label}</Text>
                ) : (
                  <Text>{item.label}</Text>
                )}
                {/*<Text>{item.label}</Text>*/}
                <View style={styles.divider}></View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const CustomPicker = () => {
  const [input, setInput] = useState('Select a Nutrient');
  const [showState, setShowState] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  return (
    <View>
      {renderSelectView(showState, setShowState, selectedItem)}
      {showState
        ? renderDropdown(
            isSelected,
            setIsSelected,
            selectedItem,
            setSelectedItem,
          )
        : null}
    </View>
  );
};

export default CustomPicker;
