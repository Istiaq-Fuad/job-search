import Footer from "./components/Footer";
import Header from "./components/Header";
import JobContainer from "./components/JobContainer";
import { useState } from "react";
import useJobItems from "./lib/hooks/useJobItems";
import useDebounce from "./lib/hooks/useDebounce";
import { Toaster } from "react-hot-toast";
import Sidebar from "./components/Sidebar/Sidebar";
import PaginationButtons from "./components/Sidebar/PaginationButtons";
import { JOBS_PER_PAGE } from "./lib/constants";
import { DirectionType, SortingType } from "./lib/types";

function App() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 300);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortingType>("relevant");

  const handlePageChange = (direction: DirectionType) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    }

    if (direction === "prev") {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleSortingChange = (sortBy: SortingType) => {
    setSortBy(sortBy);
    setCurrentPage(1);
  };

  const { isListLoading, jobItems } = useJobItems(debouncedSearchText);

  const jobItemsSorted = [...jobItems].sort((a, b) => {
    if (sortBy === "relevant") {
      return b.relevanceScore - a.relevanceScore;
    }

    return a.daysAgo - b.daysAgo;
  });

  const slicedJobItems = jobItemsSorted.slice(
    currentPage * JOBS_PER_PAGE - JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  );

  const totalNumberOfPages = jobItems.length / JOBS_PER_PAGE;

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <JobContainer>
        <Sidebar
          handleSortingChange={handleSortingChange}
          sortBy={sortBy}
          jobItems={slicedJobItems}
          numberOfJobs={jobItems.length}
          isListLoading={isListLoading}
        >
          <PaginationButtons
            jobItemCount={jobItems.length}
            currentPage={currentPage}
            totalNumberOfPages={totalNumberOfPages}
            onPageChange={handlePageChange}
          />
        </Sidebar>
      </JobContainer>
      <Footer />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
