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

const capitalize_FirstLetterOfWord = pickerText => {
  return pickerText.charAt(0).toUpperCase() + pickerText.slice(1);
};
const renderSelectView = (showState, setShowState, selectedItem) => {
  const pickerText = selectedItem.value || Constants.DROPDOWN_TEXT;

  return (
    <TouchableOpacity
      onPress={() => {
        update_Show_State(showState, setShowState);
      }}>
      <View style={styles.searchView}>
        <Text>
          {capitalize_FirstLetterOfWord(pickerText)}
          {/*isMultiple
            ? capitalize_FirstLetterOfWord(renderTags(selectedItem))
          : capitalize_FirstLetterOfWord(pickerText)*/}
        </Text>
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

const removeEntry = (id, multiple_Selected_Item, setMultiple_Selected_Item) => {
  const multiple_Selected_Item1 = multiple_Selected_Item.filter(
    item => item.id !== id,
  );
  setMultiple_Selected_Item(multiple_Selected_Item1);
};

const update_isSelected_State = (
  selectedItem,
  setIsSelected,
  id,
  setSelectedItem,
) => {
  if (selectedItem.id == id) {
    setIsSelected(true);
    setSelectedItem({});
  }
};
/*
if (selectedItem) {
  setIsSelected(true);
  setSelectedItem({});
}
*/
const update_Selected_Item = (setSelectedItem, id, value) => {
  setSelectedItem({id: id, value: value});
};

const renderTags = selectedItem => {
  if (selectedItem.id != null)
    return (
      <View
        style={{alignSelf: 'flex-start', backgroundColor: 'grey', padding: 12}}>
        <Text style={{color: 'red'}}>{selectedItem.value}</Text>
      </View>
    );
  return Constants.DROPDOWN_TEXT;
};

const update_MultiSelected = (
  setMultiple_Selected_Item,
  id,
  multiple_Selected_Item,
) => {
  setMultiple_Selected_Item([...multiple_Selected_Item, id]);
  console.log(multiple_Selected_Item);
};

const renderDropdown = (
  isSelected,
  setIsSelected,
  selectedItem,
  setSelectedItem,
  isMultiple,
  setIsMultiple,
  multiple_Selected_Item,
  setMultiple_Selected_Item,
) => {
  return (
    <View style={styles.dropdownView}>
      <FlatList
        data={Constants.NUTRITIONAL_VALUES_DROP_DOWN}
        keyExtractor={item => {
          return item.id;
        }}
        extraData={selectedItem}
        renderItem={({item}) => {
          const id = item.id;
          const value = item.value;
          return (
            <View style={styles.dropdownItem}>
              <TouchableOpacity
                onPress={() => {
                  // if (isMultiple) {
                  // update_MultiSelected(
                  // setMultiple_Selected_Item,
                  //id,
                  //</View>multiple_Selected_Item,
                  //);
                  //} else {
                  update_Selected_Item(setSelectedItem, id, value);
                  update_isSelected_State(
                    selectedItem,
                    setIsSelected,
                    id,
                    setSelectedItem,
                  );
                }} //}
              >
                {selectedItem.id == id ? (
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

const renderMultiSelect = (multiple_Selected_Item, id) => {};

const CustomPicker = () => {
  const [showState, setShowState] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [isMultiple, setIsMultiple] = useState(false);
  const [multiple_Selected_Item, setMultiple_Selected_Item] = useState([]);
  return (
    <View>
      {renderSelectView(
        showState,
        setShowState,
        selectedItem,
        isMultiple,
        setIsMultiple,
        multiple_Selected_Item,
        setMultiple_Selected_Item,
      )}
      {showState
        ? renderDropdown(
            isSelected,
            setIsSelected,
            selectedItem,
            setSelectedItem,
            isMultiple,
            setIsMultiple,
            multiple_Selected_Item,
            setMultiple_Selected_Item,
          )
        : null}
    </View>
  );
};

export default CustomPicker;
