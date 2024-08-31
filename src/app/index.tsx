import "@/styles/global.css";
import { FoodItem } from "../components/foodComponent";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center p-[10px] gap-2">
      <FoodItem item={{ label: "Pizza", cal: 100, brand: "Dominos" }} />
      <FoodItem item={{ label: "BigMac", cal: 200, brand: "McDonalds" }} />
      <FoodItem item={{ label: "Chicken", cal: 300, brand: "KFC" }} />
    </View>
  );
}
