import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Open Fashion" }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: "Checkout" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
