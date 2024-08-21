import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { ArtistCard } from "@/components/artistCard";
import { ScrollView } from "react-native";
import { AristHead2, ArtistHead3 } from "@/components/artistHead";

export default function Page() {
  const [data, setData] = useState([]);
  const { query } = useLocalSearchParams();
  const fetchArtist = async () => {
    const response = await fetch(`https://www.apixapi.xyz/api/artist/${query}`);
    const responseJson = await response.json();
    setData(responseJson[0]);
  };
  useEffect(() => {
    fetchArtist();
  }, [query]);

  const ArtistCardDeck = ({ data, artist, image }) => {
    let arr = [0, 1, 2, 3, 4];
    if (data?.length < 5) {
      const newArr = [];
      for (let i = 0; i < data.length; i++) {
        newArr.push(i);
      }
      arr = newArr;
    }
    return (
      <ScrollView
        style={{ backgroundColor: "black", height: "100%" }}
        stickyHeaderIndices={[1]}
      >
        <AristHead2
          artist={artist ? artist : null}
          image={image ? image : null}
          length={data ? data.length : null}
        />
        <ArtistHead3 />
        <View>
          {arr.map((i) => (
            <ArtistCard
              key={i}
              data={data ? data[i] : null}
              artist={artist ? artist : null}
            />
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "black", position: "relative" }}>
      <ArtistCardDeck
        data={data ? data.top5songs : null}
        artist={data ? data.artist : null}
        image={data ? data.image : null}
      />
    </SafeAreaView>
  );
}
