import React from "react";
import { Stack, Tabs } from "expo-router";
import { COLORSS } from "../constants/theme";
import SearchHeader from "../Component/SearchHeader";
import Header from "../Component/Header";
import CartHeader from "../Component/CartHeader";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: "Search",
          // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "#fff",

          headerTitleStyle: {
            fontWeight: "bold",
          },
          header: (props) => <SearchHeader></SearchHeader>,
        }}
        name="Search"
      />
      <Stack.Screen
        options={{
          title: "Search",
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          header: (props) => <Header></Header>,
        }}
        name="ProductDescription"
      />
      <Stack.Screen
        options={{
          title: "Cart",
          header: (props) => <CartHeader title={"Your Cart"}></CartHeader>,
        }}
        name="Cart"
      />
    </Stack>
  );
}
