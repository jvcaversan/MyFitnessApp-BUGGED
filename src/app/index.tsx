import { SafeAreaView } from "react-native";
import { InputSearch } from "../components/InputSearch";
import { FoodListComponent } from "../components/FoodListComponent";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 p-[10px] gap-3 mx-3">
      <InputSearch />
      <FoodListComponent />
    </SafeAreaView>
  );
}
