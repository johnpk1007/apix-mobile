import { Image, View, Text } from "react-native";

import youtube_logo_drawing from "../assets/images/youtube_logo_drawing.png";
import youtube_logo_text from "../assets/images/youtube_logo_text.png";
import apix_logo_white_drawing from "../assets/images/apix_logo_white_drawing.png";
import billboard_logo_white_text from "../assets/images/billboard_logo_white_text.jpg";
import { BilboardWeek } from "./billboardWeek";

export const Head = () => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        height: 190,
        borderBottomColor: "white",
        borderWidth: 2,
      }}
    >
      <View
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
          height: 120,
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row",
            width: "50%",
            position: "relative",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: 50,
              alignItems: "center",
            }}
          >
            <Image
              source={youtube_logo_drawing}
              style={{ width: 30, height: 21 }}
            />
            <Image
              source={youtube_logo_text}
              style={{ width: 75, height: 25 }}
            />
          </View>

          <Image
            source={apix_logo_white_drawing}
            style={{
              position: "absolute",
              right: -9,
              width: 18,
              height: 18,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "relaitve",
          }}
        >
          <Image
            source={billboard_logo_white_text}
            style={{ width: 135, height: 27, marginLeft: 50 }}
          />
          <BilboardWeek billboardWeek={"WEEK OF AUGUST 10, 2024"} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "16.666%",
            backgroundColor: "black",
          }}
        >
          <View
            style={{
              width: 48,
              height: 48,
              borderColor: "white",
              borderWidth: 2,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontFamily: "Poppins-Black",
                fontSize: 13,
              }}
            >{`THIS\nWEEK`}</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "16.666%",
            backgroundColor: "black",
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Poppins-Black",
              fontSize: 13,
            }}
          >{`LAST\nWEEK`}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "16.666%",
            backgroundColor: "black",
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Poppins-Black",
              fontSize: 13,
            }}
          >{`PEAK\nPOS.`}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "16.666%",
            backgroundColor: "black",
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Poppins-Black",
              fontSize: 13,
            }}
          >{`WKS ON\nCHART`}</Text>
        </View>
      </View>
      <View style={{ height: 10 }}></View>
    </View>
  );
};
