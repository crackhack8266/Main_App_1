import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Constants from '../../../constants';
import {CustomButton} from '../../Button';

const ModalFooter = ({setState}) => {
  return (
    <CustomButton
      button_title={Constants.APPLYFILTER}
      navigator={'null'}
      route={'null'}
      type="primary"
      setState={setState}
      isNavigation={false}
      viewstyleprop={{
        backgroundColor: '#4e4e4e',
        width: 342,
      }}
      textstyleprop={{
        color: '#fff',
        fontFamily: 'ProximaNova-Bold',
      }}
    />
  );
};

export default ModalFooter;
{
  /*<TouchableOpacity
  onPress={() => {
    setState(false);
  }}>
  <View style={styles.applyFilterView}>
    <Text style={styles.buttonTextForFilter}>
      {Constants.APPLYFILTER.toUpperCase()}
    </Text>
  </View>
</TouchableOpacity>*/
}
