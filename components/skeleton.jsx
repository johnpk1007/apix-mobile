import { View, Animated } from "react-native";
import { useRef, useEffect } from "react";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export const Skeleton = (props) => {
  return (
    <View
      style={{
        ...props,
        backgroundColor: "rgb(30, 41, 59)",
        position: "relative",
      }}
    >
      <FadeInView
        style={{
          ...props,
          backgroundColor: "rgb(51,65,85)",
        }}
      />
    </View>
  );
};

export const TextSkeleton = ({ width, height, borderRadius, marginTop }) => {
  return (
    <View
      style={{
        height: 30,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width,
          height,
          borderRadius,
          backgroundColor: "rgb(30, 41, 59)",
          position: "relative",
          marginTop,
        }}
      >
        <FadeInView
          style={{
            width,
            height,
            borderRadius,
            backgroundColor: "rgb(51,65,85)",
          }}
        />
      </View>
    </View>
  );
};
