import { useEffect, useState } from "react";
import { JobItemType } from "../types";

function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState<JobItemType[]>([]);
  const [isListLoading, setIsListLoading] = useState(false);

  useEffect(() => {
    if (!searchText) return;

    const fetchData = async () => {
      setIsListLoading(true);
      const response = await fetch(
        `http://localhost:3000/jobItems?title_like=${searchText}`
        // `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
      );

      const data = await response.json();
      setJobItems(data);
      setIsListLoading(false);
    };

    fetchData();
  }, [searchText]);

  return {isListLoading, jobItems} as const;
}

export default useJobItems;
