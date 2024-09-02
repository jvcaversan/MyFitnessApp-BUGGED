// InputSearch.js
import { View, TextInput } from "react-native";
import React from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import useStore from "@/store/store";

export function InputSearch() {
  const { search, setSearch } = useStore(); // Use o store para gerenciar o estado de busca

  return (
    <View className="flex-row items-center rounded-full bg-gray-100 p-2">
      <Ionicons
        name="search"
        size={20}
        color="royalblue"
        onPress={() => {
          console.warn(" CLICADO", search);
          setSearch(""); // Limpa o campo de busca
        }}
        className="ml-2"
      />
      <TextInput
        className="flex-1 py-2 rounded-full bg-gray-100"
        placeholder="Buscar"
        placeholderTextColor="gray"
        value={search}
        onChangeText={(text) => setSearch(text)} // Atualiza o texto de busca no store
        style={{ paddingLeft: 10 }}
      />
      <Feather
        name="x"
        size={16}
        color="gray"
        className="mr-2"
        onPress={() => setSearch("")} // Limpa o campo de busca
      />
    </View>
  );
}
