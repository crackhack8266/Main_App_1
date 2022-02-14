import React from 'react';
import {View, Text, Image} from 'react-native';

import DashedLine from 'react-native-dashed-line';
import styles from './styles';

const renderDivider = () => {
  return (
    <View style={styles.divider}>
      <DashedLine
        dashLength={2}
        dashColor="#e2e2e2"
        dashGap={2}
        dashStyle={{borderRadius: 5}}
        dashThickness={2}
      />
    </View>
  );
};
const Goals = ({title, img}) => {
  if (img == 'checkmark') {
    return (
      <>
        <View style={styles.goalsView}>
          <Text style={styles.goalsTitle}>{title}</Text>
          <View
            style={[styles.ticks, {borderColor: '#338f6c', marginLeft: 84}]}>
            <Image
              source={require('../../assets/checkmark.png')}
              style={styles.greenTickImage}
            />
          </View>
          <View style={styles.infoView}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                alignSelf: 'center',
                marginBottom: 2,
                marginRight: 1,
                fontFamily: 'Merriweather-BoldItalic',
              }}>
              i
            </Text>
          </View>
        </View>
        {renderDivider()}
      </>
    );
  } else if (img == 'equivalent') {
    return (
      <>
        <View style={styles.goalsView}>
          <Text style={styles.goalsTitle}>{title}</Text>
          <View
            style={[styles.ticks, {borderColor: '#ecb622', marginLeft: 155.5}]}>
            <Text style={styles.equivalent}>~</Text>
          </View>
          <View style={styles.infoView}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                alignSelf: 'center',
                marginBottom: 2,
                marginRight: 1,
                fontFamily: 'Merriweather-BoldItalic',
              }}>
              i
            </Text>
          </View>
        </View>
        {renderDivider()}
      </>
    );
  } else if (img == 'close') {
    return (
      <View style={styles.goalsView}>
        <Text style={styles.goalsTitle}>{title}</Text>
        <View style={[styles.ticks, {borderColor: '#f74545', marginLeft: 126}]}>
          <Image
            source={require('../../assets/close.png')}
            style={{width: 8.3, height: 8.3}}
          />
        </View>
        <View style={styles.infoView}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              alignSelf: 'center',
              marginBottom: 2,
              marginRight: 1,
              fontFamily: 'Merriweather-BoldItalic',
            }}>
            i
          </Text>
        </View>
      </View>
    );
  }
};

export default Goals;
