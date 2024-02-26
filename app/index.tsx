import { StyleSheet, Text, View, Image } from "react-native";
import Launchpage from "./src/Containers/landingpages/Launchpage";
import { StatusBar } from "expo-status-bar";
import MapView from "react-native-maps";

export default function Page() {
  return (
    <View style={styles.container}>
      <StatusBar
        style="light"
        backgroundColor="black"
        translucent={true}
        hidden={false}
      />
      <Text>azdazda</Text>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
