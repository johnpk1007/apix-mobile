import { View, Text, Image, TouchableHighlight } from "react-native";
import arrow from "../assets/images/arrow.png";

export const IconButton = ({ navigation }) => {
  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        zIndex: 1,
        marginLeft: 2,
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <TouchableHighlight
        onPress={() => navigation.goBack()}
        underlayColor={"rgb(30,41,59)"}
      >
        <Image
          style={{ height: 20, width: 20, borderRadius: 10 }}
          source={arrow}
        />
      </TouchableHighlight>
    </View>
  );
};
