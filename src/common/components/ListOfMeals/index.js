import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const renderBackground = () => {
  return (
    <View style={styles.background}>
      <View style={styles.aboveLine}>
        <View style={styles.leftImageColumn}>
          <Image
            source={require('../../assets/food.png')}
            style={styles.foodImage}
          />
        </View>
        <View style={styles.rightDetailsColumn}>
          <Text style={styles.title}>Vegetables and poached eggs</Text>
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
      </View>
      <View style={styles.divider}></View>
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
    </View>
  );
};
export const ListOfMeals = () => {
  return renderBackground();
};
