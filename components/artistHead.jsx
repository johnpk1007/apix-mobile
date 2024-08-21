import { Image, View, Text } from "react-native";

import youtube_logo_drawing from "../assets/images/youtube_logo_drawing.png";
import youtube_logo_text from "../assets/images/youtube_logo_text.png";
import apix_logo_white_drawing from "../assets/images/apix_logo_white_drawing.png";
import billboard_logo_white_text from "../assets/images/billboard_logo_white_text.jpg";
import { Skeleton, TextSkeleton } from "./skeleton";
import { IconButton } from "./iconButton";

export const ArtistHead1 = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        height: 75,
        marginBottom: 10,
      }}
    >
      <IconButton navigation={navigation} />
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
          <Image source={youtube_logo_text} style={{ width: 75, height: 25 }} />
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
      </View>
    </View>
  );
};

export const AristHead2 = ({ artist, image, length }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        height: 120,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          width: "30%",
        }}
      >
        {image ? (
          <Image
            src={image}
            style={{
              width: 75,
              height: 75,
              borderRadius: 38,
            }}
          />
        ) : (
          <Skeleton height={75} width={75} borderRadius={38} />
        )}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 20,
              color: "white",
              height: 30,
            }}
          >
            {artist ? (
              artist
            ) : (
              <TextSkeleton width={100} height={20} borderRadius={10} />
            )}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-ExtraLight",
              fontSize: 12,
              color: "rgb(148,163,184)",
            }}
          >
            {length ? (
              `Billboard hot 100 top ${length} song${length > 1 ? "s" : ""}`
            ) : (
              <TextSkeleton width={140} height={12} borderRadius={6} />
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};

export const ArtistHead3 = () => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "black",
        paddingBottom: 10,
        borderBottomColor: "white",
        borderWidth: 2,
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
          >{`PEAK\nPOS.`}</Text>
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
        >{`PEAK\nDATE`}</Text>
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
  );
};
