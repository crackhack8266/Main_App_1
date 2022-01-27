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
import Constants from 'constants/';
import styles from './styles';

const CustomPicker = props => {
  const [filteredData, setFilteredData] = useState(props.data);
  const [searchQuery, setSearchQuery] = useState(' ');

  const inputRef = useRef();

  const capitalize_FirstLetterOfWord = pickerText => {
    return pickerText.charAt(0).toUpperCase() + pickerText.slice(1);
  };

  const check_SingleSelectedItem_PickerText = props => {
    if (!props.isMultiple || undefined) {
      return props.selectedItem.value || Constants.DROPDOWN_TEXT;
    } else {
      return null;
    }
  };

  const renderSelectView = props => {
    const pickerText = check_SingleSelectedItem_PickerText(props);
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          if (!props.showState) {
            props.setShowState(true);
          }
          if (props.isInputEnabled) {
            focus();
          }
        }}>
        <View style={styles.searchView}>
          {renderSelectionType(pickerText, props)}
          {renderIcon(props)}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const update_Show_State = props => {
    if (!props.showState) {
      props.setShowState(true);
    }
  };

  const renderFilterList = (id, value, props) => {
    if (props.multipleSelectedItem.some(itemId => itemId.id == id)) {
      const newListItem = props.multipleSelectedItem.filter(
        item => item.id !== id,
      );
      return props.setMultipleSelectedItem(newListItem);
    }
    props.setMultipleSelectedItem([
      ...props.multipleSelectedItem,
      {id: id, value: value},
    ]);
  };

  const update_Selected_Item = (id, value, props) => {
    if (props.isMultiple) {
      renderFilterList(id, value, props);
    } else if (props.selectedItem.id == id) {
      setFilteredData(props.data);
      props.setSelectedItem({});
    } else {
      props.setShowState(false);
      props.setSelectedItem({id: id, value: value});
    }
  };

  const getSelected = (id, props) => {
    return props.multipleSelectedItem.some(item => item.id == id);
  };

  const selectedItemText = (item, props) => {
    return (
      <Text
        style={
          props.selectedItemStyle
            ? props.selectedItemStyle
            : styles.selectedText
        }>
        {item.label}
      </Text>
    );
  };

  const checkSelected = (props, item) => {
    if (props.isMultiple) {
      if (getSelected(item.id, props)) {
        return selectedItemText(item, props);
      } else {
        return <Text>{item.label}</Text>;
      }
    } else if (props.selectedItem.id == item.id) {
      return selectedItemText(item, props);
    } else {
      return <Text>{item.label}</Text>;
    }
  };

  const renderOptionList = (props, item) => {
    return (
      <View style={styles.dropdownItem}>
        <TouchableOpacity
          onPress={() => {
            update_Selected_Item(item.id, item.value, props);
            if (props.isMultiple && props.isInputEnabled) {
              focus();
            }
            setFilteredData(props.data);
          }}>
          {checkSelected(props, item)}

          <View style={styles.divider}></View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderDropdown = props => {
    return (
      <View style={styles.dropdownView}>
        <FlatList
          data={filteredData}
          keyExtractor={item => {
            return item.id;
          }}
          extraData={props.selectedItem || props.multipleSelectedItem}
          ListEmptyComponent={<Text>No Items Found</Text>}
          renderItem={({item}) => {
            const id = item.id;
            const value = item.value;
            return renderOptionList(props, item);
          }}
        />
      </View>
    );
  };

  const renderDefaultPickerText_Multiple = props => {
    if (!props.isInputEnabled) {
      return (
        <Text
          onPress={() => {
            update_Show_State(props);
          }}>
          Select Multiple Nutrients
        </Text>
      );
    }
  };

  const renderMultipleSearch = props => {
    return (
      <View style={styles.multipleSearchView}>
        {renderTags(props)}
        {renderInputField(props)}
      </View>
    );
  };
  const renderImage = props => {
    if (props.tagIcon) {
      return props.tagIcon;
    } else {
      return (
        <Image source={require('images/close.png')} style={styles.closeIcon} />
      );
    }
  };

  const renderTags = props => {
    if (props.multipleSelectedItem.length > 0) {
      return props.multipleSelectedItem.map(item => {
        return (
          <View
            style={props.tagViewStyle ? props.tagViewStyle : styles.tagsView}>
            <Text
              style={props.tagTextStyle ? props.tagTextStyle : styles.tagsText}>
              {item.value}
            </Text>
            <TouchableOpacity
              onPress={() => {
                renderFilterList(item.id, item.value, props);
              }}>
              <View style={props.tagIconStyle || styles.closeIcon}>
                {renderImage(props)}
              </View>
            </TouchableOpacity>
          </View>
        );
      });
    } else {
      return renderDefaultPickerText_Multiple(props);
    }
  };

  const renderWith_InputDisabled = (pickerText, props) => {
    if (props.isMultiple) {
      return (
        <TouchableWithoutFeedback
          onPress={() => {
            if (!props.showState) props.setShowState(true);
          }}>
          <View style={styles.tagsWithView}>{renderTags(props)}</View>
        </TouchableWithoutFeedback>
      );
    } else {
      return (
        <Text
          onPress={() => update_Show_State(props)}
          style={styles.pickerText}>
          {capitalize_FirstLetterOfWord(pickerText)}
        </Text>
      );
    }
  };

  const renderWith_InputDisabled_View = (pickerText, props) => {
    return (
      <View style={[styles.selectedItem_Text_View, {flexWrap: 'wrap'}]}>
        {renderWith_InputDisabled(pickerText, props)}
      </View>
    );
  };

  const renderIconPosition = props => {
    if (props.showState) {
      return (
        <TouchableOpacity
          onPress={() => {
            props.setShowState(false);
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
  const renderIcon = props => {
    return <View style={styles.renderIcon}>{renderIconPosition(props)}</View>;
  };

  const setPlaceHolder = () => {
    if (props.placeholderText) {
      return props.placeholderText;
    } else {
      return DEFAULT_DROPDOWN_TEXT;
    }
  };

  const renderPlaceHolder = props => {
    if (props.isMultiple) {
      if (props.multipleSelectedItem.length == 0) {
        return props.placeholderText
          ? props.placeholderText
          : 'Search / Select Multiple nutrients';
      } else {
        return null;
      }
    } else {
      if (props.selectedItem.value == null) {
        return props.placeholderText
          ? props.placeholderText
          : 'Select / Search a Nutrient';
      } else {
        return props.selectedItem.value;
      }
    }
  };
  const handleSearch = (text, props) => {
    const fromatedQuery = text.toLowerCase();
    const newData = props.data.filter(item => {
      const itemData = item.value;
      return itemData.indexOf(fromatedQuery) > -1;
    });
    setFilteredData(newData);

    setSearchQuery(fromatedQuery);
  };
  const renderInputField = props => {
    return (
      <TextInput
        ref={inputRef}
        onChangeText={text => {
          handleSearch(text, props);
        }}
        placeholder={renderPlaceHolder(props)}
        placeholderTextColor={props.showState ? null : 'black'}
        onPressIn={() => {
          if (!props.showState) {
            props.setShowState(true);
          }
          setFilteredData(props.data);
        }}
      />
    );
  };
  const renderSelectionType = (pickerText, props) => {
    if (props.isInputEnabled) {
      if (props.isMultiple) {
        return renderMultipleSearch(props);
      }
      return renderInputField(props);
    } else {
      return renderWith_InputDisabled_View(pickerText, props);
    }
  };

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <View>
      {renderSelectView(props)}
      {props.showState ? renderDropdown(props) : null}
    </View>
  );
};

export default CustomPicker;
