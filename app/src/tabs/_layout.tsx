import React, { useState } from "react";
import { Tabs } from "expo-router";
import { Home } from "lucide-react-native";
import { Settings } from "lucide-react-native";
import Header from "../Component/Header";
import AccountHeader from "../Component/AccountHeader";
import MapHeader from "../Component/MapHeader";
import { Button } from "react-native";
import { Provider } from "react-redux";
import { store } from "../Redux/Store";
export default function HomeLayout() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
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
            headerShown: false,
            headerStyle: { backgroundColor: "white" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },

            // header: (props) => <MapHeader onModalToggle={props}></MapHeader>,
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
    </Provider>
  );
}
