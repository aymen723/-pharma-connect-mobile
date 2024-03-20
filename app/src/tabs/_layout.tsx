import React from "react";
import { Tabs } from "expo-router";

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
      <Tabs.Screen name="Cart" />
      <Tabs.Screen name="Account" />
    </Tabs>
  );
}
