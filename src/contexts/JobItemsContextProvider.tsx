import React, { createContext, useCallback, useMemo, useState } from "react";
import useSearchQuery from "../lib/hooks/useSearchQuery";
import { DirectionType, JobItemType, SortingType } from "../lib/types";
import { JOBS_PER_PAGE } from "../lib/constants";
import useSearchTextContext from "../lib/hooks/useSearchTextContext";

type JobItemsContextType = {
  slicedJobItems: JobItemType[];
  numberOfJobs: number;
  isListLoading: boolean;
  totalNumberOfPages: number;
  currentPage: number;
  sortBy: SortingType;
  handlePageChange: (direction: DirectionType) => void;
  handleSortingChange: (sortBy: SortingType) => void;
};

export const JobItemsContext = createContext<JobItemsContextType | null>(null);

function JobItemsContextProvider({ children }: { children: React.ReactNode }) {
  const { debouncedSearchText } = useSearchTextContext();
  const { isListLoading, jobItems } = useSearchQuery(debouncedSearchText);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortingType>("relevant");

  const handlePageChange = useCallback((direction: DirectionType) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    }

    if (direction === "prev") {
      setCurrentPage((prev) => prev - 1);
    }
  }, []);

  const handleSortingChange = useCallback((sortBy: SortingType) => {
    setSortBy(sortBy);
    setCurrentPage(1);
  }, []);

  const jobItemsSorted = useMemo(
    () =>
      [...jobItems].sort((a, b) => {
        if (sortBy === "relevant") {
          return b.relevanceScore - a.relevanceScore;
        }

        return a.daysAgo - b.daysAgo;
      }),
    [jobItems, sortBy]
  );

  const slicedJobItems = useMemo(
    () =>
      jobItemsSorted.slice(
        currentPage * JOBS_PER_PAGE - JOBS_PER_PAGE,
        currentPage * JOBS_PER_PAGE
      ),
    [currentPage, jobItemsSorted]
  );

  const totalNumberOfPages = jobItems.length / JOBS_PER_PAGE;

  const numberOfJobs = jobItems.length;

  const contextValue = useMemo(
    () => ({
      slicedJobItems,
      numberOfJobs,
      isListLoading,
      totalNumberOfPages,
      currentPage,
      sortBy,
      handlePageChange,
      handleSortingChange,
    }),
    [
      slicedJobItems,
      numberOfJobs,
      isListLoading,
      totalNumberOfPages,
      currentPage,
      sortBy,
      handlePageChange,
      handleSortingChange,
    ]
  );

  return (
    <JobItemsContext.Provider value={contextValue}>
      {children}
    </JobItemsContext.Provider>
  );
}

export default JobItemsContextProvider;
