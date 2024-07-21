import useBookmarkContext from "../../lib/hooks/useBookmarkContext";
import JobList from "../JobList/JobList";

function BookmarkPopover() {
  const { bookmarkedJobItems, isListLoading } = useBookmarkContext();

  return (
    <div className="absolute z-50 text-black text-xs -left-8 -right-8 top-10 overflow-y-auto h-[50vh]">
      <JobList jobItems={bookmarkedJobItems} isListLoading={isListLoading} />
    </div>
  );
}

export default BookmarkPopover;
