import { useEffect, useState } from "react";
import useActiveJobId from "./useActiveJobId";
import { JobItemDetailsType } from "../types";

function useActiveJobItem() {
  const [activeJobItem, setActiveJobItem] = useState<JobItemDetailsType | null>(
    null
  );

  const [isItemLoading, setIsItemLoading] = useState(false);
  const activeJobId = useActiveJobId();

  useEffect(() => {
    if (!activeJobId) return;

    const handleActiveJobFetch = async () => {
      setIsItemLoading(true);
      const response = await fetch(
        `http://localhost:3000/jobDetails/${activeJobId}`
      );

      const data = await response.json();

      setActiveJobItem(data);
      setIsItemLoading(false);
    };

    handleActiveJobFetch();
  }, [activeJobId]);

  return { isItemLoading, activeJobItem } as const;
}

export default useActiveJobItem;
