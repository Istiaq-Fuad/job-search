import { CaretUpDown } from "@phosphor-icons/react";
import { SortingType } from "../../lib/types";

function SidebarHeader({
  numberOfJobs,
  handleSortingChange,
  sortBy,
}: {
  numberOfJobs: number;
  handleSortingChange: (sortBy: SortingType) => void;
  sortBy: SortingType;
}) {
  return (
    <div className="flex justify-between items-center p-2 shadow h-10">
      <p className="block">
        <span className="font-bold">{numberOfJobs}</span> results
      </p>
      <div>
        <CaretUpDown className="cursor-pointer inline-block" />
        <SortingButton
          buttonText="relevant"
          sortBy={sortBy}
          handleSortingChange={() => handleSortingChange("relevant")}
        />
        <SortingButton
          buttonText="recent"
          sortBy={sortBy}
          handleSortingChange={() => handleSortingChange("recent")}
        />
      </div>
    </div>
  );
}

function SortingButton({
  sortBy,
  buttonText,
  handleSortingChange,
}: {
  sortBy: SortingType;
  buttonText: SortingType;
  handleSortingChange: () => void;
}) {
  return (
    <button
      className={`bg-zinc-800 text-white opacity-60 px-1 py-0.5 rounded-sm ml-2 ${
        sortBy === buttonText ? "bg-zinc-950" : "bg-zinc-500"
      }`}
      onClick={handleSortingChange}
    >
      {buttonText.toUpperCase()}
    </button>
  );
}

export default SidebarHeader;
