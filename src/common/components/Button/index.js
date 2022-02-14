import React, {useState} from 'react';
import {ButtonView, ButtonText} from './styles';
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CustomButton = ({
  buttonTitle,
  navigator,
  route,
  setState,
  isNavigation,
  height,
  marginBottom,
  width,
  bgColor,
  elevation,
  fontSize,
  marginVertical,
  lineHeight,
  letterSpacing,
  color,
  fontFamily,
  icon,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigation = useNavigation();
  const checkNavigator = (navigator, route) => {
    if (navigator != 'null')
      return navigation.navigate(navigator, {screen: route});
    navigation.navigate(route);
  };

  const checkNavigation = (isNavigation, navigator, route) => {
    setDisabled(true);
    setIsLoading(true);
    setTimeout(() => {
      if (isNavigation) return checkNavigator(navigator, route);
      setState(false);
    }, 3000);
  };

  const isIcon = icon => {
    if (icon != null) return icon;
    return null;
  };

  const renderLoading = () => {
    return <ActivityIndicator animating={true} color={'#fff'} size={'small'} />;
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => checkNavigation(isNavigation, navigator, route)}
        disabled={disabled}>
        <ButtonView
          height={height}
          width={width}
          elevation={elevation}
          marginBottom={marginBottom}
          bgColor={bgColor}
          disabled={disabled}>
          {isIcon(icon)}
          <ButtonText
            fontSize={fontSize}
            marginVertical={marginVertical}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            color={color}
            fontFamily={fontFamily}>
            {isLoading ? renderLoading() : buttonTitle}
          </ButtonText>
        </ButtonView>
      </TouchableOpacity>
    </View>
  );
};
export default CustomButton;
