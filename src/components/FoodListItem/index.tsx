import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FoodProps } from "@/store/store";

interface FoodListItemProps {
  item: FoodProps;
}

export function FoodListItem({ item }: FoodListItemProps) {
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
