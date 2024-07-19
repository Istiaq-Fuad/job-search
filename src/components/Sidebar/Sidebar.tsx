import { JobItemType } from "../../lib/types";
import Spinner from "../Spinner";
import JobListItem from "./JobListItem";
import SidebarHeader from "./SidebarHeader";
import PaginationButtons from "./PaginationButtons";

function Sidebar({
  jobItems,
  isListLoading,
}: {
  jobItems: JobItemType[];
  isListLoading: boolean;
}) {
  return (
    <div className="col-span-1 border-r-[1px] border-opacity-10 border-black relative h-full flex flex-col">
      <SidebarHeader numberOfJobs={jobItems.length} />
      <ul className="overflow-y-auto custom-height custom-scrollbar">
        {isListLoading && <Spinner />}

        {!isListLoading &&
          jobItems.map((jobItem) => (
            <JobListItem key={jobItem.id} jobItem={jobItem} />
          ))}
      </ul>
      <PaginationButtons />
    </div>
  );
}

export default Sidebar;
