import { CaretUpDown, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { JobItemType } from "../../lib/types";
import Spinner from "../Spinner";
import JobListItem from "./JobListItem";

function Sidebar({
  jobItems,
  isListLoading,
}: {
  jobItems: JobItemType[];
  isListLoading: boolean;
}) {
  return (
    <div className="col-span-1 border-r-[1px] border-opacity-10 border-black relative h-full flex flex-col">
      <div className="flex justify-between items-center p-2 shadow h-10">
        <p className="block">
          <span className="font-bold">{jobItems.length}</span> results
        </p>
        <div>
          <CaretUpDown className="cursor-pointer inline-block" />
          <button className="mx-2 bg-zinc-800 text-white opacity-60 px-1 py-0.5 rounded-sm ">
            RELEVANT
          </button>
          <button className="bg-zinc-800 text-white opacity-60 px-1 py-0.5 rounded-sm">
            RECENT
          </button>
        </div>
      </div>
      <ul className="overflow-y-auto custom-height custom-scrollbar">
        {isListLoading && <Spinner />}

        {!isListLoading &&
          jobItems.map((jobItem) => (
            <JobListItem key={jobItem.id} jobItem={jobItem} />
          ))}
      </ul>
      <div className="absolute bottom-0 w-full p-2 border-t-[1px] border-opacity-20 h-8 flex justify-between items-center">
        <button className="px-2 py-0.5 bg-neutral-300 rounded-xl">
          <ArrowLeft className="inline-block mr-1" />
          page 1
        </button>
        <button className="px-2 py-0.5 bg-neutral-300 rounded-xl">
          page 3
          <ArrowRight className="inline-block ml-1" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
