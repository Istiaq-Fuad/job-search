import JobListItem from "./JobListItem";
import { JobItemType } from "../../lib/types";
import Spinner from "../Spinner";

function JobList({
  jobItems,
  isListLoading,
}: {
  jobItems: JobItemType[];
  isListLoading: boolean;
}) {
  return (
    <ul className="h-full">
      {isListLoading && <Spinner />}

      {!isListLoading &&
        jobItems.map((jobItem) => (
          <JobListItem key={jobItem.id} jobItem={jobItem} />
        ))}
    </ul>
  );
}

export default JobList;
