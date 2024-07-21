import { BookmarkSimple } from "@phosphor-icons/react";
import useBookmarkContext from "../lib/hooks/useBookmarkContext";

function BookmarkIcon({ id }: { id: number }) {
  const { bookmarkedIds, handleBookmarkToggle } = useBookmarkContext();

  return (
    <BookmarkSimple
      className="cursor-pointer"
      size={15}
      weight={bookmarkedIds.includes(id) ? "fill" : "regular"}
      color="blue"
      onClick={(e) => {
        handleBookmarkToggle(id);
        e.stopPropagation();
        e.preventDefault();
      }}
    />
  );
}

export default BookmarkIcon;
