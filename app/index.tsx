import React, { useState } from "react";
import { Redirect } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [user, setuser] = useState<string>("test");

  function test() {
    if (user.match("a")) {
      return <Redirect href={"/src/tabs"} />;
    } else {
      return <Redirect href={"/src/landingpages"} />;
    }
  }

  return test();
}
