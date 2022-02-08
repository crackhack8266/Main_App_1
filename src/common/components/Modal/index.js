import React, {useRef, useEffect, Children} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Button,
  FlatList,
  Animated,
} from 'react-native';
import styles from './styles';

import Constants from 'constants/';
var globalWidth = -100;
var globalHeight = 100;
const Modal = ({
  showModal,
  setShowModal,
  modalActive,
  title,
  justifyContent,
  popupViewStyle,
  basicPopupContent,
  slidingPopupContent,
  fullScreenPopupContent,
  inputPopupContent,
  isOn,
  setIsOn,
  slideDirection,
  closable,
  isFooter,
}) => {
  // 3 Main Functions:
  // 1. header
  // 2. body
  // 3.footer
  const renderHeader = (setShowModal, isOn, setIsOn, closable) => {
    return (
      <>
        {closable && (
          <TouchableWithoutFeedback
            onPress={() => {
              setIsOn(false),
                setTimeout(() => {
                  setShowModal(false);
                }, 600);
            }}>
            <View>
              <Image
                source={require('images/close.png')}
                style={styles.closeIcon}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
        <Text style={styles.popupTitle}>{title}</Text>
      </>
    );
  };
  const renderBody = (
    basicPopupContent,
    slidingPopupContent,
    inputPopupContent,
    fullScreenPopupContent,
  ) => {
    switch (modalActive.type) {
      case 'basicPopup':
        return <>{basicPopupContent}</>;
      case 'slidingPopup':
        return <>{slidingPopupContent}</>;
      case 'fullScreenPopup':
        return <>{fullScreenPopupContent}</>;
      case 'loginPopup':
        return (
          <>
            <Text style={styles.subHeadingText}>
              Please Enter your email id and password below
            </Text>
            {inputPopupContent}
          </>
        );
      default:
        break;
    }
  };
  const renderFooter = (setShowModal, isFooter) => {
    if (isFooter)
      return (
        <View style={styles.popupCloseButtons}>
          <Text
            style={styles.buttonTextStyle}
            onPress={() => setShowModal(false)}>
            Cancel
          </Text>
          <Text
            style={styles.buttonTextStyle}
            onPress={() => setShowModal(false)}>
            Ok
          </Text>
        </View>
      );
  };

  // Component
  const SlideDirection = ({popupViewStyle, slideDirection, children}) => {
    if (slideDirection == 'left' || slideDirection == 'right')
      return (
        <Animated.View
          onLayout={event => {
            const {width} = event.nativeEvent.layout;
            globalWidth = slideDirection == 'left' ? -width : width;
          }}
          style={[
            popupViewStyle,
            styles.commanStyle,
            {transform: [{translateX: horizontalTranslation}]},
          ]}>
          {children}
        </Animated.View>
      );
    if (slideDirection == 'top' || slideDirection == 'bottom')
      return (
        <Animated.View
          onLayout={event => {
            const {height} = event.nativeEvent.layout;
            globalHeight = slideDirection == 'top' ? -height : height;
          }}
          style={[
            popupViewStyle,
            styles.commanStyle,
            {transform: [{translateY: verticalTranslation}]},
          ]}>
          {children}
        </Animated.View>
      );
  };

  // Utilities
  const selectToValue = dimension => {
    if (dimension == 'height') {
      if (globalHeight > 0) return globalHeight + 1000;
      return globalHeight - 1000;
    }
    if (dimension == 'width') {
      if (globalWidth > 0) return globalWidth + 180;
      return globalWidth - 180;
    }
  };
  const horizontalTranslation = useRef(
    isOn ? new Animated.Value(globalWidth) : new Animated.Value(0),
  ).current;

  const verticalTranslation = useRef(
    isOn ? new Animated.Value(selectToValue('height')) : new Animated.Value(0),
  ).current;

  Animated.timing(verticalTranslation, {
    toValue: isOn ? 0 : selectToValue('height'),
    useNativeDriver: true,
  }).start();

  Animated.timing(horizontalTranslation, {
    toValue: isOn ? 0 : selectToValue('width'),
    useNativeDriver: true,
  }).start();

  return (
    <View style={[styles.modalView, {justifyContent: justifyContent}]}>
      <SlideDirection
        popupViewStyle={popupViewStyle}
        slideDirection={slideDirection}>
        {renderHeader(setShowModal, isOn, setIsOn, closable)}
        {renderBody(
          basicPopupContent,
          slidingPopupContent,
          inputPopupContent,
          fullScreenPopupContent,
        )}
        {console.log(isFooter)}
        {renderFooter(setShowModal, isFooter)}
      </SlideDirection>
    </View>
  );
};

//Default Popups.
const defaultBasicPopup = () => {
  return (
    <View>
      <Text style={{fontSize: 24}}>Modal</Text>
      <Text>Hello sbdaihoihad aid a duada dad ad adadashh</Text>
    </View>
  );
};
const defaultSlidingPopup = () => {
  return (
    <View>
      <Text>Yooo ! This is default slidingup popup</Text>
    </View>
  );
};
const defaultFullScreenPopup = () => {
  return (
    <View>
      <FlatList
        data={Constants.NUTRITIONAL_VALUES_DROP_DOWN}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.value}</Text>
              <View style={styles.divider} />
            </View>
          );
        }}
      />
    </View>
  );
};
const defaultInputPopupContent = () => {
  return (
    <View>
      {renderInputField('Enter Email', false)}
      {renderInputField('Enter Password', true)}
    </View>
  );
};
const renderInputField = (placeholder, secureTextEntry) => {
  return (
    <View style={styles.textInputView}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

//Default Props
Modal.defaultProps = {
  justifyContent: 'flex-end',
  secureTextEntry: false,
  basicPopupContent: defaultBasicPopup(),
  slidingPopupContent: defaultSlidingPopup(),
  fullScreenPopupContent: defaultFullScreenPopup(),
  inputPopupContent: defaultInputPopupContent(),
  closable: true,
};

export default Modal;
