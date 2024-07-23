import { useContext } from "react";
import { JobItemsContext } from "../../contexts/JobItemsContextProvider";

function useJobItemsContext() {
  const context = useContext(JobItemsContext);
  if (!context) {
    throw new Error(
      "useSearchTextContext must be used within a SearchTextContextProvider"
    );
  }

  return context;
}

export default useJobItemsContext;
