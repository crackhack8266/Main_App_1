import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const PrimaryButton = ({
  button_title,
  route,
  isNavigation,
  setState,
  styleprop,
}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          isNavigation ? navigation.navigate(route) : setState(false);
        }}>
        <View style={[styles.loginButtonView, styleprop]}>
          <Text style={styles.buttonTextForLogin}>
            {button_title.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
