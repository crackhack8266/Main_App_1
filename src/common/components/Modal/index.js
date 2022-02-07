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
var globalWidth = 100;
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
}) => {
  const renderCloseModalIcon = (setShowModal, isOn, setIsOn) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          setIsOn(false),
            setTimeout(() => {
              setShowModal(false);
            }, 700);
        }}>
        <View>
          <Image
            source={require('images/close.png')}
            style={styles.closeIcon}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const textOfActionButtons = (actionbuttonText, setShowModal) => {
    return (
      <Text style={styles.buttonTextStyle} onPress={() => setShowModal(false)}>
        {actionbuttonText}
      </Text>
    );
  };
  const renderModalButtons = setShowModal => {
    return (
      <View style={styles.popupCloseButtons}>
        {textOfActionButtons('Cancel', setShowModal)}
        {textOfActionButtons('Ok', setShowModal)}
      </View>
    );
  };

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

  const renderSwitchCase = (
    isOn,
    setIsOn,
    popupViewStyle,
    setShowModal,
    modalActive,
    basicPopupContent,
    slidingPopupContent,
    inputPopupContent,
    fullScreenPopupContent,
    slideDirection,
  ) => {
    switch (modalActive.type) {
      case 'basicPopup':
        return (
          <>
            <SlideDirection
              popupViewStyle={popupViewStyle}
              slideDirection={slideDirection}>
              {renderCloseModalIcon(setShowModal, isOn, setIsOn)}
              <Text style={styles.popupTitle}>{title}</Text>
              {basicPopupContent}
              {renderModalButtons(setShowModal)}
            </SlideDirection>
          </>
        );
      case 'slidingPopup':
        return (
          <>
            <SlideDirection
              popupViewStyle={popupViewStyle}
              slideDirection={slideDirection}>
              {renderCloseModalIcon(setShowModal, isOn, setIsOn)}
              <Text style={styles.popupTitle}>{title}</Text>
              {slidingPopupContent}
            </SlideDirection>
          </>
        );
      case 'fullScreenPopup':
        return (
          <>
            <SlideDirection
              popupViewStyle={popupViewStyle}
              slideDirection={slideDirection}>
              {renderCloseModalIcon(setShowModal, isOn, setIsOn)}
              <Text style={styles.popupTitle}>{title}</Text>
              {fullScreenPopupContent}
            </SlideDirection>
          </>
        );
      case 'loginPopup':
        return (
          <>
            <SlideDirection
              popupViewStyle={popupViewStyle}
              slideDirection={slideDirection}>
              {renderCloseModalIcon(setShowModal, isOn, setIsOn)}
              <Text style={styles.popupTitle}>{title}</Text>
              <Text style={{marginVertical: '7%'}}>
                Please Enter your email id and password below
              </Text>
              {inputPopupContent}
              {renderModalButtons(setShowModal)}
            </SlideDirection>
          </>
        );
      default:
        break;
    }
  };
  const horizontalTranslation = useRef(
    isOn ? new Animated.Value(globalWidth) : new Animated.Value(0),
  ).current;

  const verticalTranslation = useRef(
    isOn
      ? globalHeight > 0
        ? new Animated.Value(globalHeight + 290)
        : new Animated.Value(globalHeight - 290)
      : new Animated.Value(0),
  ).current;
  Animated.timing(verticalTranslation, {
    toValue: isOn
      ? 0
      : globalHeight > 0
      ? globalHeight + 340
      : globalHeight - 340,
    useNativeDriver: true,
  }).start();

  Animated.timing(horizontalTranslation, {
    toValue: isOn ? 0 : globalWidth > 0 ? globalWidth + 90 : globalWidth - 90,
    useNativeDriver: true,
  }).start();

  return (
    <View style={[styles.modalView, {justifyContent: justifyContent}]}>
      {renderSwitchCase(
        isOn,
        setIsOn,
        popupViewStyle,
        setShowModal,
        modalActive,
        basicPopupContent,
        slidingPopupContent,
        inputPopupContent,
        fullScreenPopupContent,
        slideDirection,
      )}
    </View>
  );
};
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
Modal.defaultProps = {
  justifyContent: 'flex-end',
  secureTextEntry: false,
  basicPopupContent: defaultBasicPopup(),
  slidingPopupContent: defaultSlidingPopup(),
  fullScreenPopupContent: defaultFullScreenPopup(),
  inputPopupContent: defaultInputPopupContent(),
};

export default Modal;
