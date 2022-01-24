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
      {renderInputField(
        isInputEnabled,
        searchQuery,
        setSearchQuery,
        setShowState,
        showState,
        data,
        setData,
        filteredData,
        setFilteredData,
        selectedItem,
        state,
        setState,
        setSelectedItem,
      )}
      {/* {renderSelectedItem_Text_View(
        isMultiple,
        multipleSelectedItem,
        setMultipleSelectedItem,
        showState,
        setShowState,
        pickerText,
      )} */}
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
      extraData={true}
      scrollEnabled={false}
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
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

const renderIcon = (showState, setShowState) => {
  return (
    <View>
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
  isInputEnabled,
  searchQuery,
  setSearchQuery,
  setShowState,
  showState,
  data,
  setData,
  filteredData,
  setFilteredData,
  selectedItem,
  state,
  setState,
  setSelectedItem,
) => {
  return (
    <View>
      <TextInput
        onChangeText={text => {
          handleSearch(text, setSearchQuery, data, setFilteredData);
        }}
        placeholder={selectedItem.value || 'Enter Search Query'}
        onPressIn={() => {
          if (!showState) {
            setShowState(true);
          }
          setSelectedItem({});
          setFilteredData(data);
        }}
        style={styles.renderInputField}
        value={selectedItem ? selectedItem.value : null}
      />
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
  data,
  setData,
  filteredData,
  setFilteredData,
  state,
  setState,
}) => {
  const [isInputEnabled, setIsInputEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState(' ');

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
          )
        : null}
      <Text>{searchQuery}</Text>
    </View>
  );
};

export default CustomPicker;
