import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Gstyles } from "../constants/theme";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import * as Location from "expo-location";
import { LocationObject } from "expo-location";
import { StatusBar } from "expo-status-bar";
import { listmarkers, pharmacyData } from "./markers";
export default function Map() {
  const [loc, setLocation] = useState<LocationObject | undefined>();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [region, setregion] = useState<Region | undefined>();

  function Regionchange(e: Region) {
    // console.log(e);
    setregion(e);
  }
  async function GetLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    console.log(location);
    console.log(location.coords.altitude);
    console.log(location.coords.longitude);
    setLocation(location);
  }

  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  useEffect(() => {
    GetLocation();
  }, []);
  return (
    <>
      {loc ? (
        <View style={Gstyles.container}>
          <MapView
            initialRegion={{
              latitude: loc.coords.latitude,
              longitude: loc.coords.longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
            region={region}
            onRegionChangeComplete={(e) => {
              Regionchange(e);
            }}
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            showsMyLocationButton
            showsBuildings
            mapType={"standard"}
          >
            {pharmacyData.map((item, index) => {
              return (
                <Marker
                  coordinate={item}
                  key={index}
                  onPress={() => {}}
                  title={item.title}
                  description="test"
                  icon={require("../../../assets/Images/download.png")}
                />
              );
            })}
          </MapView>
        </View>
      ) : (
        <View style={Gstyles.container}>
          <ActivityIndicator size={"large"}></ActivityIndicator>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
