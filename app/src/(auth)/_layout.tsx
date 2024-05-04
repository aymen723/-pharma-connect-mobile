import { Stack } from "expo-router";
import React from "react";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" />
      <Stack.Screen name="Signin" />
    </Stack>
  );
}
