import React, { useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useNavigation,
  useRouter,
  useLocalSearchParams,
  router,
} from "expo-router";
import {
  PharmacyRespData,
  ProductRespData,
} from "../client/types/responses/StockResponses";
import Entypo from "@expo/vector-icons/Entypo";
import { fetchPharmaciesByFilter } from "../client/api/stockService/pharmacyApi";
import { fetchProductById } from "../client/api/stockService/productApi";
import { Page } from "../client/types/responses";
import { LocationObject } from "expo-location";
import * as Location from "expo-location";
import { COLORSS, Gstyles, SHADOWS } from "../constants/theme";
export default function MapSearch() {
  const params = useLocalSearchParams();
  const { ProductID } = params;
  const [Pharmcaies, SetPharmacies] = useState<
    Page<PharmacyRespData> | undefined
  >();
  const [loc, setLocation] = useState<LocationObject | undefined>();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [region, setregion] = useState<Region | undefined>();

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

  function Regionchange(e: Region) {
    setregion(e);
  }

  function HundelPharmcay(item: PharmacyRespData) {
    console.log(item);
    // fetchPharmacyById(item.id).then((res) => {
    //   console.log(res.data);
    //   SetPharmacy(res.data);
    // });
  }
  useEffect(() => {
    GetLocation();
    console.log("location fetched here ", loc);
    fetchPharmaciesByFilter({
      products: ProductID,
      x: loc?.coords.longitude,
      y: loc?.coords.latitude,
    })
      .then((res) => {
        console.log("here in fetch", res.data);
        SetPharmacies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          style={styles.backButton}
        >
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Entypo name="menu" size={24} color={COLORSS.Green} />
        </TouchableOpacity>
      </>
      {loc ? (
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
            // console.log(e);
          }}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          showsMyLocationButton
          showsBuildings
          mapType={"standard"}
        >
          {Pharmcaies
            ? Pharmcaies.content.map((item: PharmacyRespData) => {
                return (
                  <Marker
                    coordinate={{
                      latitude: item.location.coordinates.y,
                      longitude: item.location.coordinates.x,
                    }}
                    key={item.id}
                    onPress={() => {
                      HundelPharmcay(item);
                    }}
                    title={item.name}
                    icon={require("../../assets/Images/download.png")}
                  ></Marker>
                );
              })
            : null}
        </MapView>
      ) : (
        <View
          style={[
            Gstyles.container,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <ActivityIndicator color="green" size={"large"}></ActivityIndicator>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "white",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.small,
  },
  menuButton: {
    position: "absolute",
    bottom: 70,
    right: 30,
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    ...SHADOWS.small,
  },
});
