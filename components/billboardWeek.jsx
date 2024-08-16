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
        justifyContent: "center",
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
        }}
      >
        {billboardWeek}
      </Text>
    </View>
  );
};
