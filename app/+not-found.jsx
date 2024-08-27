import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import { Unmatched } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import faceless from "../assets/images/faceless.png";

export default function NotFoundScreen() {
  return (
    <SafeAreaView
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <View style={{ width: 250, display: "flex", flexDirection: "row" }}>
        <View
          style={{
            width: "50%",
            aspectRatio: 1 / 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={faceless}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{ color: "white", fontFamily: "Poppins-Bold", fontSize: 25 }}
          >
            404
          </Text>
          <Text
            style={{
              color: "rgb(148,163,184)",
              fontFamily: "Poppins-ExtraLight",
              fontSize: 10,
            }}
          >
            Page not found
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
