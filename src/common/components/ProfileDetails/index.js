import React from 'react';
import {View, Text} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import styles from './styles';
import Constants from '../../constants';

export const ProfileDetails = ({title, value}) => {
  function render2Column1RowLayout(title) {
    if (
      title == Constants.COLUMN2ROW1IDENTIFICATIONSTRING1 ||
      title == Constants.COLUMN2ROW1IDENTIFICATIONSTRING2
    ) {
      return (
        <View style={styles.dottedline}>
          <DashedLine
            dashLength={2}
            dashColor="#dfdfdf"
            dashGap={2}
            dashStyle={{borderRadius: 5}}
            dashThickness={2}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.dottedLineFullWidth}>
          <DashedLine
            dashLength={2}
            dashColor="#dfdfdf"
            dashGap={2}
            dashStyle={{borderRadius: 5}}
            dashThickness={2}
          />
        </View>
      );
    }
  }

  return (
    <View style={styles.parentContainer}>
      <Text style={styles.detailTextTitle}>{title}</Text>
      <Text style={styles.detailTextValue}>{value}</Text>

      {render2Column1RowLayout(title)}
    </View>
  );
};
