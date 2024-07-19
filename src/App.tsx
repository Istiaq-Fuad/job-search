import Footer from "./components/Footer";
import Header from "./components/Header";
import JobContainer from "./components/JobContainer";
import { useState } from "react";
import useJobItems from "./lib/hooks/useJobItems";
import useDebounce from "./lib/hooks/useDebounce";
import { Toaster } from "react-hot-toast";
import Sidebar from "./components/Sidebar/Sidebar";
import PaginationButtons from "./components/Sidebar/PaginationButtons";

function App() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 300);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    }

    if (direction === "prev") {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const { isListLoading, jobItems } = useJobItems(debouncedSearchText);

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <JobContainer>
        <Sidebar jobItems={jobItems} isListLoading={isListLoading}>
          <PaginationButtons
            jobItemCount={jobItems.length}
            currentPage={currentPage}
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
