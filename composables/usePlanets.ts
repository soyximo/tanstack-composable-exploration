import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";

interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
}

interface PlanetsResponse {
  results: Planet[];
  count: number;
  next: string | null;
  previous: string | null;
}

export const usePlanets = () => {
  const query = useQuery<PlanetsResponse>({
    queryKey: ["planets"],
    queryFn: async () => {
      const response = await fetch("https://swapi.dev/api/planets/");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    },
  });

  // Derive planets from query data
  const planets = computed(() => query.data.value?.results ?? []);

  return {
    planets,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    // Additional useful properties
    isRefetching: query.isRefetching,
    refetch: query.refetch,
  };
};
