import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';

const Modal = ({
  setShowModal,
  credentials,
  setCredentials,
  modalActive,
  setModalActive,
  informationModal,
  listModal,
  title,
  content,
}) => {
  // 1. Popup Modal

  const renderPopupModal = (setShowModal, title, content) => {
    return (
      <View style={styles.popupView}>
        {renderTitleAndContent(setShowModal, title, content)}
        {renderCloseModalButtons(setShowModal)}
      </View>
    );
  };

  // 2. Popup Modal 2 - Comming up from bottom

  const renderPopupModal2 = (setShowModal, title) => {
    return (
      <View style={styles.popupView2}>
        {renderCloseModalIcon(setShowModal)}
        <Text style={styles.popupTitle}>{title}</Text>
        {informationModal}
      </View>
    );
  };

  // 3. Popup Modal 3 - Comming up from bottom (fullscreen)

  const renderPopupModal3 = (setShowModal, title) => {
    return (
      <View style={styles.popupView3}>
        {renderCloseModalIcon(setShowModal)}
        <Text style={styles.popupTitle}>{title}</Text>
        {listModal}
      </View>
    );
  };

  // 4. Popup Modal 4 - Login - Password

  const renderPopupModal4 = (
    setShowModal,
    credentials,
    setCredentials,
    title,
    content,
  ) => {
    return (
      <KeyboardAvoidingView
        style={{
          width: '65%',
        }}>
        <View style={styles.popupView4}>
          {renderTitleAndContent(setShowModal, title, content)}
          <View style={{marginBottom: '10%'}}>
            {renderInputField(setCredentials)}
            {renderInputField(setCredentials)}
          </View>

          {renderCloseModalButtons(setShowModal)}
        </View>
      </KeyboardAvoidingView>
    );
  };

  // Utilities
  const renderInputField = setCredentials => {
    return (
      <View style={{marginHorizontal: 10, marginTop: 5}}>
        <TextInput
          onChangeText={setCredentials}
          style={{borderColor: 'black', borderWidth: 1}}
          placeholder="Enter Here"
        />
      </View>
    );
  };

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
  const renderCloseModalButtons = setShowModal => {
    return (
      <View style={styles.popupCloseButtons}>
        <Text
          style={styles.buttonTextStyle}
          onPress={() => setShowModal(false)}>
          Cancel
        </Text>
        <Text
          style={[styles.buttonTextStyle, {borderBottomRightRadius: 8}]}
          onPress={() => setShowModal(false)}>
          Ok
        </Text>
      </View>
    );
  };
  const renderTitleAndContent = (setShowModal, title, content) => {
    return (
      <>
        {renderCloseModalIcon(setShowModal)}
        <Text style={styles.popupTitle}>{title}</Text>
        <Text style={styles.popupContent}>{content}</Text>
      </>
    );
  };
  const renderSwitchCase = (
    setShowModal,
    credentials,
    setCredentials,
    modalActive,
    setModalActive,
    title,
    content,
  ) => {
    switch (modalActive.type) {
      case 'basicPopup':
        return (
          <View style={[styles.modalView, {justifyContent: 'center'}]}>
            {renderPopupModal(setShowModal, title, content)}
          </View>
        );
        break;
      case 'slidingPopup':
        return (
          <View style={[styles.modalView, {justifyContent: 'flex-end'}]}>
            {renderPopupModal2(setShowModal, title)}
          </View>
        );
        break;
      case 'fullScreenPopup':
        return (
          <View style={styles.modalView}>
            {renderPopupModal3(setShowModal, title)}
          </View>
        );
        break;
      case 'loginPopup':
        return (
          <View style={[styles.modalView, {justifyContent: 'center'}]}>
            {renderPopupModal4(
              setShowModal,
              credentials,
              setCredentials,
              title,
              content,
            )}
          </View>
        );
        break;

      default:
        break;
    }
  };

  return renderSwitchCase(
    setShowModal,
    credentials,
    setCredentials,
    modalActive,
    setModalActive,
    title,
    content,
  );
};

Modal.defaultProps = {};

export default Modal;
