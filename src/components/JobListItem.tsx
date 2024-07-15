import { BookmarkSimple } from "@phosphor-icons/react";
import { JobItemType } from "../lib/types";
import useActiveJobId from "../lib/hooks/useActiveJobId";

function JobListItem({ jobItem }: { jobItem: JobItemType }) {
  const activeJobId = useActiveJobId();

  return (
    <a href={`#${jobItem.id}`}>
      <li
        className={`flex justify-between items-center p-3 border-b ${
          jobItem.id === activeJobId ? "bg-slate-200" : ""
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
          <BookmarkSimple className="cursor-pointer mb-2" size={15} />
          <div>{jobItem.daysAgo}d</div>
        </div>
      </li>
    </a>
  );
}

export default JobListItem;
