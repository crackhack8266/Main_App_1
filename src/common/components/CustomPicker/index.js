import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
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
) => {
  const pickerText =
    (!isMultiple && selectedItem.value) || Constants.DROPDOWN_TEXT;

  return (
    <View style={styles.searchView}>
      {renderSelectedItem_Text_View(
        isMultiple,
        multipleSelectedItem,
        setMultipleSelectedItem,
        showState,
        setShowState,
        pickerText,
      )}
      {renderIcon(showState)}
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
  selectedItem,
  setSelectedItem,
  id,
  value,
  isMultiple,
  multipleSelectedItem,
  setMultipleSelectedItem,
) => {
  if (isMultiple) {
    renderFilterList(id, value, multipleSelectedItem, setMultipleSelectedItem);
  } else if (selectedItem.id == id) {
    setSelectedItem({});
  } else {
    setSelectedItem({id: id, value: value});
  }
};

const getSelected = (id, multipleSelectedItem) => {
  return multipleSelectedItem.some(item => item.id == id);
};

const selectedItemText = item => {
  return <Text style={{backgroundColor: 'red'}}>{item.label}</Text>;
};

const renderDropdown = (
  selectedItem,
  setSelectedItem,
  isMultiple,
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
                    selectedItem,
                    setSelectedItem,
                    id,
                    value,
                    isMultiple,
                    multipleSelectedItem,
                    setMultipleSelectedItem,
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
      style={{width: 10}}
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

const renderSelectedItem_Text_View = (
  isMultiple,
  multipleSelectedItem,
  setMultipleSelectedItem,
  showState,
  setShowState,
  pickerText,
) => {
  return (
    <View style={styles.selectedItem_Text_View}>
      {isMultiple ? (
        renderTags(
          multipleSelectedItem,
          setMultipleSelectedItem,
          showState,
          setShowState,
        )
      ) : (
        <Text onPress={() => update_Show_State(showState, setShowState)}>
          {capitalize_FirstLetterOfWord(pickerText)}
        </Text>
      )}
    </View>
  );
};

const renderIcon = showState => {
  return (
    <View>
      {showState ? (
        <Image
          source={require('images/right.png')}
          style={[styles.arrowIcon, {transform: [{rotate: '90deg'}]}]}
        />
      ) : (
        <Image source={require('images/right.png')} style={styles.arrowIcon} />
      )}
    </View>
  );
};

const CustomPicker = ({
  showState,
  setShowState,
  selectedItem,
  setSelectedItem,
  isMultiple,
  setIsMultiple,
  multipleSelectedItem,
  setMultipleSelectedItem,
}) => {
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
            selectedItem,
            setSelectedItem,
            isMultiple,
            multipleSelectedItem,
            setMultipleSelectedItem,
          )
        : null}
    </View>
  );
};

export default CustomPicker;
