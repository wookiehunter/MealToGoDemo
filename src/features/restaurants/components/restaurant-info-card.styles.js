import React from "react";
import styled from "styled-components/native";
import { Card, Title, Paragraph } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: 0;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const RestaurantCardTitle = styled(Title)`
  color: ${(props) => props.theme.colors.text.secondary};
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const StarsContainer = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.View`
  flex-direction: row;
`;

export const RestaurantCardParagraph = styled(Paragraph)`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
`;
