import React, { createContext } from "react";
import useActiveJobId from "../lib/hooks/useActiveJobId";

type ActiveIdContextType = {
  activeJobId: number | null;
};

export const ActiveIdContext = createContext<ActiveIdContextType | null>(null);

function ActiveIdContextProvider({ children }: { children: React.ReactNode }) {
  const activeJobId = useActiveJobId();

  return (
    <ActiveIdContext.Provider value={{ activeJobId }}>
      {children}
    </ActiveIdContext.Provider>
  );
}

export default ActiveIdContextProvider;
