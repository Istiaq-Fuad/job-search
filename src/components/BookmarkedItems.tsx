import { JobItemType } from "../lib/types";
import JobListItem from "./Sidebar/JobListItem";

function BookmarkedItems({
  bookmarkedJobs,
}: {
  bookmarkedJobs: JobItemType[];
}) {
  return (
    <div className="hidden absolute z-50 text-black text-xs -left-8 -right-8 top-10 rounded-md overflow-y-auto h-[50vh]">
      {bookmarkedJobs.map((jobItem) => (
        <JobListItem key={jobItem.id} jobItem={jobItem} />
      ))}
    </div>
  );
}

export default BookmarkedItems;
