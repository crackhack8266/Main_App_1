import React, {useState} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import styles from './styles';
import Constants from '../../common/constants';
import {SearchBar} from '../../common/components/SearchBar';

const renderHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerHeading}>
        <Image
          source={require('../../common/assets/right-arrow.png')}
          style={styles.rightArrowImage}
        />
        <Text style={styles.headerHeadingTitle}>{Constants.HEADERTITLE}</Text>
        <Image
          source={require('../../common/assets/filter.png')}
          style={styles.filterImage}
        />
        <Image
          source={require('../../common/assets/sort.png')}
          style={styles.sortImage}
        />
      </View>
    </View>
  );
};

const renderSearchBar = setSearchQuery => {
  return (
    <View style={styles.searchBarOverlay}>
      <SearchBar set={setSearchQuery} />
    </View>
  );
};

const OrderScreen = () => {
  const [searchquery, setSearchQuery] = useState('');
  return (
    <View style={styles.parentContainer}>
      <StatusBar barStyle="light-content" backgroundColor={'#4e4e4e'} />
      {renderHeader()}
      {renderSearchBar(setSearchQuery)}
    </View>
  );
};

export default OrderScreen;
