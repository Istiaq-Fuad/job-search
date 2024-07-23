import React, { createContext, useState } from "react";
import useDebounce from "../lib/hooks/useDebounce";

type SearchTextContextType = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  debouncedSearchText: string;
};

export const SearchTextContext = createContext<SearchTextContextType | null>(
  null
);

function SearchTextContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 300);

  return (
    <SearchTextContext.Provider
      value={{ searchText, setSearchText, debouncedSearchText }}
    >
      {children}
    </SearchTextContext.Provider>
  );
}

export default SearchTextContextProvider;
