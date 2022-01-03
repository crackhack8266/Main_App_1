import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Constants from '../../common/constants';
import {SearchBar} from '../../common/components/SearchBar';
import {ListOfMeals} from '../../common/components/ListOfMeals';

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

const renderListOfMeals = listOfMeals_props => {
  return listOfMeals_props.map(srcprop => {
    return <ListOfMeals src={srcprop.src} key={srcprop.id} />;
  });
};

const OrderScreen = () => {
  const [searchquery, setSearchQuery] = useState('');
  const screenHeight = Dimensions.get('window').height;
  return (
    <View style={{height: screenHeight, ...styles.parentContainer}}>
      <ScrollView>
        <View style={{height: screenHeight + 400}}>
          <StatusBar barStyle="light-content" backgroundColor={'#4e4e4e'} />
          {renderHeader()}
          {renderSearchBar(setSearchQuery)}
          {renderListOfMeals(Constants.LISTOFMEALS_PROPS)}
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderScreen;
