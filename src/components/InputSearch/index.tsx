import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export function InputSearch() {
  const [search, setSearch] = useState("");

  return (
    <View>
      <TextInput
        className="flex rounded-full border bg-gray-200 p-[10px]"
        placeholder="Buscar"
        placeholderTextColor="gray"
        value={search}
        onChangeText={(text) => {
          setSearch(text);
          console.log(text);
        }}
      />
      <Ionicons name="search" size={16} color="gray" />
    </View>
  );
}
