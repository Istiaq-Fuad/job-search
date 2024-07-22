import { CaretDown } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import useBookmarkContext from "../../lib/hooks/useBookmarkContext";
import JobList from "../JobList/JobList";
import toast from "react-hot-toast";

function BookmarkButton() {
  const [open, setOpen] = useState(false);
  const { bookmarkedJobItems, isListLoading } = useBookmarkContext();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        !e.target.closest("#popover-btn") &&
        !e.target.closest("#popover-items")
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

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
        id="popover-btn"
      >
        bookmarks
        <CaretDown size={15} weight="duotone" className="ml-2 inline-block" />
      </button>
      {open && (
        <div
          className="absolute bg-gray-300 z-50 text-black text-xs -left-8 -right-8 top-10 overflow-y-auto max-h-[50vh]"
          id="popover-items"
        >
          <JobList
            jobItems={bookmarkedJobItems}
            isListLoading={isListLoading}
          />
        </div>
      )}
    </>
  );
}

export default BookmarkButton;
