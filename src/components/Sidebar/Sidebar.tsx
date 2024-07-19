import { JobItemType } from "../../lib/types";
import Spinner from "../Spinner";
import JobListItem from "./JobListItem";
import SidebarHeader from "./SidebarHeader";

function Sidebar({
  children,
  jobItems,
  isListLoading,
}: {
  children: React.ReactElement;
  jobItems: JobItemType[];
  isListLoading: boolean;
}) {
  return (
    <div className="col-span-1 min-h-[420px] border-r-[1px] border-opacity-10 border-black relative flex flex-col">
      <SidebarHeader numberOfJobs={jobItems.length} />
      <ul className="h-full">
        {isListLoading && <Spinner />}

        {!isListLoading &&
          jobItems
            .slice(0, 8)
            .map((jobItem) => (
              <JobListItem key={jobItem.id} jobItem={jobItem} />
            ))}
      </ul>
      {children}
    </div>
  );
}

export default Sidebar;
