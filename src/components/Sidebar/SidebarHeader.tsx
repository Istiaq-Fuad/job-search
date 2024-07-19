import { CaretUpDown } from "@phosphor-icons/react";

function SidebarHeader({ numberOfJobs }: { numberOfJobs: number }) {
  return (
    <div className="flex justify-between items-center p-2 shadow h-10">
      <p className="block">
        <span className="font-bold">{numberOfJobs}</span> results
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
  );
}

export default SidebarHeader;
