// FoodListComponent.js
import { FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";
import useStore, { FoodProps } from "@/store/store";
import { FoodListItem } from "../FoodListItem";

export function FoodListComponent() {
  const { search, filteredData, setFilteredData } = useStore();
  const [allFoods, setAllFoods] = useState<FoodProps[]>([]); // Estado local para todos os alimentos

  // Buscar dados da API e armazenar no estado
  useEffect(() => {
    async function getFoods() {
      try {
        const response = await fetch("http://192.168.27.105:3000/restaurants");
        const data = await response.json();

        // Ajuste para refletir que data é diretamente um array
        if (Array.isArray(data)) {
          setAllFoods(data); // Atualiza allFoods
        } else {
          setAllFoods([]); // Limpa allFoods se a estrutura for inesperada
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    getFoods(); // Chama a função para buscar dados
  }, []); // Dependência vazia para executar apenas uma vez

  // Filtrar os dados com base no texto de busca
  useEffect(() => {
    const filtered = search
      ? (allFoods || []).filter((food) =>
          food.label.toLowerCase().includes(search.toLowerCase())
        )
      : []; // Se não houver busca, a lista deve ser vazia

    setFilteredData(filtered); // Atualiza os dados filtrados
  }, [search, allFoods, setFilteredData]); // Dependências: search e allFoods

  return (
    <FlatList
      data={filteredData} // Use filteredData para renderizar a lista
      renderItem={({ item }) => <FoodListItem item={item} />}
      ListEmptyComponent={() => <Text>Busque um produto</Text>}
      contentContainerStyle={{ gap: 5 }}
    />
  );
}
