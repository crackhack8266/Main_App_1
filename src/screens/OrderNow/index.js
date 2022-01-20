import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Modal,
} from 'react-native';
import styles from './styles';
import Constants from 'constants';
import {SearchBar} from 'components/SearchBar';
import {ListOfMeals} from 'components/ListOfMeals';
import FilterModal from 'components/FilterModal';

const renderHeader = setShow => {
  return (
    <View style={styles.header}>
      <View style={styles.headerHeading}>
        <Image
          source={require('../../common/assets/right-arrow.png')}
          style={styles.rightArrowImage}
        />
        <Text style={styles.headerHeadingTitle}>{Constants.HEADERTITLE}</Text>
        <TouchableOpacity
          onPress={() => {
            setShow(true);
          }}>
          <Image
            source={require('../../common/assets/filter.png')}
            style={styles.filterImage}
          />
        </TouchableOpacity>
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

//Something new timeout related thing starts
// also search aboyt what is promise and what does it do
// so after understanding this remove the above comment
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
//something new timeout related thing ends

const OrderScreen = () => {
  const [show, setShow] = useState(false);

  const [miles, setMiles] = useState('9');
  const [multiSliderValue, setMultiSliderValue] = useState([3, 7]);
  const [searchquery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const screenHeight = Dimensions.get('window').height;
  const [checked, setChecked] = useState('first');

  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
    }, []);
  };

  return (
    <View style={{height: screenHeight, ...styles.parentContainer}}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{height: screenHeight + 340}}>
          <StatusBar barStyle="light-content" backgroundColor={'#4e4e4e'} />
          {renderHeader(setShow)}
          {renderSearchBar(setSearchQuery)}
          {renderListOfMeals(Constants.LISTOFMEALS_PROPS)}

          <FilterModal
            showState={show}
            setState={setShow}
            //nutrientsOpen={nutrientsOpen}
            //statusOpen={statusOpen}
            //value={value}
            //setNutrientsOpen={setNutrientsOpen}
            // setNutrientsOpen={setNutrientsOpen}
            //setValue={setValue}
            multiSliderValue={multiSliderValue}
            setMultiSliderValue={setMultiSliderValue}
            checked={checked}
            setChecked={setChecked}
            miles={miles}
            setMiles={setMiles}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderScreen;
