import React from 'react';
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
} from 'react-native';
import styles from './styles';

import Constants from 'constants/';

const Modal = ({
  setShowModal,
  modalActive,
  title,
  justifyContent,
  popupViewStyle,
  basicPopupContent,
  slidingPopupContent,
  fullScreenPopupContent,
  inputPopupContent,
}) => {
  const renderCloseModalIcon = setShowModal => {
    return (
      <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
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

  const renderSwitchCase = (
    setShowModal,
    modalActive,
    basicPopupContent,
    slidingPopupContent,
    inputPopupContent,
    fullScreenPopupContent,
  ) => {
    switch (modalActive.type) {
      case 'basicPopup':
        return (
          <>
            {basicPopupContent}
            {renderModalButtons(setShowModal)}
          </>
        );
      case 'slidingPopup':
        return <>{slidingPopupContent}</>;
      case 'fullScreenPopup':
        return <>{fullScreenPopupContent}</>;
      case 'loginPopup':
        return (
          <>
            <Text style={{marginVertical: '7%'}}>
              Please Enter your email id and password below
            </Text>
            {inputPopupContent}
            {renderModalButtons(setShowModal)}
          </>
        );
      default:
        break;
    }
  };

  return (
    <View style={[styles.modalView, {justifyContent: justifyContent}]}>
      <View style={[popupViewStyle, styles.commanStyle]}>
        {renderCloseModalIcon(setShowModal)}
        <Text style={styles.popupTitle}>{title}</Text>
        {renderSwitchCase(
          setShowModal,
          modalActive,
          basicPopupContent,
          slidingPopupContent,
          inputPopupContent,
          fullScreenPopupContent,
        )}
      </View>
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
