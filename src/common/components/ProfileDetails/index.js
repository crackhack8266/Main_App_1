import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DashedLine from "react-native-dashed-line";

const ProfileDetails = ({ title, value }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detailvalue}>{value}</Text>
      {title == "Age" || title == "Sex" ? (
        <View style={styles.dottedline}>
          <DashedLine
            dashLength={2}
            dashColor="#dfdfdf"
            dashGap={2}
            dashStyle={{ borderRadius: 5 }}
            dashThickness={2}
          />
        </View>
      ) : (
        <View style={styles.dottedlinefull}>
          <DashedLine
            dashLength={2}
            dashColor="#dfdfdf"
            dashGap={2}
            dashStyle={{ borderRadius: 5 }}
            dashThickness={2}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    marginHorizontal: 13,
    marginVertical: 13,
  },
  dottedline: {
    width: 110,
    marginTop: 12.5,
  },
  dottedlinefull: {
    width: 320,
    marginTop: 12.5,
    marginRight: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 7,
    color: "#252122",
  },

  detailvalue: {
    fontSize: 14,
    color: "#747482",
  },
});

export default ProfileDetails;
