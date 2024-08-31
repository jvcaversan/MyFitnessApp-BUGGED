import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";

export function InputSearch() {
  const [search, setSearch] = useState("");

  return (
    <View className="flex-row items-center rounded-full bg-gray-100 p-2">
      <Ionicons
        name="search"
        size={20}
        color="royalblue"
        onPress={() => {
          console.warn(" CLICADO", search);
          setSearch("");
        }}
        className="ml-2"
      />
      <TextInput
        className="flex-1 py-2 rounded-full bg-gray-100"
        placeholder="Buscar"
        placeholderTextColor="gray"
        value={search}
        onChangeText={(text) => {
          setSearch(text);
          console.log(text);
        }}
        style={{ paddingLeft: 10 }}
      />
      <Feather
        name="x"
        size={16}
        color="gray"
        className="mr-2"
        onPress={() => setSearch("")}
      />
    </View>
  );
}
