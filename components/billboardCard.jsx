import { View, Text } from "react-native";

export const BilboardCard = ({ data }) => {
  return (
    <View
      style={{
        height: 350,
        backgroundColor: "blue",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View style={{ width: 321, height: "100%", backgroundColor: "green" }}>
        <View
          style={{ width: "100%", height: "66.666%", backgroundColor: "red" }}
        ></View>
        <View style={{ width: "100%", flex: 1, backgroundColor: "black" }}>
          <Text style={{ color: "white", fontFamily: "Poppins-Black" }}>
            {data.title}
          </Text>
          <Text style={{ color: "white", fontFamily: "Poppins-Light" }}>
            {data.artist}
          </Text>
        </View>
      </View>
    </View>
  );
};
