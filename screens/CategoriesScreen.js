import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryGridTile from "../component/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = () => {
  function renderCategoryItem(itemData) {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  }
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
