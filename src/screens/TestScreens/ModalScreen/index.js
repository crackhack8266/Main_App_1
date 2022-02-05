import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import Constants from 'constants/';
import styles from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Modal from 'components/Modal';
import {TextInput} from 'react-native-gesture-handler';

const ModalScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [credentials, setCredentials] = useState('');
  const [modalActive, setModalActive] = useState([]);

  const title = 'Modal';

  const basicPopupContent = [
    <Text>
      {' '}
      Hello This is basic popup part. this is some random information.
    </Text>,
  ];

  const slidingPopupContent = [
    <View style={{flexDirection: 'row'}}>
      <View style={styles.slidingPopupStyle}>
        <Image
          source={require('images/checkmark.png')}
          style={styles.checkMarkImageStyle}
        />
      </View>
      <View>
        <Text style={styles.stylingPopupText}>
          This is random text. Also, this is an information modal showing you
          some related information
        </Text>
      </View>
    </View>,
  ];

  const inputPopupContent = [
    <View>
      <TextInput
        onChangeText={setCredentials}
        style={styles.textInput}
        placeholder="Enter Your Name"
      />
    </View>,
  ];

  const fullScreenPopupContent = [
    <FlatList
      data={Constants.profileDetailsProps}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <View>
            <Text> {item.label}</Text>
            <View style={styles.divider} />
          </View>
        );
      }}
    />,
  ];

  const renderButtons = () => {
    return Constants.MODAL_TYPE.map(item => {
      return (
        <View style={styles.popup}>
          <TouchableOpacity
            onPress={() => {
              setShowModal(true),
                setModalActive({id: item.id, type: item.type});
            }}>
            <Text style={styles.popupText}>Show Popup</Text>
          </TouchableOpacity>
        </View>
      );
    });
  };
  const ItemBox = ({item, setShowModal}) => {
    const leftSwipe = () => {
      return (
        <TouchableOpacity
          onPress={() => {
            setShowModal(true);
            setModalActive({id: item.id, type: item.type});
          }}>
          <View style={styles.leftSwipe}>
            <Text style={styles.leftSwipeText}>Open Modal</Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <Swipeable renderLeftActions={leftSwipe}>
        <View style={styles.leftSwipeContainer}>
          <Text>{item.type}</Text>
          <View style={[styles.divider, {marginTop: '5%'}]} />
        </View>
      </Swipeable>
    );
  };
  const renderList = () => {
    return (
      <FlatList
        data={Constants.MODAL_TYPE}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <ItemBox item={item} setShowModal={setShowModal} />;
        }}
      />
    );
  };

  const modalForBasicPopup = setShowModal => {
    return (
      <Modal
        setShowModal={setShowModal}
        modalActive={modalActive}
        title={title}
        justifyContent={'center'}
        popupViewStyle={styles.popupViewStyle}
        basicPopupContent={basicPopupContent}
      />
    );
  };
  const modalForSlidingPopup = setShowModal => {
    return (
      <Modal
        setShowModal={setShowModal}
        modalActive={modalActive}
        title={title}
        justifyContent={'flex-end'}
        popupViewStyle={styles.slidingViewStyle}
      />
    );
  };
  const modalForFullScreenPopup = setShowModal => {
    return (
      <Modal
        setShowModal={setShowModal}
        modalActive={modalActive}
        title={title}
        justifyContent={'flex-start'}
        popupViewStyle={styles.fullScreenViewStyle}
        fullScreenPopupContent={fullScreenPopupContent}
      />
    );
  };
  const modalForLoginPopup = setShowModal => {
    return (
      <Modal
        setShowModal={setShowModal}
        modalActive={modalActive}
        title={title}
        justifyContent={'center'}
        popupViewStyle={styles.popupViewStyle}
        inputPopupContent={inputPopupContent}
      />
    );
  };

  const selectPopupModal = (modalActive, setShowModal) => {
    if (modalActive.type == 'basicPopup')
      return modalForBasicPopup(setShowModal);
    if (modalActive.type == 'slidingPopup')
      return modalForSlidingPopup(setShowModal);
    if (modalActive.type == 'fullScreenPopup')
      return modalForFullScreenPopup(setShowModal);
    return modalForLoginPopup(setShowModal);
  };

  return (
    <View style={styles.containerView}>
      {renderButtons()}
      <View style={styles.listStyle}>{renderList()}</View>

      {showModal && selectPopupModal(modalActive, setShowModal)}
    </View>
  );
};
// justifyContent:"center" || "flex-end" || "flex-start"
// popupViewStyle: width-60% and height auto for basic and login popup
// popupViewStyle: width 100% and height auto for sliding popup
// popupViewStyle: width-100% and height 100% for fullscreenpopup
export default ModalScreen;
