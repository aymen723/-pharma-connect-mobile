import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import Walkthrough from "../Component/walkthrough";
import type { walk } from "../Models/walkthrough";
import { Link, router } from "expo-router";
import { Gstyles } from "../constants/theme";
import { StatusBar } from "expo-status-bar";

const walk: walk[] = [
  {
    id: 1,
    image: require("../../../assets/Images/image1.png"),
    title: "first title",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rationepraesentium facere voluptate quo incidunt obcaecati dolore quia, ad",
  },
  {
    id: 2,
    image: require("../../../assets/Images/image2.png"),
    title: "second title",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rationepraesentium facere voluptate quo incidunt obcaecati dolore quia, ad",
  },
];

export default function Launchpage() {
  const [index, setindex] = React.useState<number>(0);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white"></StatusBar>

      <View style={styles.box1}>
        <FlatList
          contentContainerStyle={styles.flatlist}
          data={walk}
          renderItem={({ item }) => (
            <Walkthrough
              id={item.id}
              image={item.image}
              text={item.text}
              title={item.title}
            ></Walkthrough>
          )}
          horizontal
          showsHorizontalScrollIndicator={true}
          pagingEnabled
        />
      </View>
      <View style={styles.box2}>
        <TouchableOpacity
          style={[Gstyles.Button, { backgroundColor: "#4157FF" }]}
          onPress={() => {
            router.push("/Signout");
          }}
        >
          <Text style={Gstyles.Buttontitle}>Skip</Text>
        </TouchableOpacity>

        <View style={{ display: "flex", flexDirection: "row" }}>
          {walk
            ? walk.map((e, index) => {
                return <Text key={index}>.</Text>;
              })
            : null}
        </View>

        <TouchableOpacity
          style={[Gstyles.Button, { backgroundColor: "#4157FF" }]}
          onPress={() => {
            if (index > 1) {
              console.log("here");
            } else {
              setindex(index + 1);
              console.log(index);
            }
          }}
        >
          <Text style={Gstyles.Buttontitle}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    // borderWidth: 1,
    // borderColor: "black",
    flex: 0.9,
  },
  box2: {
    // borderWidth: 1,
    // borderColor: "black",
    flex: 0.1,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  flatlist: {
    height: "100%",
  },
});
