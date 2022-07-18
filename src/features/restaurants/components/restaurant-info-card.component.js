import React from "react";
import { Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star.js";
import open from "../../../../assets/open.js";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  RestaurantCardTitle,
  Row,
  StarsContainer,
  IconContainer,
  RestaurantCardParagraph,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = restaurant.name,
    icon = restaurant.icon,
    photos = [
      "https://img.freepik.com/free-photo/grilled-beef-steak-with-fries-grilled-tomato-pepper-sauces_140725-10545.jpg?t=st=1657118890~exp=1657119490~hmac=9ac122a7858b34820d26547e91e93ad4706ea00ecd5bc9432728fc12f9139e0a&w=996",
    ],
    rating = restaurant.rating,
    address = restaurant.vicinity,
    isOpenNow = true,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      {/* <Card.Title style={styles.text} title={name} subtitle={address} /> */}
      <Card.Content>
        <RestaurantCardTitle>{name}</RestaurantCardTitle>
        <Row>
          <StarsContainer>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </StarsContainer>
          <IconContainer>
            {isClosedTemporarily && (
              <Text variant="error">Closed Temporarily</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow ? <SvgXml xml={open} width={20} height={20} /> : null}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{ width: 20, height: 20 }} source={{ uri: icon }} />
            </Spacer>
          </IconContainer>
        </Row>
        <RestaurantCardParagraph>{address}</RestaurantCardParagraph>
      </Card.Content>
    </RestaurantCard>
  );
};

// const styles = StyleSheet.create({
//   text: { color: "white" },
// });
