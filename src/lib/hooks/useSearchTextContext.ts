import { useContext } from "react";
import { SearchTextContext } from "../../contexts/SearchTextContextProvider";

function useSearchTextContext() {
  const context = useContext(SearchTextContext);
  if (!context) {
    throw new Error(
      "useSearchTextContext must be used within a SearchTextContextProvider"
    );
  }

  return context;
}

export default useSearchTextContext;
