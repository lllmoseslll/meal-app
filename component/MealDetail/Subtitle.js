import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fdd76f",
  },
  subTitleContainer: {
    marginVertical: 6,
    marginHorizontal: 36,
    padding: 6,
    borderBottomColor: "#fdd76f",
    borderBottomWidth: 2,
  },
});
