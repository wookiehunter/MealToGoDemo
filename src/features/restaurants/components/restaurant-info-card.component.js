import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, Image } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star.js";
import open from "../../../../assets/open.js";
import { Spacer } from "../../../components/spacer/spacer.component";

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

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const StarsContainer = styled.View`
  flex-direction: row;
`;

const IconContainer = styled.View`
  flex-direction: row;
`;

const RestaurantCardParagraph = styled(Paragraph)`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Dun King",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://img.freepik.com/free-photo/grilled-beef-steak-with-fries-grilled-tomato-pepper-sauces_140725-10545.jpg?t=st=1657118890~exp=1657119490~hmac=9ac122a7858b34820d26547e91e93ad4706ea00ecd5bc9432728fc12f9139e0a&w=996",
    ],
    rating = 4.5,
    address = "1600 Some Shitty Road",
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
              <Text variant="label" style={{ color: "orangered" }}>
                Closed Temporarily
              </Text>
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
