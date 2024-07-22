import React, { createContext } from "react";
import useLocalStorage from "../lib/hooks/useLocalStorage";
import useJobItems from "../lib/hooks/useJobItems";
import { JobItemDetailsType } from "../lib/types";

type BookmarkContextType = {
  bookmarkedIds: number[];
  handleBookmarkToggle: (id: number) => void;
  bookmarkedJobItems: JobItemDetailsType[];
  isListLoading: boolean;
};

export const BookmarkContext = createContext<BookmarkContextType | null>(null);

function BookmarksContextProvider({ children }: { children: React.ReactNode }) {
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>(
    "bookmarkedIds",
    []
  );

  const handleBookmarkToggle = (id: number) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarkedIds((prev) => [...prev, id]);
    }
  };

  const { jobItems: bookmarkedJobItems, isListLoading } =
    useJobItems(bookmarkedIds);

  return (
    <BookmarkContext.Provider
      value={{
        bookmarkedIds,
        handleBookmarkToggle,
        bookmarkedJobItems,
        isListLoading,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export default BookmarksContextProvider;
