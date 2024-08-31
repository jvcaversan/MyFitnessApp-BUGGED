import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export interface FoodProps {
  label: string;
  cal: number;
  brand: string;
}

export function FoodListItem({ item }: { item: FoodProps }) {
  return (
    <View className="bg-gray-200 p-[10px] rounded-md flex-row justify-between items-center">
      <View className="flex-1 gap-1">
        <Text className="font-bold text-[16px]">{item.label}</Text>
        <Text className="font-light text-[12px] text-zinc-500">
          {item.cal} Cal, {item.brand}
        </Text>
      </View>
      <AntDesign name="pluscircleo" size={24} color="royalblue" />
    </View>
  );
}
