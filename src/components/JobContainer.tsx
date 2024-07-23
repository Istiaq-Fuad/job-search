import JobDetails from "./JobPreview/JobDetails";
import Sidebar from "./Sidebar/Sidebar";

function JobContainer() {
  return (
    <div className="w-[80vw] bg-white -mt-4 rounded-lg mx-auto grid grid-cols-3 shadow-md text-xs">
      <Sidebar />
      <JobDetails />
    </div>
  );
}

export default JobContainer;
