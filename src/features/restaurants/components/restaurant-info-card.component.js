import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const RestaurantCard = styled(Card)`
  backgroundcolor: orangered;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 0;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantCardTitle = styled(Title)`
  color: ${(props) => props.theme.colors.text.secondary};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const RestaurantCardParagraph = styled(Paragraph)`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      {/* <Card.Title style={styles.text} title={name} subtitle={address} /> */}
      <Card.Content>
        <RestaurantCardTitle>{name}</RestaurantCardTitle>
        <RestaurantCardParagraph>{address}</RestaurantCardParagraph>
      </Card.Content>
    </RestaurantCard>
  );
};

// const styles = StyleSheet.create({
//   text: { color: "white" },
// });
