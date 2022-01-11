import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import PrimaryButton from './PrimaryButton';
import SocialMedia_Button from './SocialMedia_Button';
import DefaultButton from './DefaultButton';

export const CustomButton = ({
  button_title,
  navigator,
  route,
  type,
  setState,
  isNavigation,
  styleprop,
}) => {
  return (
    <View>
      {type == 'primary' ? (
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
      )}
    </View>
  );
};
