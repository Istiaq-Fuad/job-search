import Footer from "./components/Footer";
import Header from "./components/Header";
import JobContainer from "./components/JobContainer";
import { useState } from "react";
import useJobItems from "./lib/hooks/useJobItems";

function App() {
  const [searchText, setSearchText] = useState("");
  const {isListLoading, jobItems} = useJobItems(searchText);

  return (
    <>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <JobContainer jobItems={jobItems} isListLoading={isListLoading} />
      <Footer />
    </>
  );
}

export default App;
