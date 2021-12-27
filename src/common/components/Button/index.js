import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export const CustomButton = ({buttitle}) => {
  return (
    <View>
      {buttitle == 'LOGIN' ? (
        <TouchableOpacity>
          <View style={styles.loginButtonView}>
            <Text style={styles.buttonTextForLogin}>{buttitle}</Text>
          </View>
        </TouchableOpacity>
      ) : buttitle == 'LOGIN WITH FACEBOOK' ? (
        <TouchableOpacity>
          <View style={styles.facebookLoginButtonView}>
            <Image
              source={require('../../assets/facebookicon.png')}
              style={styles.facebookIcon}
            />
            <Text style={styles.buttonTextForFacebookLogin}>{buttitle}</Text>
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
