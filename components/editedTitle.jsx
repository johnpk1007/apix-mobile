import { ArtistLinkButton } from "./artistLinkButton";
import { View, Text } from "react-native";

const conditions = [",", "Featuring", "&", "X", "x"];
const separators = /([,&]|Featuring| X | x )/;
const stringCheck = (str) => {
  return conditions.some((el) => str.includes(el));
};
const trimArrFunc = (arr) => {
  let newArr = [];
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "Featuring" ||
      arr[i] === "&" ||
      arr[i] === "X" ||
      arr[i] === "x"
    ) {
      newArr.push(tempArr);
      tempArr = [];
      tempArr.push(arr[i]);
    } else if (arr[i] === ",") {
      tempArr.push(arr[i]);
      newArr.push(tempArr);
      tempArr = [];
    } else if (i !== arr.length - 1) {
      tempArr.push(arr[i]);
    } else if (i === arr.length - 1) {
      tempArr.push(arr[i]);
      newArr.push(tempArr);
      tempArr = [];
    }
  }
  return newArr;
};

export const EditedTitle = ({ artist, page }) => {
  const check = stringCheck(artist);
  if (check) {
    const arr = artist.split(separators);
    const trimArr = arr.map((str) => {
      return str.trim();
    });
    const newArr = trimArrFunc(trimArr);
    return (
      <View>
        {newArr.map((newArrItem, idx) => {
          if (newArrItem.length === 1) {
            return (
              <View
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontFamily: "Poppins-Light",
                  position: "relative",
                }}
              >
                {page[idx].page ? (
                  <View>
                    <View
                      style={{
                        position: "absolute",
                        left: -15,
                        width: 15,
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                        top: 0,
                        bottom: 0,
                        backgroundColor: "inherit",
                      }}
                    >
                      <Text style={{ color: "white" }}>+</Text>
                    </View>
                    <ArtistLinkButton artist={newArrItem[0]} />
                  </View>
                ) : (
                  <Text>{newArrItem[0]}</Text>
                )}
              </View>
            );
          } else {
            return (
              <View
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontFamily: "Poppins-Light",
                  position: "relative",
                }}
              >
                {page[idx].page ? (
                  <View>
                    <View
                      style={{
                        position: "absolute",
                        left: -15,
                        width: 15,
                        top: 0,
                        bottom: 0,
                        backgroundColor: "inherit",
                      }}
                    >
                      <Text style={{ color: "white" }}>+</Text>
                    </View>
                    <ArtistLinkButton
                      artist={newArrItem[1]}
                      extra={newArrItem[0]}
                    />
                  </View>
                ) : (
                  <View>
                    <Text>
                      {newArrItem[0]}
                      {newArrItem[0] === "Featuring" ||
                      newArrItem[0] === "&" ||
                      newArrItem[0] === "X" ||
                      newArrItem[0] === "x"
                        ? " "
                        : ""}
                      {newArrItem[1]}{" "}
                    </Text>
                  </View>
                )}
              </View>
            );
          }
        })}
      </View>
    );
  } else {
    return (
      <View
        style={{
          display: "flex",
          alignItems: "center",
          fontFamily: "Poppins-Light",
          position: "relative",
        }}
      >
        {page[0].page ? (
          <View>
            <View
              style={{
                position: "absolute",
                left: -15,
                width: 15,
                top: 0,
                bottom: 0,
                backgroundColor: "inherit",
              }}
            >
              <Text style={{ color: "white" }}>+</Text>
            </View>
            <ArtistLinkButton artist={artist} />
          </View>
        ) : (
          <Text style={{ color: "white" }}>{artist}</Text>
        )}
      </View>
    );
  }
};
