import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
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
  isInputEnabled,
  setIsInputEnabled,
  tagViewStyle,
  tagIcon,
  tagIconStyle,
  tagTextStyle,
  selectedItemStyle,
  placeholderText,
  defaultSelectText,
}) => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchQuery, setSearchQuery] = useState(' ');

  const inputRef = useRef();

  const renderPickerText = (
    isMultiple,
    isInputEnabled,
    selectedItem,
    placeholderText,
    defaultSelectText,
    multipleSelectedItem,
  ) => {
    if (!isMultiple) {
      if (isInputEnabled) {
        if (!selectedItem.value) {
          return placeholderText || defaultSelectText;
        } else {
          return selectedItem.value;
        }
      } else {
        return selectedItem.value || defaultSelectText;
      }
    } else if (isMultiple) {
      if (isInputEnabled) {
        if (!placeholderText) {
          return defaultSelectText;
        } else if (placeholderText) {
          console.log(multipleSelectedItem > 0);
          if (multipleSelectedItem.length > 0) {
            return ' ';
          } else {
            return 'Shail';
          }
        }
      } else {
        return defaultSelectText;
      }
    }
  };

  const renderSelectView = (
    isMultiple,
    isInputEnabled,
    selectedItem,
    placeholderText,
    defaultSelectText,
    multipleSelectedItem,
    showState,
    setShowState,
    setMultipleSelectedItem,
    tagViewStyle,
    tagTextStyle,
    tagIconStyle,
  ) => {
    const pickerText = renderPickerText(
      isMultiple,
      isInputEnabled,
      selectedItem,
      placeholderText,
      defaultSelectText,
      isMultiple,
      multipleSelectedItem,
    );
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          if (!showState) setShowState(true);
          if (isInputEnabled) focus();
        }}>
        <View style={styles.searchView}>
          {renderSelectionType(
            pickerText,
            showState,
            setShowState,
            isMultiple,
            selectedItem,
            placeholderText,
            defaultSelectText,
            isInputEnabled,
            multipleSelectedItem,
            setMultipleSelectedItem,
            tagViewStyle,
            tagTextStyle,
            tagIconStyle,
          )}
          {renderIcon(showState, setShowState)}
        </View>
      </TouchableWithoutFeedback>
    );
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
    id,
    value,
    isMultiple,
    multipleSelectedItem,
    setMultipleSelectedItem,
    selectedItem,
    setSelectedItem,
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
      setSelectedItem({});
    } else {
      setShowState(false);
      setSelectedItem({id: id, value: value});
    }
  };

  const getSelected = (id, multipleSelectedItem) => {
    return multipleSelectedItem.some(item => item.id == id);
  };

  const selectedItemText = (item, selectedItemStyle) => {
    return (
      <Text style={selectedItemStyle ? selectedItemStyle : styles.selectedText}>
        {item.label}
      </Text>
    );
  };

  const checkSelected = (isMultiple, selectedItemStyle, selectedItem, item) => {
    if (isMultiple) {
      if (getSelected(item.id, multipleSelectedItem)) {
        return selectedItemText(item, selectedItemStyle);
      } else {
        return <Text>{item.label}</Text>;
      }
    }
    if (selectedItem.id == item.id) {
      return selectedItemText(item, selectedItemStyle);
    } else {
      return <Text>{item.label}</Text>;
    }
  };

  const renderOptionList = (
    isInputEnabled,
    isMultiple,
    multipleSelectedItem,
    setMultipleSelectedItem,
    selectedItem,
    setSelectedItem,
    setShowState,
    item,
  ) => {
    return (
      <View style={styles.dropdownItem}>
        <TouchableOpacity
          onPress={() => {
            update_Selected_Item(
              item.id,
              item.value,
              isMultiple,
              multipleSelectedItem,
              setMultipleSelectedItem,
              selectedItem,
              setSelectedItem,
              setShowState,
            );
            if (isMultiple && isInputEnabled) {
              focus();
            }
            setFilteredData(data);
          }}>
          {checkSelected(isMultiple, selectedItemStyle, selectedItem, item)}

          <View style={styles.divider}></View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderDropdown = (
    isInputEnabled,
    isMultiple,
    multipleSelectedItem,
    setMultipleSelectedItem,
    selectedItem,
    setSelectedItem,
    setShowState,
  ) => {
    return (
      <View style={styles.dropdownView}>
        <FlatList
          data={filteredData}
          keyExtractor={item => {
            return item.id;
          }}
          extraData={selectedItem || multipleSelectedItem}
          ListEmptyComponent={<Text>No Items Found</Text>}
          renderItem={({item}) => {
            const id = item.id;
            const value = item.value;
            return renderOptionList(
              isInputEnabled,
              isMultiple,
              multipleSelectedItem,
              setMultipleSelectedItem,
              selectedItem,
              setSelectedItem,
              setShowState,
              item,
            );
          }}
        />
      </View>
    );
  };

  const renderPickerTextComponent = (
    showState,
    setShowState,
    isMultiple,
    isInputEnabled,
    selectedItem,
    placeholderText,
    defaultSelectText,
    multipleSelectedItem,
  ) => {
    return (
      <Text
        onPress={() => {
          if (!showState) setShowState(true);
        }}
        style={styles.pickerText}>
        {renderPickerText(
          isMultiple,
          isInputEnabled,
          selectedItem,
          placeholderText,
          defaultSelectText,
          isMultiple,
          multipleSelectedItem,
        )}
      </Text>
    );
  };

  const renderMultipleSearch = (
    showState,
    setShowState,
    isMultiple,
    selectedItem,
    placeholderText,
    defaultSelectText,
    isInputEnabled,
    multipleSelectedItem,
    setMultipleSelectedItem,
    tagViewStyle,
    tagTextStyle,
    tagIconStyle,
  ) => {
    return (
      <View style={styles.multipleSearchView}>
        {renderTags(
          showState,
          setShowState,
          isMultiple,
          selectedItem,
          placeholderText,
          defaultSelectText,
          isInputEnabled,
          multipleSelectedItem,
          setMultipleSelectedItem,
          tagViewStyle,
          tagTextStyle,
          tagIconStyle,
        )}
        {renderInputField(
          showState,
          setShowState,
          isMultiple,
          isInputEnabled,
          selectedItem,
          placeholderText,
          defaultSelectText,
          multipleSelectedItem,
        )}
      </View>
    );
  };
  const renderImage = tagIcon => {
    if (tagIcon) {
      return tagIcon;
    } else {
      return (
        <Image source={require('images/close.png')} style={styles.closeIcon} />
      );
    }
  };

  const renderTags = (
    showState,
    setShowState,
    isMultiple,
    selectedItem,
    placeholderText,
    defaultSelectText,
    isInputEnabled,
    multipleSelectedItem,
    setMultipleSelectedItem,
    tagViewStyle,
    tagTextStyle,
    tagIconStyle,
  ) => {
    if (multipleSelectedItem.length > 0) {
      return multipleSelectedItem.map(item => {
        return (
          <View style={tagViewStyle ? tagViewStyle : styles.tagsView}>
            <Text style={tagTextStyle ? tagTextStyle : styles.tagsText}>
              {item.value}
            </Text>
            <TouchableOpacity
              onPress={() => {
                renderFilterList(
                  item.id,
                  item.value,
                  multipleSelectedItem,
                  setMultipleSelectedItem,
                );
              }}>
              <View style={tagIconStyle || styles.closeIcon}>
                {renderImage(tagIcon)}
              </View>
            </TouchableOpacity>
          </View>
        );
      });
    } else if (!isInputEnabled) {
      return renderPickerTextComponent(
        showState,
        setShowState,
        isMultiple,
        isInputEnabled,
        selectedItem,
        placeholderText,
        defaultSelectText,
        isMultiple,
        multipleSelectedItem,
      );
    }
  };

  const renderWith_InputDisabled = (
    pickerText,
    showState,
    setShowState,
    isMultiple,
    selectedItem,
    placeholderText,
    defaultSelectText,
    isInputEnabled,
    multipleSelectedItem,
    setMultipleSelectedItem,
    tagViewStyle,
    tagTextStyle,
    tagIconStyle,
  ) => {
    if (isMultiple) {
      return (
        <TouchableWithoutFeedback
          onPress={() => {
            if (!showState) setShowState(true);
          }}>
          <View style={styles.tagsWithView}>
            {renderTags(
              showState,
              setShowState,
              isMultiple,
              selectedItem,
              placeholderText,
              defaultSelectText,
              isInputEnabled,
              multipleSelectedItem,
              setMultipleSelectedItem,
              tagViewStyle,
              tagTextStyle,
              tagIconStyle,
            )}
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      return renderPickerTextComponent(
        showState,
        setShowState,
        isMultiple,
        isInputEnabled,
        selectedItem,
        placeholderText,
        defaultSelectText,
        isMultiple,
        multipleSelectedItem,
      );
    }
  };

  const renderWith_InputDisabled_View = (
    pickerText,
    showState,
    setShowState,
    isMultiple,
    selectedItem,
    placeholderText,
    defaultSelectText,
    isInputEnabled,
    multipleSelectedItem,
    setMultipleSelectedItem,
    tagViewStyle,
    tagTextStyle,
    tagIconStyle,
  ) => {
    return (
      <View style={[styles.selectedItem_Text_View, {flexWrap: 'wrap'}]}>
        {renderWith_InputDisabled(
          pickerText,
          showState,
          setShowState,
          isMultiple,
          selectedItem,
          placeholderText,
          defaultSelectText,
          isInputEnabled,
          multipleSelectedItem,
          setMultipleSelectedItem,
          tagViewStyle,
          tagTextStyle,
          tagIconStyle,
        )}
      </View>
    );
  };

  const renderIconPosition = (showState, setShowState) => {
    if (showState) {
      return (
        <TouchableOpacity
          onPress={() => {
            setShowState(false);
            Keyboard.dismiss();
          }}>
          <Image
            source={require('images/right.png')}
            style={styles.arrowIconRoated}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <Image source={require('images/right.png')} style={styles.arrowIcon} />
      );
    }
  };
  const renderIcon = (showState, setShowState) => {
    return (
      <View style={styles.renderIcon}>
        {renderIconPosition(showState, setShowState)}
      </View>
    );
  };

  const handleSearch = (text, data) => {
    const fromatedQuery = text.toLowerCase();
    const newData = data.filter(item => {
      const itemData = item.value;
      return itemData.indexOf(fromatedQuery) > -1;
    });
    setFilteredData(newData);
    setSearchQuery(fromatedQuery);
  };
  const renderInputField = (
    showState,
    setShowState,
    isMultiple,
    isInputEnabled,
    selectedItem,
    placeholderText,
    defaultSelectText,
    multipleSelectedItem,
  ) => {
    return (
      <TextInput
        ref={inputRef}
        onChangeText={text => {
          handleSearch(text, data);
        }}
        placeholder={renderPickerText(
          isMultiple,
          isInputEnabled,
          selectedItem,
          placeholderText,
          defaultSelectText,
          isMultiple,
          multipleSelectedItem,
        )}
        placeholderTextColor={showState ? null : 'black'}
        onPressIn={() => {
          if (!showState) {
            setShowState(true);
          }
        }}
      />
    );
  };
  const renderSelectionType = (
    pickerText,
    showState,
    setShowState,
    isMultiple,
    selectedItem,
    placeholderText,
    defaultSelectText,
    isInputEnabled,
    multipleSelectedItem,
    setMultipleSelectedItem,
    tagViewStyle,
    tagTextStyle,
    tagIconStyle,
  ) => {
    if (isInputEnabled) {
      if (isMultiple) {
        return renderMultipleSearch(
          showState,
          setShowState,
          isMultiple,
          selectedItem,
          placeholderText,
          defaultSelectText,
          isInputEnabled,
          multipleSelectedItem,
          setMultipleSelectedItem,
          tagViewStyle,
          tagTextStyle,
          tagIconStyle,
        );
      }
      return renderInputField(
        showState,
        setShowState,
        isMultiple,
        isInputEnabled,
        selectedItem,
        placeholderText,
        defaultSelectText,
        multipleSelectedItem,
      );
    } else {
      return renderWith_InputDisabled_View(
        pickerText,
        showState,
        setShowState,
        isMultiple,
        selectedItem,
        placeholderText,
        defaultSelectText,
        isInputEnabled,
        multipleSelectedItem,
        setMultipleSelectedItem,
        tagViewStyle,
        tagTextStyle,
        tagIconStyle,
      );
    }
  };

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <View>
      {renderSelectView(
        isMultiple,
        isInputEnabled,
        selectedItem,
        placeholderText,
        defaultSelectText,
        multipleSelectedItem,
        showState,
        setShowState,
        setMultipleSelectedItem,
        tagViewStyle,
        tagTextStyle,
        tagIconStyle,
      )}
      {showState
        ? renderDropdown(
            isInputEnabled,
            isMultiple,
            multipleSelectedItem,
            setMultipleSelectedItem,
            selectedItem,
            setSelectedItem,
            setShowState,
          )
        : null}
    </View>
  );
};

CustomPicker.defaultProps = {
  isInputEnabled: false,
  isMultiple: false,
};

export default CustomPicker;
