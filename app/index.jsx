import { View, Text } from "react-native";
import { BilboardCard } from "@/components/billboardCard";

const data = {
  title: "A Bar Song(Tipsy)",
  artist: "Shaboozey",
  this_week: 1,
  last_week: 1,
  peak_pos: 1,
  wks_on_chart: 17,
};

export default function Page() {
  return (
    <View>
      <BilboardCard data={data} />
    </View>
  );
}
