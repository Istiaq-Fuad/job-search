import { JobItemType } from "../lib/types";
import JobDetails from "./JobPreview/JobDetails";
import Sidebar from "./Sidebar/Sidebar";

function JobContainer({
  jobItems,
  isListLoading,
}: {
  jobItems: JobItemType[];
  isListLoading: boolean;
}) {
  return (
    <div className="h-[73vh] w-[80vw] bg-white -mt-4 rounded-lg mx-auto grid grid-cols-3 shadow-md text-xs overflow-hidden">
      <Sidebar jobItems={jobItems} isListLoading={isListLoading} />
      <div className="col-span-2 bg-white h-full">
        <JobDetails />
      </div>
    </div>
  );
}

export default JobContainer;
