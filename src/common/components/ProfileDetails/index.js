import React from 'react';
import {View, Text} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import styles from './styles';
import Constants from '../../constants';

export const ProfileDetails = ({title, value}) => {
  const convertedText1 =
    Constants.COLUMN2ROW1IDENTIFICATIONSTRING1.charAt(0).toUpperCase() +
    title.slice(1);
  const convertedText2 =
    Constants.COLUMN2ROW1IDENTIFICATIONSTRING2.charAt(0).toUpperCase() +
    title.slice(1);
  const renderDottedLine = title => {
    if (title == convertedText1 || title == convertedText2) {
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
  };

  return (
    <View style={styles.parentContainer}>
      <Text style={styles.detailTextTitle}>{title}</Text>
      <Text style={styles.detailTextValue}>{value}</Text>

      {renderDottedLine(title)}
    </View>
  );
};
