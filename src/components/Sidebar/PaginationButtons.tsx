import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

function PaginationButtons({
  jobItemCount,
  currentPage,
  onPageChange,
}: {
  jobItemCount: number;
  currentPage: number;
  onPageChange: (direction: "next" | "prev") => void;
}) {
  if (jobItemCount > 8) {
    return (
      <div className="w-full p-2 border-t border-opacity-20 flex justify-between items-center bg-white">
        <button
          className={`px-2 py-0.5 bg-neutral-300 rounded-xl ${
            currentPage === 1 ? "invisible" : ""
          }`}
          onClick={() => onPageChange("prev")}
        >
          <ArrowLeft className="inline-block mr-1" />
          page {currentPage - 1}
        </button>
        <button
          className="px-2 py-0.5 bg-neutral-300 rounded-xl"
          onClick={() => onPageChange("next")}
        >
          page {currentPage + 1}
          <ArrowRight className="inline-block ml-1" />
        </button>
      </div>
    );
  }
}

export default PaginationButtons;
