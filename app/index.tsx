import { StyleSheet, Text, View, Image } from "react-native";
import Launchpage from "./src/Containers/landingpages/Launchpage";
import { StatusBar } from "expo-status-bar";
import MapView from "react-native-maps";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Page() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar backgroundColor="white"></StatusBar>
        <Launchpage></Launchpage>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
