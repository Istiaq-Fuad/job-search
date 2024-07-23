import { CaretUpDown } from "@phosphor-icons/react";
import { SortingType } from "../../lib/types";
import useJobItemsContext from "../../lib/hooks/useJobItemsContext";

function SidebarHeader() {
  const { numberOfJobs, sortBy, handleSortingChange } = useJobItemsContext();
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
      className={`text-white opacity-60 px-1 py-0.5 rounded-sm ml-2 ${
        sortBy === buttonText ? "bg-stone-950" : "bg-zinc-600"
      }`}
      onClick={handleSortingChange}
    >
      {buttonText.toUpperCase()}
    </button>
  );
}

export default SidebarHeader;
