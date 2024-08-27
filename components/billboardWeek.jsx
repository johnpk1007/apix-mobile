import { View, Text } from "react-native";
import { TextSkeleton } from "./skeleton";

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
        {billboardWeek ? (
          billboardWeek
        ) : (
          <TextSkeleton width={150} height={10} borderRadius={10} />
        )}
      </Text>
    </View>
  );
};
