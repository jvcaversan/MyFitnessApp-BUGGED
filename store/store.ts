// store.js
import { create } from "zustand";

interface StoreState {
  search: string;
  setSearch: (search: string) => void;
  foods: FoodProps[];
  setFoods: (foods: FoodProps[]) => void;
  filteredData: FoodProps[];
  setFilteredData: (data: FoodProps[]) => void;
}

export interface FoodProps {
  label: string;
  cal: number;
  brand: string;
  id: string; // Adicione o id, se necessário
}

const useStore = create<StoreState>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
  foods: [], // Dados originais
  setFoods: (foods) => set({ foods }),
  filteredData: [], // Dados filtrados
  setFilteredData: (data) => set({ filteredData: data }),
}));

export default useStore;
