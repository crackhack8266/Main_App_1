import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const NutriSections = ({name}) => {
  return (
    <View style={styles.childOfNutritionalGoals}>
      <Text style={styles.nurtitionalLists}>{name}</Text>
      <AntDesign
        name="rightcircle"
        size={16}
        color="#a94446"
        style={styles.rightCircle}
      />
    </View>
  );
};
