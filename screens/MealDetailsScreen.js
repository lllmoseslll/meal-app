import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../component/MealDetails";
import Subtitle from "../component/MealDetail/Subtitle";
import List from "../component/MealDetail/List";

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    
    function headerButtonPressHandler(){
        console.log('pressed');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Button title="tap me" onPress={headerButtonPressHandler} />
           }
       }) 
    },[navigation, headerButtonPressHandler])

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
          <MealDetails
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            textStyle={styles.detailText}
          />
        </View>
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>

            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>

            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  detailText: {
    color: "white",
    },
  rootContainer: {
    marginBottom: 32,
  }
});
