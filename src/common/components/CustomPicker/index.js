import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Constants from 'constants/';
import styles from './styles';

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
  const inputRef = useRef();

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
      <TouchableWithoutFeedback
        onPress={() => {
          if (!showState) {
            setShowState(true);
          }
          if (isInputEnabled) {
            focus();
          }
        }}>
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
      </TouchableWithoutFeedback>
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
      renderFilterList(
        id,
        value,
        multipleSelectedItem,
        setMultipleSelectedItem,
      );
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
                    if (isMultiple && isInputEnabled) {
                      focus();
                    }
                    setFilteredData(data);
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
          multipleSelectedItem,
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
      ? multipleSelectedItem.map(item => {
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
        })
      : isMultiple
      ? null
      : renderDefaultPickerText_Multiple(showState, setShowState);
  };

  const checkTypeOf_RenderTags = (
    isMultiple,
    multipleSelectedItem,
    setMultipleSelectedItem,
    showState,
    setShowState,
    pickerText,
  ) => {
    if (isMultiple) {
      if (isInputEnabled) {
        return renderTags(
          multipleSelectedItem,
          setMultipleSelectedItem,
          showState,
          setShowState,
        );
      } else {
        return (
          <TouchableWithoutFeedback
            onPress={() => {
              if (!showState) setShowState(true);
            }}>
            <View style={styles.tagsWithView}>
              {renderTags(
                multipleSelectedItem,
                setMultipleSelectedItem,
                showState,
                setShowState,
              )}
            </View>
          </TouchableWithoutFeedback>
        );
      }
    } else {
      return (
        <Text
          onPress={() => update_Show_State(showState, setShowState)}
          style={styles.pickerText}>
          {capitalize_FirstLetterOfWord(pickerText)}
        </Text>
      );
    }
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
      <View style={[styles.selectedItem_Text_View, {flexWrap: 'wrap'}]}>
        {checkTypeOf_RenderTags(
          isMultiple,
          multipleSelectedItem,
          setMultipleSelectedItem,
          showState,
          setShowState,
          pickerText,
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
          <Image
            source={require('images/right.png')}
            style={styles.arrowIcon}
          />
        )}
      </View>
    );
  };

  const renderPlaceHolder = (
    isMultiple,
    multipleSelectedItem,
    selectedItem,
    setSearchQuery,
  ) => {
    if (isMultiple) {
      if (multipleSelectedItem == 0) {
        return 'Search / Select Multiple nutrients';
      } else {
        return null;
      }
    } else {
      if (selectedItem.value == null) {
        return 'Select / Search a Nutrient';
      } else {
        return selectedItem.value;
      }
    }
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
    multipleSelectedItem,
  ) => {
    return (
      <TextInput
        ref={inputRef}
        onChangeText={text => {
          handleSearch(text, setSearchQuery, data, setFilteredData);
        }}
        placeholder={renderPlaceHolder(
          isMultiple,
          multipleSelectedItem,
          selectedItem,
          setSearchQuery,
        )}
        placeholderTextColor={showState ? null : 'black'}
        onPressIn={() => {
          if (!showState) {
            setShowState(true);
          }
          setFilteredData(data);
        }}
        style={styles.renderInputField}
      />
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

  const focus = () => {
    inputRef.current.focus();
  };

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
