import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Dun King",
    icon,
    photos = [
      "https://img.freepik.com/free-photo/grilled-beef-steak-with-fries-grilled-tomato-pepper-sauces_140725-10545.jpg?t=st=1657118890~exp=1657119490~hmac=9ac122a7858b34820d26547e91e93ad4706ea00ecd5bc9432728fc12f9139e0a&w=996",
    ],
    rating = 3,
    address = "1600 Some Shitty Road",
    isOpenNow = true,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Card.Title title={name} subtitle={address} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 0, backgroundColor: "white" },
});
