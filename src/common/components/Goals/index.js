import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Goals = () => {
  return (
    <View style={styles.goalsView}>
      <Text style={styles.goalsTitle}>Carbohydrates</Text>
      <View style={styles.greenTick}>
        <Image
          source={require('../../assets/checkmark.png')}
          style={styles.greenTickImage}
        />
      </View>
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
    </View>
  );
};

export default Goals;
