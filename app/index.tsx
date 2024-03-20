import React, { useState } from "react";
import { Redirect } from "expo-router";

export default function App() {
  const [user, setuser] = useState<string>("test");

  function test() {
    if (user.match("test")) {
      return <Redirect href={"/src/tabs"} />;
    } else {
      return <Redirect href={"/src/landingpages"} />;
    }
  }

  return test();
}
