import { useState, useEffect, useContext } from "react";
import { BillboardCard } from "./billboardCard";
import { View } from "react-native";

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

export const BillboardCardPack = ({ data, num }) => {
  const dataArr = [];
  let arr = [];
  const [rest, setRest] = useState([]);

  if (data.length !== 0) {
    for (let i = 1; i <= 100; i++) {
      if (i % 10 !== 0) {
        arr.push(data[i - 1]);
      } else {
        arr.push(data[i - 1]);
        dataArr.push(arr);
        arr = [];
      }
    }
  }

  useEffect(() => {
    if (data.length > 0 && num > 0) {
      if (dataArr.length === 10 && num < 10)
        setRest((prevRest) => {
          return [...prevRest, dataArr[num]];
        });
    }
  }, [data, num]);

  return (
    <View>
      <BillboardCardDeck dataSlice={dataArr ? dataArr[0] : null} />
      {rest.map((singleRest, index) => (
        <BillboardCardDeck key={index} dataSlice={singleRest} />
      ))}
    </View>
  );
};
