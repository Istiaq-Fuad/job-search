import React, { createContext } from "react";
import useLocalStorage from "../lib/hooks/useLocalStorage";

type BookmarkContextType = {
  bookmarkedIds: number[];
  handleBookmarkToggle: (id: number) => void;
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

  return (
    <BookmarkContext.Provider
      value={{
        bookmarkedIds,
        handleBookmarkToggle,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export default BookmarksContextProvider;
