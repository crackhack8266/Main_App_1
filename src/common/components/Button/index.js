import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Constants from '../../constants';

import {useNavigation} from '@react-navigation/native';

export const CustomButton = ({buttitle}) => {
  const navigation = useNavigation();

  const renderCustomButton = (buttitle, navigation) => {
    if (buttitle == Constants.LOGINBUTTONTEXT) {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BottomTabNavigator');
          }}>
          <View style={styles.loginButtonView}>
            <Text style={styles.buttonTextForLogin}>
              {buttitle.toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>
      );
    } else if (buttitle == Constants.LOGINWITHFACEBOOKBUTTONTEXT) {
      return (
        <TouchableOpacity>
          <View style={styles.facebookLoginButtonView}>
            <Image
              source={require('../../assets/facebookicon.png')}
              style={styles.facebookIcon}
            />
            <Text style={styles.buttonTextForFacebookLogin}>
              {buttitle.toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity>
          <View style={styles.viewDetailsButtonView}>
            <Text style={styles.buttonTextForViewDetails}>View Details</Text>
          </View>
          <Text style={styles.underlinedText}>Don't show again</Text>
        </TouchableOpacity>
      );
    }
  };

  return <View>{renderCustomButton(buttitle, navigation)}</View>;
};
