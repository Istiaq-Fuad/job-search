import { useContext } from "react";
import { ActiveIdContext } from "../../contexts/ActiveIdContextProvider";

const useActiveJobIdContext = () => {
  const context = useContext(ActiveIdContext);
  if (!context) {
    throw new Error(
      "useActiveJobIdContext must be used within a ActiveIdContextProvider"
    );
  }

  return context;
};

export default useActiveJobIdContext;
