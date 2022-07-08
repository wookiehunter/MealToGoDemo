import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component.js";

const RestaurantSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantSearch = styled(Searchbar)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <RestaurantSafeAreaView>
    <View style={styles.search}>
      <RestaurantSearch placeholder="Search" />
    </View>
    <View style={styles.results}>
      <RestaurantInfoCard />
    </View>
  </RestaurantSafeAreaView>
);

const styles = StyleSheet.create({
  search: {
    backgroundColor: "white",
    padding: 16,
  },
  results: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
});
