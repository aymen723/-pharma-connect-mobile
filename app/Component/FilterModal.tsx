import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { COLORSS, SHADOWS, deviceWidth } from "../constants/theme";
import { Slider } from "@rneui/themed";
// import { Locate } from "lucide-react-native";
import Modal from "react-native-modal";

export default function FilterModal({ Visible, Range, Statevisible }) {
  const [RangeSlider, SetRange] = useState(0);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  function hundelRange(e) {
    SetRange(e);
    Range(e);
  }
  function HundelModal() {
    setModalVisible(false);
    Visible(false);
  }
  return (
    <Modal
      deviceWidth={deviceWidth}
      style={Modalstyles.Modal}
      isVisible={Statevisible}
      backdropOpacity={0.1}
      hasBackdrop={true}
      // onSwipeComplete={() => setModalVisible(false)}
      onBackButtonPress={() => HundelModal()}
      onBackdropPress={() => HundelModal()}
    >
      <View style={Modalstyles.container}>
        <View
          style={{
            height: 4,
            width: 60,
            backgroundColor: COLORSS.Green,
            borderRadius: 10,
            margin: 15,
          }}
        ></View>

        <View style={Modalstyles.input}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray" }}>
            Range
          </Text>
          <Slider
            value={RangeSlider}
            onValueChange={hundelRange}
            maximumValue={5000}
            minimumValue={0}
            step={1}
            allowTouchTrack
            style={Modalstyles.slider}
            orientation="horizontal"
            trackStyle={{ height: 5, backgroundColor: "black" }}
            thumbStyle={{
              height: 30,
              width: 30,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              shadowColor: SHADOWS.small.shadowColor,
              shadowOffset: SHADOWS.small.shadowOffset,
              shadowOpacity: SHADOWS.small.shadowOpacity,
              shadowRadius: SHADOWS.small.shadowOpacity,
              elevation: SHADOWS.small.elevation,
            }}
            // thumbProps={{
            //   children: <Locate size={20} color="#f50" />,
            // }}
          />
        </View>
      </View>
    </Modal>
  );
}
const Modalstyles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: 300,
    backgroundColor: "white",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    // justifyContent: "center",
    alignItems: "center",
  },
  Modal: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 0,
  },
  input: {
    width: "100%",
    height: 70,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  slider: {
    // color: "black",
    // backgroundColor: "gray",
    width: "75%",
  },
});
