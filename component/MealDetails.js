import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetails = ({ duration, complexity, affordability, style, textStyle }) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>Duration: {duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        Complexity: {complexity.toUpperCase()}
      </Text>
      <Text style={(styles.detailItem, textStyle)}>
        Affordability: {affordability.toUpperCase()}{" "}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
