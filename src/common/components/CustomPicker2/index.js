import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Image,
} from 'react-native';
import styles from './styles';

const CustomPicker2 = ({
  showDropdown,
  setShowDropdown,
  data,
  selectedItem,
  setSelectedItem,
  isMultiple,
  multipleSelectedItem,
  setMultipleSelectedItem,
  isInputEnabled,
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

  const renderSingleSelect = (
    showDropdown,
    setShowDropdown,
    selectedItem,
    setSelectedItem,
    selectedItemStyle,
    data,
  ) => {
    return (
      <View>
        {renderSingleSelectView(selectedItem, setShowDropdown, showDropdown)}
        {showDropdown &&
          renderDropdownForSingleSelect(
            setShowDropdown,
            selectedItem,
            selectedItemStyle,
            setSelectedItem,
            data,
          )}
      </View>
    );
  };
  const renderSingleSelectView = (
    selectedItem,
    setShowDropdown,
    showDropdown,
  ) => {
    return (
      <TouchableWithoutFeedback onPress={() => setShowDropdown(true)}>
        <View style={styles.selectView}>
          <Text style={{marginVertical: 10}}>
            {selectedItem.value || defaultSelectText}
          </Text>
          {renderIconPosition(showDropdown, setShowDropdown)}
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const renderSingleSelect_WithInput = (
    data,
    showDropdown,
    setShowDropdown,
    selectedItem,
    setSelectedItem,
    selectedItemStyle,
  ) => {
    return (
      <View>
        {renderSingleSelectView_WithInput(
          data,
          showDropdown,
          setShowDropdown,
          placeholderText,
          selectedItem,
        )}
        {showDropdown &&
          renderDropdownForSingleSelect(
            setShowDropdown,
            selectedItem,
            selectedItemStyle,
            setSelectedItem,
            data,
          )}
      </View>
    );
  };
  const renderSingleSelectView_WithInput = (
    data,
    showDropdown,
    setShowDropdown,
    placeholderText,
    selectedItem,
  ) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          setShowDropdown(true);
          inputRef.current.focus();
        }}>
        <View style={styles.selectView}>
          {renderTextInput(
            data,
            showDropdown,
            setShowDropdown,
            placeholderText,
            selectedItem,
          )}
          {renderIconPosition(showDropdown, setShowDropdown)}
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const renderDropdownForSingleSelect = (
    setShowDropdown,
    selectedItem,
    selectedItemStyle,
    setSelectedItem,
    data,
  ) => {
    return (
      <View style={styles.dropDown}>
        <FlatList
          data={filteredData}
          keyExtractor={item => {
            return item.id;
          }}
          extraData={selectedItem}
          ListEmptyComponent={<Text>No Items Found</Text>}
          renderItem={({item}) => {
            return (
              <View style={styles.dropdownItem}>
                <TouchableOpacity
                  onPress={() => {
                    if (selectedItem.id == item.id) return setSelectedItem({});
                    return (
                      setShowDropdown(false),
                      setSelectedItem({id: item.id, value: item.value}),
                      setFilteredData(data)
                    );
                  }}>
                  {checkSingleSelected(selectedItem, item, selectedItemStyle)}
                  <View style={styles.divider}></View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
  };
  const checkSingleSelected = (selectedItem, item, selectedItemStyle) => {
    if (selectedItem.id == item.id)
      return renderSelectedItem(selectedItemStyle, item);
    return <Text>{item.label}</Text>;
  };

  const renderMultipleSelect = (
    setShowDropdown,
    multipleSelectedItem,
    tagViewStyle,
    tagTextStyle,
    setMultipleSelectedItem,
    tagIconStyle,
    tagIcon,
    selectedItemStyle,
  ) => {
    return (
      <View>
        {renderMultipleSelectView(
          setShowDropdown,
          multipleSelectedItem,
          tagViewStyle,
          tagTextStyle,
          setMultipleSelectedItem,
          tagIconStyle,
          tagIcon,
          showDropdown,
        )}
        {showDropdown &&
          renderDropdownForMultipleSelect(
            multipleSelectedItem,
            setMultipleSelectedItem,
            selectedItemStyle,
          )}
      </View>
    );
  };
  const renderMultipleSelectView = (
    setShowDropdown,
    multipleSelectedItem,
    tagViewStyle,
    tagTextStyle,
    setMultipleSelectedItem,
    tagIconStyle,
    tagIcon,
    showDropdown,
  ) => {
    return (
      <TouchableWithoutFeedback onPress={() => setShowDropdown(true)}>
        <View style={styles.selectView}>
          <View style={styles.multipleSearchView}>
            {renderTags(
              multipleSelectedItem,
              tagViewStyle,
              tagTextStyle,
              setMultipleSelectedItem,
              tagIconStyle,
              tagIcon,
            )}
          </View>
          {renderIconPosition(showDropdown, setShowDropdown)}
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const renderMultipleSelect_WithInput = (
    setShowDropdown,
    multipleSelectedItem,
    tagViewStyle,
    tagTextStyle,
    setMultipleSelectedItem,
    tagIconStyle,
    tagIcon,
    selectedItemStyle,
    data,
    showDropdown,
  ) => {
    {
      return (
        <View>
          {renderMultipleSelectView_WithInput(
            setShowDropdown,
            multipleSelectedItem,
            tagViewStyle,
            tagTextStyle,
            setMultipleSelectedItem,
            tagIconStyle,
            tagIcon,
            data,
            showDropdown,
          )}
          {showDropdown &&
            renderDropdownForMultipleSelect(
              multipleSelectedItem,
              setMultipleSelectedItem,
              selectedItemStyle,
            )}
        </View>
      );
    }
  };
  const renderMultipleSelectView_WithInput = (
    setShowDropdown,
    multipleSelectedItem,
    tagViewStyle,
    tagTextStyle,
    setMultipleSelectedItem,
    tagIconStyle,
    tagIcon,
    data,
    showDropdown,
  ) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          setShowDropdown(true), inputRef.current.focus();
        }}>
        <View style={styles.selectView}>
          <View style={styles.multipleSearchView}>
            {renderTags(
              multipleSelectedItem,
              tagViewStyle,
              tagTextStyle,
              setMultipleSelectedItem,
              tagIconStyle,
              tagIcon,
            )}
            {renderTextInput(
              data,
              showDropdown,
              setShowDropdown,
              placeholderText,
              selectedItem,
              multipleSelectedItem,
            )}
          </View>
          {renderIconPosition(showDropdown, setShowDropdown)}
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const renderDropdownForMultipleSelect = (
    multipleSelectedItem,
    setMultipleSelectedItem,
    selectedItemStyle,
  ) => {
    return (
      <View style={styles.dropDown}>
        <FlatList
          data={filteredData}
          keyExtractor={item => {
            return item.id;
          }}
          extraData={multipleSelectedItem}
          ListEmptyComponent={<Text>No Items Found</Text>}
          renderItem={({item}) => {
            return (
              <View style={styles.dropdownItem}>
                <TouchableOpacity
                  onPress={() => {
                    renderFilterList(
                      item,
                      multipleSelectedItem,
                      setMultipleSelectedItem,
                    );
                    setFilteredData(data);
                    {
                      isInputEnabled && inputRef.current.focus();
                    }
                  }}>
                  {checkMultipleSelected(
                    item,
                    selectedItemStyle,
                    multipleSelectedItem,
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
  const checkMultipleSelected = (
    item,
    selectedItemStyle,
    multipleSelectedItem,
  ) => {
    if (getSelected(item.id, multipleSelectedItem))
      return renderSelectedItem(selectedItemStyle, item);
    return <Text>{item.label}</Text>;
  };

  const renderTags = (
    multipleSelectedItem,
    tagViewStyle,
    tagTextStyle,
    setMultipleSelectedItem,
    tagIconStyle,
    tagIcon,
  ) => {
    if (multipleSelectedItem.length > 0)
      return multipleSelectedItem.map(item => {
        return (
          <View style={tagViewStyle}>
            <Text style={tagTextStyle}>{item.value}</Text>
            <TouchableOpacity
              onPress={() => {
                renderFilterList(
                  item,
                  multipleSelectedItem,
                  setMultipleSelectedItem,
                );
              }}>
              <View style={tagIconStyle}>{renderImage(tagIcon)}</View>
            </TouchableOpacity>
          </View>
        );
      });
    if (!isInputEnabled)
      return <Text style={styles.defaultText}>Select Items</Text>;
  };
  const renderTextInput = (
    data,
    showDropdown,
    setShowDropdown,
    placeholderText,
    selectedItem,
    multipleSelectedItem,
  ) => {
    return (
      <TextInput
        ref={inputRef}
        onChangeText={text => {
          handleSearch(text, data);
        }}
        placeholder={renderPlaceHolderText(
          selectedItem,
          placeholderText,
          multipleSelectedItem,
        )}
        placeholderTextColor={showDropdown ? null : 'black'}
        onPressIn={() => {
          if (!showDropdown) {
            setShowDropdown(true);
          }
        }}
      />
    );
  };

  const renderSelectedItem = (selectedItemStyle, item) => {
    return <Text style={selectedItemStyle}>{item.label}</Text>;
  };
  const getSelected = (id, multipleSelectedItem) => {
    return multipleSelectedItem.some(item => item.id == id);
  };
  const handleSearch = (text, data) => {
    const fromatedQuery = text.toLowerCase();
    const newData = data.filter(item => {
      const itemData = item.value;
      return itemData.indexOf(fromatedQuery) > -1;
    });
    return setFilteredData(newData), setSearchQuery(fromatedQuery);
  };
  const renderPlaceHolderText = (
    selectedItem,
    placeholderText,
    multipleSelectedItem,
  ) => {
    if (selectedItem) if (selectedItem.value) return selectedItem.value;
    if (multipleSelectedItem) if (multipleSelectedItem.length > 0) return null;
    return placeholderText;
  };
  const renderImage = tagIcon => {
    if (tagIcon) return tagIcon;
    return (
      <Image source={require('images/close.png')} style={styles.closeIcon} />
    );
  };
  const renderFilterList = (
    item,
    multipleSelectedItem,
    setMultipleSelectedItem,
  ) => {
    if (multipleSelectedItem.some(itemId => itemId.id == item.id))
      return setMultipleSelectedItem(
        renderNewListItem(item, multipleSelectedItem),
      );
    return setMultipleSelectedItem([
      ...multipleSelectedItem,
      {id: item.id, value: item.value},
    ]);
  };
  const renderNewListItem = (item, multipleSelectedItem) => {
    const newListItem = multipleSelectedItem.filter(
      itemId => itemId.id !== item.id,
    );
    return newListItem;
  };
  const renderIconRotated = setShowDropdown => {
    return (
      <View style={styles.iconStyle}>
        <TouchableOpacity
          onPress={() => {
            setShowDropdown(false);
            Keyboard.dismiss();
          }}>
          <Image
            source={require('images/right.png')}
            style={styles.arrowIconRoated}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const renderIcon = () => {
    return (
      <View style={styles.iconStyle}>
        <Image source={require('images/right.png')} style={styles.arrowIcon} />
      </View>
    );
  };
  const renderIconPosition = (showDropdown, setShowDropdown) => {
    if (showDropdown) return renderIconRotated(setShowDropdown);
    return renderIcon();
  };

  if (!isMultiple && !isInputEnabled)
    return renderSingleSelect(
      showDropdown,
      setShowDropdown,
      selectedItem,
      setSelectedItem,
      selectedItemStyle,
      data,
    );
  if (!isMultiple && isInputEnabled)
    return renderSingleSelect_WithInput(
      data,
      showDropdown,
      setShowDropdown,
      selectedItem,
      setSelectedItem,
      selectedItemStyle,
    );
  if (isMultiple && !isInputEnabled)
    return renderMultipleSelect(
      setShowDropdown,
      multipleSelectedItem,
      tagViewStyle,
      tagTextStyle,
      setMultipleSelectedItem,
      tagIconStyle,
      tagIcon,
      selectedItemStyle,
    );
  if (isMultiple && isInputEnabled)
    return renderMultipleSelect_WithInput(
      setShowDropdown,
      multipleSelectedItem,
      tagViewStyle,
      tagTextStyle,
      setMultipleSelectedItem,
      tagIconStyle,
      tagIcon,
      selectedItemStyle,
      data,
      showDropdown,
    );
};

CustomPicker2.defaultProps = {
  isMultiple: false,
  isInputEnabled: false,
  multipleSelectedItem: [],
  selectedItem: {},
  tagTextStyle: [styles.tagsText],
  selectedItemStyle: [styles.selectedText],
  tagIconStyle: [styles.closeIcon],
  tagViewStyle: [styles.tagsView],
};
export default CustomPicker2;
