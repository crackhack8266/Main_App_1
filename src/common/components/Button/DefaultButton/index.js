import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const DefaultButton = ({button_title, route}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(route);
      }}>
      <View style={styles.viewDetailsButtonView}>
        <Text style={styles.buttonTextForViewDetails}>{button_title}</Text>
      </View>
      <Text style={styles.underlinedText}>Don't show again</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
