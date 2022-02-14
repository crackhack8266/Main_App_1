import React from 'react';
import Constants from '../../../constants';
import CustomButton from '../../Button';

const ModalFooter = ({setState}) => {
  return (
    <CustomButton
      button_title={Constants.APPLYFILTER.toUpperCase()}
      navigator={'null'}
      route={'null'}
      setState={setState}
      isNavigation={false}
      width={'342px'}
      bgColor="#4e4e4e"
      icon={null}
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
