import React from 'react';
import {View, TextInput, Image} from 'react-native';
import styles from './styles';
import Constants from '../../constants';

//convert each word's first letter to capital
const capitalizeFirstLetterOfEveryWord = string => {
  return string.replace(/\b(\w)/g, s => s.toUpperCase());
};

const renderSearchBarField = set => {
  return (
    <TextInput
      onChangeText={set}
      placeholder={capitalizeFirstLetterOfEveryWord(Constants.SEARCHTEXT)}
      style={styles.searchBarField}
    />
  );
};

export const SearchBar = ({set}) => {
  return (
    <View style={styles.searchBar}>
      <Image
        source={require('../../assets/search.png')}
        style={styles.searchBarIcon}
      />
      {renderSearchBarField(set)}
    </View>
  );
};
