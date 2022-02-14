import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const renderBelowLine = () => {
  return (
    <View style={styles.belowLine}>
      <Image
        source={require('../../assets/store.png')}
        style={styles.storeImage}
      />
      <Text style={styles.restaurantTitle}>A & b Restaurant</Text>
      <View style={styles.priceView}>
        <Text style={styles.priceText}>$15.00</Text>
      </View>
    </View>
  );
};
const renderLeftAboveLine = () => {
  return (
    <View style={styles.leftImageColumn}>
      <Image
        source={require('../../assets/food.png')}
        style={styles.foodImage}
      />
    </View>
  );
};

const renderRightDetailsColumns_1st_row = src => {
  return (
    <View style={styles.rightDetailsColumns_1st_row}>
      <Text style={styles.title}>Vegetables and poached eggs</Text>
      <View style={styles.infoView}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            alignSelf: 'center',
            marginBottom: 2,
            marginRight: 1,
            fontFamily: 'Merriweather-BoldItalic',
          }}>
          i
        </Text>
      </View>
      {renderFloatingImage(src)}
    </View>
  );
};
const renderFloatingImage = src => {
  if (src == 'green') {
    return (
      <Image source={require('../../assets/green.png')} style={styles.green} />
    );
  } else if (src == 'yellow') {
    return (
      <Image source={require('../../assets/yellow.png')} style={styles.green} />
    );
  } else if (src == 'red') {
    return (
      <Image source={require('../../assets/red.png')} style={styles.green} />
    );
  }
};
const renderBelowTitle = () => {
  return (
    <View>
      <View style={styles.belowTitle}>
        <Image
          source={require('../../assets/road.png')}
          style={styles.roadImage}
        />
        <Text style={styles.roadText}> 10 Miles </Text>
      </View>
      <View style={styles.belowTitle}>
        <Text style={styles.pickupText}>Pickup :</Text>
        <Text style={styles.value}>Yes</Text>
        <Image
          source={require('../../assets/stopwatch.png')}
          style={styles.stopwatchImage}
        />
        <Text style={styles.deliveryTimeText}>Delivery time :</Text>
        <Text style={styles.value}>1 hr</Text>
      </View>
    </View>
  );
};
const renderAboveLine = src => {
  return (
    <View style={styles.aboveLine}>
      {renderLeftAboveLine()}
      <View style={styles.rightDetailsColumn}>
        {renderRightDetailsColumns_1st_row(src)}
        {renderBelowTitle()}
      </View>
    </View>
  );
};
export const ListOfMeals = ({src}) => {
  return (
    <View style={styles.background}>
      {renderAboveLine(src)}
      <View style={styles.divider}></View>
      {renderBelowLine()}
    </View>
  );
};
