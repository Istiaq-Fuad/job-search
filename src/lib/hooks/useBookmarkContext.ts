import { useContext } from "react";
import { BookmarkContext } from "../../contexts/BookmarksContextProvider";

const useBookmarkContext = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error(
      "useBookmarkContext must be used within a BookmarksContextProvider"
    );
  }

  return context;
};

export default useBookmarkContext;
