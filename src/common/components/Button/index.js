import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Constants from '../../constants';

import {useNavigation} from '@react-navigation/native';

export const CustomButton = ({buttitle}) => {
  const navigation = useNavigation();
  return (
    <View>
      {buttitle == Constants.LOGINBUTTONTEXT ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProfileScreen');
          }}>
          <View style={styles.loginButtonView}>
            <Text style={styles.buttonTextForLogin}>
              {buttitle.toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>
      ) : buttitle == Constants.LOGINWITHFACEBOOKBUTTONTEXT ? (
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
      ) : (
        <TouchableOpacity>
          <View style={styles.viewDetailsButtonView}>
            <Text style={styles.buttonTextForViewDetails}>View Details</Text>
          </View>
          <Text style={styles.underlinedText}>Don't show again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
