import toast from "react-hot-toast";
import { JobItemDetailsType } from "../types";
import useActiveJobId from "./useActiveJobId";
import { useQuery } from "@tanstack/react-query";

function useActiveJobItem() {
  const activeJobId = useActiveJobId();

  const { data, isLoading, error } = useQuery({
    queryKey: ["job-item", activeJobId],
    queryFn: async (): Promise<JobItemDetailsType> => {
      const response = await fetch(
        `http://localhost:3000/jobDetails/${activeJobId}`
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
    enabled: !!activeJobId,
  });
 
  if (error) {
    toast.error(error.message);
  }

  return { activeJobItem: data, isItemLoading: isLoading } as const;
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
