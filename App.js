import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant-screen.js";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
