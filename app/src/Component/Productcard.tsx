import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { ProductRespData } from "../client/types/responses/StockResponses";
import { SHADOWS, COLORSS } from "../constants/theme";

export default function Productcard({ item }: { item: ProductRespData }) {
  return (
    <TouchableOpacity
      key={item.id}
      onPress={() => {
        router.push({
          pathname: `/src/Screens/ProductDescription`,
          params: {
            id: item.id,
            name: item.name,
          },
        });
      }}
      activeOpacity={0.8}
      style={[styles.conatiner, { ...SHADOWS.small }]}
    >
      <View style={styles.imagebox}>
        <Image source={{ uri: item.picture }} style={styles.image}></Image>
      </View>
      <View style={styles.contentbox}>
        <View style={styles.title}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              // padding: 5,
              color: COLORSS.textcolor,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              // padding: 5,
              color: "gray",
            }}
          >
            Dz {item.price}
          </Text>
        </View>
        {/* <ScrollView horizontal style={styles.tagscontainer}>
          {item.tags.map((item) => {
            return (
              <View style={styles.tags} key={item.id}>
                <Text
                  style={{ color: "white", fontSize: 12, fontWeight: "600" }}
                >
                  {item.name}
                </Text>
              </View>
            );
          })}
        </ScrollView> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    width: 185,
    height: 230,

    borderRadius: 15,
    backgroundColor: "white",
  },
  imagebox: {
    borderRadius: 15,
    flex: 0.7,
    backgroundColor: "#EEEEF0",
    // backgroundColor: "white",
  },
  contentbox: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    borderRadius: 40,
  },
  tagscontainer: {
    borderWidth: 1,
    borderColor: "red",
    // display: "flex",
    // flexDirection: "row",
    width: "100%",
    height: "40%",
    borderRadius: 10,
  },
  tags: {
    backgroundColor: "lightgray",
    borderRadius: 5,
    paddingHorizontal: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 2,
  },
  title: {
    // borderWidth: 1,
    // borderColor: "green",
    width: "90%",
    height: "60%",
  },
});
