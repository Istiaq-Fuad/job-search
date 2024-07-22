import { CaretDown } from "@phosphor-icons/react";
import { forwardRef, useRef, useState } from "react";
import useBookmarkContext from "../../lib/hooks/useBookmarkContext";
import JobList from "../JobList/JobList";
import toast from "react-hot-toast";
import { JobItemDetailsType } from "../../lib/types";
import useOnClickOutside from "../../lib/hooks/useOnClickOutside";

function BookmarkButton() {
  const [open, setOpen] = useState(false);
  const { bookmarkedJobItems, isListLoading } = useBookmarkContext();

  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useOnClickOutside([buttonRef, popoverRef], () => setOpen(false));

  return (
    <>
      <button
        onClick={() => {
          if (bookmarkedJobItems.length === 0) {
            toast("No jobs bookmarked!");
            return;
          }
          setOpen((prev) => !prev);
        }}
        ref={buttonRef}
      >
        bookmarks
        <CaretDown size={15} weight="duotone" className="ml-2 inline-block" />
      </button>
      {open && (
        <BookmarkedJobs
          bookmarkedJobItems={bookmarkedJobItems}
          isListLoading={isListLoading}
          ref={popoverRef}
        />
      )}
    </>
  );
}

// this component is separated for giving an example of passing ref on another component
type BookmarkedJobsType = {
  bookmarkedJobItems: JobItemDetailsType[];
  isListLoading: boolean;
};

const BookmarkedJobs = forwardRef<HTMLDivElement, BookmarkedJobsType>(
  function BookmarkedJobs({ bookmarkedJobItems, isListLoading }, popoverRef) {
    return (
      <div
        className="absolute bg-gray-300 z-50 text-black text-xs -left-8 -right-8 top-10 overflow-y-auto max-h-[50vh]"
        ref={popoverRef}
      >
        <JobList jobItems={bookmarkedJobItems} isListLoading={isListLoading} />
      </div>
    );
  }
);

export default BookmarkButton;
