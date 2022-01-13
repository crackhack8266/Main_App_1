import React from 'react';
import styled from 'styled-components';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ButtonView = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-bottom: ${props => props.marginBottom};
  background-color: ${props => props.bgColor};
  align-self: center;
  flex-direction: row;
  width: ${props => props.width};
  height: ${props => props.height};
`;

const ButtonText = styled.Text`
  font-size: ${props => props.fontSize};
  text-align: left;
  margin-vertical: ${props => props.marginVertical};
  color: ${props => props.color};
  line-height: ${props => props.lineHeight};
  letter-spacing: ${props => props.letterSpacing};
  font-family: ${props => props.fontFamily};
`;

const CustomButton = ({
  button_title,
  navigator,
  route,
  setState,
  isNavigation,
  height,
  marginBottom,
  width,
  bgColor,
  fontSize,
  marginVertical,
  lineHeight,
  letterSpacing,
  color,
  fontFamily,
  icon,
}) => {
  const navigation = useNavigation();
  const checkNavigator = (navigator, route) => {
    if (navigator != 'null')
      return navigation.navigate(navigator, {screen: route});
    navigation.navigate(route);
  };

  const checkNavigation = (isNavigation, navigator, route) => {
    if (isNavigation) return checkNavigator(navigator, route);
    setState(false);
  };

  const isIcon = icon => {
    if (icon != null) return icon;
    return null;
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => checkNavigation(isNavigation, navigator, route)}>
        <ButtonView
          height={height}
          width={width}
          marginBottom={marginBottom}
          bgColor={bgColor}>
          {isIcon(icon)}
          <ButtonText
            fontSize={fontSize}
            marginVertical={marginVertical}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            color={color}
            fontFamily={fontFamily}>
            {button_title}
          </ButtonText>
        </ButtonView>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
