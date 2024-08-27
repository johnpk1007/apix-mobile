import { useContext, useRef, useState } from "react";
import { router, usePathname } from "expo-router";
import { View, Text, TouchableWithoutFeedback, Animated } from "react-native";

export const ArtistLinkButton = ({ artist, extra }) => {
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const bigAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const big = (event) => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(position, {
          toValue: {
            x: event.nativeEvent.locationX,
            y: event.nativeEvent.locationY,
          },
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.8,
          duration: 0,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(bigAnim, {
          toValue: 100,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      position.setValue({ x: 0, y: 0 });
      bigAnim.setValue(1);
      opacityAnim.setValue(0);
    });
  };
  const animationStyle = {
    transform: [
      { translateX: position.x },
      { translateY: position.y },
      { scale: bigAnim },
    ],
    opacity: opacityAnim,
  };

  const createRipple = (event) => {
    big(event);
  };

  const handleClick = (event) => {
    createRipple(event);
    router.push(`/artist/${artist}`);
  };
  return (
    <View
      style={{
        borderRadius: 15,
        overflow: "hidden",
      }}
    >
      <TouchableWithoutFeedback onPress={handleClick}>
        <View
          style={{
            position: "relative",
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins-Light",
              fontSize: 16,
            }}
          >
            {extra}
            {extra === "Featuring" ||
            extra === "&" ||
            extra === "X" ||
            extra === "x"
              ? " "
              : ""}
            {artist}
          </Text>
          <Animated.View
            style={[
              {
                position: "absolute",
                height: 5,
                width: 5,
                backgroundColor: "white",
                zIndex: 1,
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
