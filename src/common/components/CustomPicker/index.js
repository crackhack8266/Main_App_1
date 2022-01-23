import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Constants from 'constants/';
import styles from './styles';
const capitalize_FirstLetterOfWord = pickerText => {
  return pickerText.charAt(0).toUpperCase() + pickerText.slice(1);
};

const renderSelectView = (
  showState,
  setShowState,
  selectedItem,
  isMultiple,
  multipleSelectedItem,
  setMultipleSelectedItem,
  item,
) => {
  const pickerText = selectedItem.value || Constants.DROPDOWN_TEXT;

  return (
    // <TouchableOpacity
    //   onPress={() => {
    //     update_Show_State(showState, setShowState);
    //   }}>

    <View style={styles.searchView}>
      <View style={{flexDirection: 'row'}}>
        {isMultiple ? (
          renderTags(
            multipleSelectedItem,
            setMultipleSelectedItem,
            showState,
            setShowState,
            item,
          )
        ) : (
          <Text onPress={() => update_Show_State(showState, setShowState)}>
            {' '}
            {capitalize_FirstLetterOfWord(pickerText)}
          </Text>
        )}
      </View>
      <View>
        {showState ? (
          <Image
            source={require('images/right.png')}
            style={[styles.arrowIcon, {transform: [{rotate: '90deg'}]}]}
          />
        ) : (
          <Image
            source={require('images/right.png')}
            style={styles.arrowIcon}
          />
        )}
      </View>
    </View>
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
const renderFilterList = (
  id,
  value,
  multipleSelectedItem,
  setMultipleSelectedItem,
) => {
  if (multipleSelectedItem.some(itemId => itemId.id == id)) {
    const newListItem = multipleSelectedItem.filter(item => item.id !== id);
    return setMultipleSelectedItem(newListItem);
  }
  setMultipleSelectedItem([...multipleSelectedItem, {id: id, value: value}]);
};
const update_Selected_Item = (
  setSelectedItem,
  id,
  value,
  isMultiple,
  multipleSelectedItem,
  setMultipleSelectedItem,
) => {
  if (isMultiple) {
    renderFilterList(id, value, multipleSelectedItem, setMultipleSelectedItem);
  }

  setSelectedItem({id: id, value: value});
};

const getSelected = (id, multipleSelectedItem) => {
  return multipleSelectedItem.some(item => item.id == id);
};

const selectedItemText = item => {
  return <Text style={{backgroundColor: 'red'}}>{item.label}</Text>;
};

const renderDropdown = (
  isSelected,
  setIsSelected,
  selectedItem,
  setSelectedItem,
  isMultiple,
  setIsMultiple,
  multipleSelectedItem,
  setMultipleSelectedItem,
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
                  update_Selected_Item(
                    setSelectedItem,
                    id,
                    value,
                    isMultiple,
                    multipleSelectedItem,
                    setMultipleSelectedItem,
                  );
                  update_isSelected_State(
                    selectedItem,
                    setIsSelected,
                    id,
                    setSelectedItem,
                  );
                }}>
                {isMultiple ? (
                  getSelected(id, multipleSelectedItem) ? (
                    selectedItemText(item)
                  ) : (
                    <Text>{item.label}</Text>
                  )
                ) : selectedItem.id == id ? (
                  selectedItemText(item)
                ) : (
                  <Text>{item.label}</Text>
                )}

                <View style={styles.divider}></View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const renderDefaultPickerText_Multiple = (showState, setShowState) => {
  return (
    <Text
      onPress={() => {
        update_Show_State(showState, setShowState);
      }}>
      Select Multiple Nutrients
    </Text>
  );
};

const renderTags = (
  multipleSelectedItem,
  setMultipleSelectedItem,
  showState,
  setShowState,
) => {
  return multipleSelectedItem.length > 0 ? (
    <FlatList
      data={multipleSelectedItem}
      keyExtractor={item => {
        return item.id;
      }}
      horizontal={true}
      extraData={true}
      renderItem={({item}) => {
        return (
          <View style={styles.tagsView}>
            <Text style={styles.tagsText}>{item.value}</Text>
            <TouchableOpacity
              onPress={() => {
                renderFilterList(
                  item.id,
                  item.value,
                  multipleSelectedItem,
                  setMultipleSelectedItem,
                );
              }}>
              <Image
                source={require('images/close.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          </View>
        );
      }}
    />
  ) : (
    renderDefaultPickerText_Multiple(showState, setShowState)
  );
};

const CustomPicker = () => {
  const [showState, setShowState] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [isMultiple, setIsMultiple] = useState(true);
  const [multipleSelectedItem, setMultipleSelectedItem] = useState([]);

  return (
    <View>
      {renderSelectView(
        showState,
        setShowState,
        selectedItem,
        isMultiple,
        multipleSelectedItem,
        setMultipleSelectedItem,
      )}
      {showState
        ? renderDropdown(
            isSelected,
            setIsSelected,
            selectedItem,
            setSelectedItem,
            isMultiple,
            setIsMultiple,
            multipleSelectedItem,
            setMultipleSelectedItem,
          )
        : null}
    </View>
  );
};

export default CustomPicker;
