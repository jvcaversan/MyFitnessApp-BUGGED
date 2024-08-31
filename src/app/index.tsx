import "@/styles/global.css";
import { FoodListItem } from "../components/FoodListItem";
import { FlatList, View } from "react-native";

const foodList = [
  { label: "Pizza", cal: 100, brand: "Dominos" },
  { label: "BigMac", cal: 200, brand: "McDonalds" },
  { label: "Chicken", cal: 300, brand: "KFC" },
];

export default function Index() {
  return (
    <View className="flex-1 p-[10px]">
      <FlatList
        data={foodList}
        renderItem={({ item }) => <FoodListItem item={item} />}
        className="mt-16"
        contentContainerStyle={{ gap: 5 }}
      />
    </View>
  );
}
