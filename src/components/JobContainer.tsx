import React from "react";
import JobDetails from "./JobPreview/JobDetails";

function JobContainer({ children }: { children: React.ReactElement }) {
  return (
    <div className="w-[80vw] bg-white -mt-4 rounded-lg mx-auto grid grid-cols-3 shadow-md text-xs">
      {children}
      <JobDetails />
    </div>
  );
}

export default JobContainer;
