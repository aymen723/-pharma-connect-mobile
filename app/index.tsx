import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [user, setuser] = useState<string>("az");

  async function CheckUser() {
    const value = await AsyncStorage.getItem("@user");
  }

  useEffect(() => {});

  function test() {
    if (user.match("test")) {
      return <Redirect href={"/src/tabs"} />;
    } else {
      return <Redirect href={"/src/(auth)"} />;
    }
  }

  return test();
}
