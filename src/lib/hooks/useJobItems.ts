import { JobItemType } from "../types";
import { useQuery } from "@tanstack/react-query";

function useJobItems(searchText: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["job-items", searchText],
    queryFn: async (): Promise<JobItemType[]> => {
      const response = await fetch(
        `http://localhost:3000/jobItems?title_like=${searchText}`
        // `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !!searchText,
  });

  return {
    jobItems: data || [],
    isListLoading: isLoading,
  } as const;
}

// function useJobItems(searchText: string) {
//   const [jobItems, setJobItems] = useState<JobItemType[]>([]);
//   const [isListLoading, setIsListLoading] = useState(false);

//   useEffect(() => {
//     if (!searchText) return;

//     const fetchData = async () => {
//       setIsListLoading(true);
//       const response = await fetch(
//         `http://localhost:3000/jobItems?title_like=${searchText}`
//         // `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
//       );

//       const data = await response.json();
//       setJobItems(data);
//       setIsListLoading(false);
//     };

//     fetchData();
//   }, [searchText]);

//   return {isListLoading, jobItems} as const;
// }

export default useJobItems;
