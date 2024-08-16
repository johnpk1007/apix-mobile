import { View, Text } from "react-native";
export const BilboardWeek = ({ billboardWeek }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        bottom: 0,
        right: 0,
        alignItems: "flex-end",
        marginRight: 3,
      }}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "Poppins-Black",
          textAlign: "right",
          fontSize: 14,
          height: 20,
        }}
      >
        Billboard Hot 100
      </Text>
      <Text
        style={{
          color: "white",
          fontFamily: "Poppins-SemiBold",
          fontSize: 14,
          textAlign: "right",
          height: 20,
        }}
      >
        {billboardWeek}
      </Text>
    </View>
  );
};
