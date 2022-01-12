import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

export const CustomButton = ({
  button_title,
  navigator,
  route,
  type,
  setState,
  isNavigation,
  viewstyleprop,
  textstyleprop,
}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          isNavigation
            ? navigator != 'null'
              ? navigation.navigate(navigator, {
                  screen: route,
                })
              : navigation.navigate(route)
            : setState(false);
        }}>
        <View style={[styles.buttonView, viewstyleprop]}>
          {type == 'socialmedia' ? (
            <Image
              source={require('../../assets/facebookicon.png')}
              style={styles.icon}
            />
          ) : null}
          <Text style={[styles.buttonText, textstyleprop]}>
            {button_title.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

{
  /* {type == 'primary' ? (
  <PrimaryButton
    button_title={button_title}
    route={route}
    isNavigation={isNavigation}
    setState={setState}
    styleprop={styleprop}
  />
) : type == 'socialmedia' ? (
  <SocialMedia_Button
    button_title={button_title}
    navigator={navigator}
    route={route}
  />
) : (
  <DefaultButton button_title={button_title} route={route} type={type} />
)} */
}
