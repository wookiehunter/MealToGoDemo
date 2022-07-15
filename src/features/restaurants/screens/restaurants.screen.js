import React from "react";
import styled from "styled-components/native";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  View,
} from "react-native";
import { ActivityIndicator, Colors, Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component.js";
import { useContext } from "react";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const RestaurantSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantSearch = styled(Searchbar)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <RestaurantSafeAreaView>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.red800} />
        </LoadingContainer>
      )}
      <View style={styles.search}>
        <RestaurantSearch placeholder="Search" />
      </View>
      <View style={styles.results}>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            console.log("Item is: ", item);
            return <RestaurantInfoCard restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      </View>
    </RestaurantSafeAreaView>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: "white",
    padding: 16,
  },
  results: {
    flex: 1,
    backgroundColor: "white",
  },
});
