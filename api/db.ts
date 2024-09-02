const BASE_URL = "http://192.168.27.105:3000/restaurants"; // URL base da API

export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
