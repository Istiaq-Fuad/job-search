import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import BookmarkPopover from "./BookmarkPopover";

function BookmarkButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen((prev) => !prev)}>
        bookmarks
        <CaretDown size={15} weight="duotone" className="ml-2 inline-block" />
      </button>
      {open && <BookmarkPopover />}
    </>
  );
}

export default BookmarkButton;
