import React from "react";
import { Tabs } from "expo-router";
import { Home } from "lucide-react-native";
import { Settings } from "lucide-react-native";
import Header from "../Component/Header";
import AccountHeader from "../Component/AccountHeader";
import MapHeader from "../Component/MapHeader";
export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name == "Home") {
            return <Home color={"black"} size={20} />;
          } else {
            return <Settings color={"black"} size={20} />;
          }
        },

        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
      initialRouteName="Home"
    >
      <Tabs.Screen name="Home" />
      <Tabs.Screen
        name="Map"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          header: (props) => <MapHeader></MapHeader>,
        }}
      />
      <Tabs.Screen
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          header: (props) => <AccountHeader></AccountHeader>,
        }}
        name="Account"
      />
    </Tabs>
  );
}
