import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

function PaginationButtons() {
  return (
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
  );
}

export default PaginationButtons;
