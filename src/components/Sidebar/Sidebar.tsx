import { JobItemType, SortingType } from "../../lib/types";
import Spinner from "../Spinner";
import JobListItem from "./JobListItem";
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
      <ul className="h-full">
        {isListLoading && <Spinner />}

        {!isListLoading &&
          jobItems.map((jobItem) => (
            <JobListItem key={jobItem.id} jobItem={jobItem} />
          ))}
      </ul>
      {children}
    </div>
  );
}

export default Sidebar;
