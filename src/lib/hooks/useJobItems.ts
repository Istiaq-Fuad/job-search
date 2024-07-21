import { useQueries } from "@tanstack/react-query";
import fetchJobItem from "../fetchJobItem";

function useJobItems(ids: number[]) {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["job-item", id],
      queryFn: () => fetchJobItem(id),
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: !!id,
    })),
  });

  const jobItems = results
    .map((result) => result.data)
    .filter((jobItem) => jobItem !== undefined);

  const isListLoading = results.some((result) => result.isLoading);

  return { jobItems, isListLoading } as const;
}

export default useJobItems;
