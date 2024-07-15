import Footer from "./components/Footer";
import Header from "./components/Header";
import JobContainer from "./components/JobContainer";
import { useState } from "react";
import useJobItems from "./lib/hooks/useJobItems";
import useDebounce from "./lib/hooks/useDebounce";

function App() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 300);

  const { isListLoading, jobItems } = useJobItems(debouncedSearchText);

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <JobContainer jobItems={jobItems} isListLoading={isListLoading} />
      <Footer />
    </>
  );
}

export default App;
