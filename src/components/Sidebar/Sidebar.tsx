import useJobItemsContext from "../../lib/hooks/useJobItemsContext";
import JobList from "../JobList/JobList";
import PaginationButtons from "./PaginationButtons";
import SidebarHeader from "./SidebarHeader";

function Sidebar() {
  const { slicedJobItems, isListLoading } = useJobItemsContext();
  return (
    <div className="col-span-1 min-h-[420px] border-r-[1px] border-opacity-10 border-black relative flex flex-col">
      <SidebarHeader />
      <JobList jobItems={slicedJobItems} isListLoading={isListLoading} />
      <PaginationButtons />
    </div>
  );
}

export default Sidebar;
