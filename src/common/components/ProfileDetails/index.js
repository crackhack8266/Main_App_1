import React from 'react';
import {View, Text} from 'react-native';
import DashedLine from 'react-native-dashed-line';
import styles from './styles';

export const ProfileDetails = ({title, value}) => {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.detailTextTitle}>{title}</Text>
      <Text style={styles.detailTextValue}>{value}</Text>
      {title == 'Age' || title == 'Sex' ? (
        <View style={styles.dottedline}>
          <DashedLine
            dashLength={2}
            dashColor="#dfdfdf"
            dashGap={2}
            dashStyle={{borderRadius: 5}}
            dashThickness={2}
          />
        </View>
      ) : (
        <View style={styles.dottedLineFullWidth}>
          <DashedLine
            dashLength={2}
            dashColor="#dfdfdf"
            dashGap={2}
            dashStyle={{borderRadius: 5}}
            dashThickness={2}
          />
        </View>
      )}
    </View>
  );
};
