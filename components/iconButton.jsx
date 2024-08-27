import { View, Image, TouchableWithoutFeedback, Animated } from "react-native";
import { useRef } from "react";
import arrow from "../assets/images/arrow.png";

export const IconButton = ({ navigation }) => {
  const bigSmallAnim = useRef(new Animated.Value(0)).current;
  const big = () => {
    Animated.sequence([
      Animated.timing(bigSmallAnim, {
        toValue: 20,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(bigSmallAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const animationStyle = {
    transform: [{ scale: bigSmallAnim }],
  };
  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        zIndex: 1,
        marginLeft: 2,
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          big();
          navigation.goBack();
        }}
      >
        <View
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            height: 20,
            width: 20,
          }}
        >
          <Image
            style={{ height: 20, width: 20, borderRadius: 10 }}
            source={arrow}
          />
          <Animated.View
            style={[
              {
                position: "absolute",
                height: 1,
                width: 1,
                backgroundColor: "rgb(30,41,59)",
                zIndex: -1,
                borderRadius: 10,
              },
              animationStyle,
            ]}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
