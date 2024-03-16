import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName="Home"
    >
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="Notification" />
      <Tabs.Screen name="Services" />
      <Tabs.Screen name="Account" />
    </Tabs>
  );
}
