import { View, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Skeleton, TextSkeleton } from "./skeleton";
import { Video } from "./video";
import { EditedTitle } from "./editedTitle";

export const BillboardCard = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: "blue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
        marginTop: 10,
      }}
    >
      <View
        style={{
          width: 321,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data ? (
          <Video src={data.video} />
        ) : (
          <Skeleton width={321} height={178.6} borderRadius={10} />
        )}
        <View style={{ width: "100%", marginTop: 10, marginBottom: 10 }}>
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins-Black",
              fontSize: 16,
            }}
          >
            {data ? (
              data.title
            ) : (
              <TextSkeleton width={300} height={20} borderRadius={10} />
            )}
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins-Light",
              fontSize: 16,
            }}
          >
            {data ? (
              <EditedTitle artist={data.artist} page={data.page} />
            ) : (
              <TextSkeleton width={150} height={20} borderRadius={10} />
            )}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 50,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
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
                fontFamily: "Poppins-Black",
                fontSize: 16,
              }}
            >
              {data ? (
                data.this_week
              ) : (
                <Skeleton width={32} height={32} borderRadius={16} />
              )}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins-Black",
              fontSize: 16,
            }}
          >
            {data ? (
              data.last_week !== 0 ? (
                data.last_week
              ) : (
                "NEW"
              )
            ) : (
              <Skeleton width={32} height={32} borderRadius={16} />
            )}
          </Text>
        </View>
        <View
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins-Black",
              fontSize: 16,
            }}
          >
            {data ? (
              data.peak_pos
            ) : (
              <Skeleton width={32} height={32} borderRadius={16} />
            )}
          </Text>
        </View>
        <View
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "Poppins-Black",
              fontSize: 16,
            }}
          >
            {data ? (
              data.wks_on_chart
            ) : (
              <Skeleton width={32} height={32} borderRadius={16} />
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};
