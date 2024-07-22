import { JobItemType } from "../../lib/types";
import BookmarkIcon from "../BookmarkIcon";
import useActiveJobIdContext from "../../lib/hooks/useActiveJobIdContext";

function JobListItem({ jobItem }: { jobItem: JobItemType }) {
  const { activeJobId } = useActiveJobIdContext();

  return (
    <a href={`#${jobItem.id}`}>
      <li
        className={`flex justify-between items-center p-[7px] border-b ${
          jobItem.id === activeJobId ? "bg-slate-200" : "bg-white"
        }`}
      >
        <div className="bg-neutral-400 rounded text-lg font-bold h-10 w-10 flex justify-center items-center">
          {jobItem.badgeLetters}
        </div>
        <div className="flex-1 pl-4">
          <p className="block">{jobItem.company}</p>
          <p className="">{jobItem.title}</p>
        </div>
        <div className="w-5 flex flex-col justify-between items-center">
          <BookmarkIcon id={jobItem.id} />
          <div className="mt-2">{jobItem.daysAgo}d</div>
        </div>
      </li>
    </a>
  );
}

export default JobListItem;
