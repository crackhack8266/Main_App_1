import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './styles';

const ActivityIndicatorScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('BottomTabNavigator');
  }, 3000);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default ActivityIndicatorScreen;
