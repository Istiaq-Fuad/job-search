import { JobItemDetailsType } from "../types";
import useActiveJobId from "./useActiveJobId";
import { useQuery } from "@tanstack/react-query";

function useActiveJobItem() {
  const activeJobId = useActiveJobId();

  const { data, isLoading } = useQuery({
    queryKey: ["job-item", activeJobId],
    queryFn: async (): Promise<JobItemDetailsType> => {
      const response = await fetch(
        `http://localhost:3000/jobDetails/${activeJobId}`
      );

      const data = await response.json();
      return data;
    },
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !!activeJobId,
  });

  const activeJobItem = data;
  const isItemLoading = isLoading;

  return { activeJobItem, isItemLoading };
}

// function useActiveJobItem() {
//   const [activeJobItem, setActiveJobItem] = useState<JobItemDetailsType | null>(
//     null
//   );

//   const [isItemLoading, setIsItemLoading] = useState(false);
//   const activeJobId = useActiveJobId();

//   useEffect(() => {
//     if (!activeJobId) return;

//     const handleActiveJobFetch = async () => {
//       setIsItemLoading(true);
//       const response = await fetch(
//         `http://localhost:3000/jobDetails/${activeJobId}`
//       );

//       const data = await response.json();

//       setActiveJobItem(data);
//       setIsItemLoading(false);
//     };

//     handleActiveJobFetch();
//   }, [activeJobId]);

//   return { isItemLoading, activeJobItem } as const;
// }

export default useActiveJobItem;
