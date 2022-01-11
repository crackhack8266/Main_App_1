import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const SocialMedia_Button = ({button_title, navigator, route}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate(navigator, {
          screen: route,
        });
      }}>
      <View style={styles.facebookLoginButtonView}>
        <Image
          source={require('../../../assets/facebookicon.png')}
          style={styles.facebookIcon}
        />
        <Text style={styles.buttonTextForFacebookLogin}>
          {button_title.toUpperCase()}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SocialMedia_Button;
