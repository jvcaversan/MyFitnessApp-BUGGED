import "../styles/global.css";
import { FoodListItem } from "../components/FoodListItem";
import { FlatList, SafeAreaView, View } from "react-native";
import { InputSearch } from "../components/InputSearch";

const foodList = [
  { label: "Pizza", cal: 100, brand: "Dominos" },
  { label: "BigMac", cal: 200, brand: "McDonalds" },
  { label: "Chicken", cal: 300, brand: "KFC" },
];

export default function Index() {
  return (
    <SafeAreaView className="flex-1 p-[10px] gap-3 mx-3">
      <InputSearch />
      <FlatList
        data={foodList}
        renderItem={({ item }) => <FoodListItem item={item} />}
        contentContainerStyle={{ gap: 5 }}
      />
    </SafeAreaView>
  );
}
