import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import Constants from 'constants/';
import styles from './styles';
import Modal from 'components/Modal';

const ModalScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [credentials, setCredentials] = useState([]);
  const [modalActive, setModalActive] = useState([]);

  const title = 'Modal';
  const content =
    'This is an example of modal content. You can pass content using props';
  const InformationModal = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'column',
            alignSelf: 'center',
            marginHorizontal: 10,
          }}>
          <Image
            source={require('images/checkmark.png')}
            style={{width: 40, height: 40, resizeMode: 'contain'}}
          />
        </View>
        <View>
          <Text style={{fontSize: 20, marginRight: '15%'}}>
            This is random text. Also, this is an information modal showing you
            some related information
          </Text>
        </View>
      </View>
    );
  };

  const ListModal = () => {
    return (
      <FlatList
        data={Constants.NUTRITIONAL_VALUES_DROP_DOWN}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <Text> {item.label}</Text>
              <View
                style={{height: 1, backgroundColor: 'black', width: '100%'}}
              />
            </View>
          );
        }}
      />
    );
  };
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

  const renderList = () => {
    return (
      <FlatList
        data={Constants.profileDetailsProps}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View
              style={{
                marginVertical: '5%',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <Text>{item.title}</Text>
              <View
                style={{
                  height: 1,
                  backgroundColor: 'black',
                  width: '100%',
                  marginTop: '5%',
                }}
              />
            </View>
          );
        }}
      />
    );
  };

  return (
    <View style={styles.containerView}>
      {renderButtons()}
      <View
        style={{
          backgroundColor: '#fff',
          width: '60%',
          height: '20%',
          marginTop: '5%',
          alignSelf: 'center',
        }}>
        {renderList()}
      </View>

      {showModal && (
        <Modal
          setShowModal={setShowModal}
          credentials={credentials}
          setCredentials={setCredentials}
          modalActive={modalActive}
          setModalActive={setModalActive}
          informationModal={<InformationModal />}
          listModal={<ListModal />}
          title={title}
          content={content}
        />
      )}
      <Text>{credentials}</Text>
    </View>
  );
};

export default ModalScreen;
