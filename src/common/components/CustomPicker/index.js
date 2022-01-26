import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  TextInput,
  Keyboard,
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
  isInputEnabled,
  searchQuery,
  setSearchQuery,
  data,
  setData,
  filteredData,
  setFilteredData,
  state,
  setState,
  setSelectedItem,
) => {
  const pickerText =
    (!isMultiple && selectedItem.value) || Constants.DROPDOWN_TEXT;

  return (
    <View style={styles.searchView}>
      {renderSelectionType(
        setSearchQuery,
        setShowState,
        showState,
        data,
        setFilteredData,
        selectedItem,
        isMultiple,
        multipleSelectedItem,
        setMultipleSelectedItem,
        pickerText,
        isInputEnabled,
      )}

      {renderIcon(showState, setShowState)}
    </View>
  );
};

const update_Show_State = (showState, setShowState) => {
  if (!showState) {
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
  setFilteredData,
  data,
  setShowState,
) => {
  if (isMultiple) {
    renderFilterList(id, value, multipleSelectedItem, setMultipleSelectedItem);
  } else if (selectedItem.id == id) {
    setFilteredData(data);
    setSelectedItem({});
  } else {
    setShowState(false);
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
  data,
  setData,
  filteredData,
  setFilteredData,
  setShowState,
  state,
  setState,
) => {
  return (
    <View style={styles.dropdownView}>
      <FlatList
        data={filteredData}
        keyExtractor={item => {
          return item.id;
        }}
        extraData={selectedItem}
        ListEmptyComponent={<Text>No Items Found</Text>}
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
                    setFilteredData,
                    data,
                    setShowState,
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

const renderMultipleSearch = (
  multipleSelectedItem,
  setMultipleSelectedItem,
  showState,
  setShowState,
  isInputEnabled,
  setSearchQuery,
  data,
  setFilteredData,
  selectedItem,
  isMultiple,
) => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {renderTags(
        multipleSelectedItem,
        setMultipleSelectedItem,
        showState,
        setShowState,
        isInputEnabled,
        setSearchQuery,
        data,
        setFilteredData,
        selectedItem,
        isMultiple,
      )}
      {renderInputField(
        setSearchQuery,
        setShowState,
        showState,
        data,
        setFilteredData,
        selectedItem,
        isMultiple,
      )}
    </View>
  );
};

const renderTags = (
  multipleSelectedItem,
  setMultipleSelectedItem,
  showState,
  setShowState,
  isInputEnabled,
  setSearchQuery,
  data,
  setFilteredData,
  selectedItem,
  isMultiple,
) => {
  return multipleSelectedItem.length > 0
    ? multipleSelectedItem.map((id, value) => {
        return (
          <View style={styles.tagsView}>
            <Text style={styles.tagsText}>{value}</Text>
            <TouchableOpacity
              onPress={() => {
                renderFilterList(
                  id,
                  value,
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
      })
    : isMultiple
    ? null
    : renderDefaultPickerText_Multiple(showState, setShowState);
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
        <Text
          onPress={() => update_Show_State(showState, setShowState)}
          style={styles.pickerText}>
          {console.log(pickerText)}
          {capitalize_FirstLetterOfWord(pickerText)}
        </Text>
      )}
    </View>
  );
};

const renderIcon = (showState, setShowState) => {
  return (
    <View style={{marginHorizontal: 10}}>
      {showState ? (
        <TouchableOpacity
          onPress={() => {
            setShowState(false);
            Keyboard.dismiss();
          }}>
          <Image
            source={require('images/right.png')}
            style={[styles.arrowIcon, {transform: [{rotate: '90deg'}]}]}
          />
        </TouchableOpacity>
      ) : (
        <Image source={require('images/right.png')} style={styles.arrowIcon} />
      )}
    </View>
  );
};
const handleSearch = (text, setSearchQuery, data, setFilteredData) => {
  const fromatedQuery = text.toLowerCase();

  const newData = data.filter(item => {
    const itemData = item.value;
    return itemData.indexOf(fromatedQuery) > -1;
  });
  setFilteredData(newData);

  setSearchQuery(fromatedQuery);
};
const renderInputField = (
  setSearchQuery,
  setShowState,
  showState,
  data,
  setFilteredData,
  selectedItem,
  isMultiple,
) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        onChangeText={text => {
          handleSearch(text, setSearchQuery, data, setFilteredData);
        }}
        placeholder={selectedItem.value || 'Select'}
        placeholderTextColor={showState ? null : 'black'}
        onPressIn={() => {
          if (!showState) {
            setShowState(true);
          }
          setFilteredData(data);
        }}
        style={styles.renderInputField}
      />
    </View>
  );
};

const renderSelectionType = (
  setSearchQuery,
  setShowState,
  showState,
  data,
  setFilteredData,
  selectedItem,
  isMultiple,
  multipleSelectedItem,
  setMultipleSelectedItem,
  pickerText,
  isInputEnabled,
) => {
  if (isInputEnabled) {
    if (isMultiple) {
      return renderMultipleSearch(
        multipleSelectedItem,
        setMultipleSelectedItem,
        showState,
        setShowState,
        isInputEnabled,
        setSearchQuery,
        data,
        setFilteredData,
        selectedItem,
        isMultiple,
      );
    }
    return renderInputField(
      setSearchQuery,
      setShowState,
      showState,
      data,
      setFilteredData,
      selectedItem,
      isMultiple,
    );
  } else {
    return renderSelectedItem_Text_View(
      isMultiple,
      multipleSelectedItem,
      setMultipleSelectedItem,
      showState,
      setShowState,
      pickerText,
    );
  }
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
  data,
  setData,
  filteredData,
  setFilteredData,
  state,
  setState,
  isInputEnabled,
  setIsInputEnabled,
  searchQuery,
  setSearchQuery,
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
        isInputEnabled,
        searchQuery,
        setSearchQuery,
        data,
        setData,
        filteredData,
        setFilteredData,
        state,
        setState,
        setSelectedItem,
        isInputEnabled,
        setIsInputEnabled,
        searchQuery,
        setSearchQuery,
      )}
      {showState
        ? renderDropdown(
            selectedItem,
            setSelectedItem,
            isMultiple,
            multipleSelectedItem,
            setMultipleSelectedItem,
            data,
            setData,
            filteredData,
            setFilteredData,
            setShowState,
            state,
            setState,
            isInputEnabled,
            setIsInputEnabled,
            searchQuery,
            setSearchQuery,
          )
        : null}
      <Text>{searchQuery}</Text>
    </View>
  );
};

export default CustomPicker;
