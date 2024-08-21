import { useContext, useRef, useState } from "react";
import { router, usePathname } from "expo-router";
import { View, Text, Touchable, TouchableHighlight } from "react-native";

export const ArtistLinkButton = ({ artist, extra }) => {
  //   const spanRef = useRef(null);
  //   const { data, num } = useContext(Context);
  //   const router = useRouter();
  //   const [left, setLeft] = useState(0);
  //   const [top, setTop] = useState(0);

  //   const createRipple = (event) => {
  //     if (spanRef.current.classList.contains("ripple")) {
  //       spanRef.current.classList.remove("ripple");
  //     }
  //     setLeft(event.clientX - event.target.getBoundingClientRect().left - 10);
  //     setTop(event.clientY - event.target.getBoundingClientRect().top - 10);
  //     spanRef.current.classList.add("ripple");
  //   };

  const handleClick = (event) => {
    // createRipple(event);
    // sessionStorage.setItem("data", JSON.stringify(data));
    // sessionStorage.setItem("height", `${window.scrollY}`);
    // sessionStorage.setItem("num", `${num}`);
    router.push(`/artist/${artist}`);
  };
  return (
    <View style={{ borderRadius: 8, overflow: "hidden" }}>
      <TouchableHighlight onPress={handleClick} underlayColor={"rgb(30,41,59)"}>
        <View
          style={{
            borderRadius: 8,
            position: "relative",
            overflow: "hidden",
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
          {/* {extra}
      {extra === "Featuring" || extra === "&" || extra === "X" || extra === "x"
        ? " "
        : ""}
      {artist} */}
          {/* <span
        ref={spanRef}
        className="w-[20px] h-[20px]"
        style={{ left, top }}
      ></span> */}
        </View>
      </TouchableHighlight>
    </View>
  );
};
