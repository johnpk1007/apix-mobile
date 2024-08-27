import { View, Text, ScrollView, FlatList } from "react-native";
import { BillboardCard } from "@/components/billboardCard";
import { useEffect, useState, useRef } from "react";
import { BillboardCardPack } from "@/components/billboardCardPack";
import { useGlobalContext } from "@/components/GlobalProvider";
import { stringFromId } from "@/components/stringFromId";

const BillboardCardDeck = ({ dataSlice }) => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <View>
      {arr.map((i) => (
        <BillboardCard key={i} data={dataSlice ? dataSlice[i] : null} />
      ))}
    </View>
  );
};

export default function Page() {
  const { date, setDate } = useGlobalContext();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("https://www.apixapi.xyz/api/main", {
        cache: "default",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseJson = await response.json();
      setData(responseJson);
      setDate(stringFromId(responseJson[0]._id));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FlatList
      ListHeaderComponent={
        <ScrollView>
          <BillboardCardDeck dataSlice={data.slice(0, 10)} />
        </ScrollView>
      }
      data={data.slice(10, 100)}
      renderItem={(item) => <BillboardCard data={item.item} />}
      keyExtractor={(item) => item._id}
      style={{ backgroundColor: "black" }}
    />
  );
}
