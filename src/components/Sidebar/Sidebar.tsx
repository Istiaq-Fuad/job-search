import { JobItemType, SortingType } from "../../lib/types";
import JobList from "../JobList/JobList";
import SidebarHeader from "./SidebarHeader";

function Sidebar({
  children,
  jobItems,
  numberOfJobs,
  isListLoading,
  handleSortingChange,
  sortBy,
}: {
  children: React.ReactElement;
  jobItems: JobItemType[];
  numberOfJobs: number;
  isListLoading: boolean;
  handleSortingChange: (sortBy: SortingType) => void;
  sortBy: SortingType;
}) {
  return (
    <div className="col-span-1 min-h-[420px] border-r-[1px] border-opacity-10 border-black relative flex flex-col">
      <SidebarHeader
        sortBy={sortBy}
        numberOfJobs={numberOfJobs}
        handleSortingChange={handleSortingChange}
      />
      <JobList jobItems={jobItems} isListLoading={isListLoading} />
      {children}
    </div>
  );
}

export default Sidebar;
