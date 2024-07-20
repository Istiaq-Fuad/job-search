import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { DirectionType } from "../../lib/types";

function PaginationButtons({
  jobItemCount,
  currentPage,
  totalNumberOfPages,
  onPageChange,
}: {
  jobItemCount: number;
  currentPage: number;
  totalNumberOfPages: number;
  onPageChange: (direction: DirectionType) => void;
}) {
  if (jobItemCount > 8) {
    return (
      <div className="w-full p-2 border-t border-opacity-20 flex bg-white items-center justify-between">
        {currentPage > 1 && (
          <button
            className={`px-2 py-1 bg-neutral-300 rounded-xl`}
            onClick={() => onPageChange("prev")}
          >
            <ArrowLeft className="inline-block mr-1" />
            page {currentPage - 1}
          </button>
        )}
        {currentPage < totalNumberOfPages && (
          <button
            className="px-2 py-1 bg-neutral-300 rounded-xl place-items-end justify-self-end"
            onClick={() => onPageChange("next")}
          >
            page {currentPage + 1}
            <ArrowRight className="inline-block ml-1" />
          </button>
        )}
      </div>
    );
  }
}

export default PaginationButtons;
