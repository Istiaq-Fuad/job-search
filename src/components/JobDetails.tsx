import {
  BookmarkSimple,
  ClockClockwise,
  CurrencyCircleDollar,
  MapPin,
} from "@phosphor-icons/react";
import Qualifications from "./Qualifications";
import CompanyReviews from "./CompanyReviews";
import Spinner from "./Spinner";
import useActiveJobItem from "../lib/hooks/useActiveJobItem";

function JobDetails() {
  const { isItemLoading, activeJobItem } = useActiveJobItem();

  if (isItemLoading) return <Spinner />;

  if (!activeJobItem)
    return (
      <div className="flex justify-center items-center text-gray-400 h-full">
        Search for any job
      </div>
    );

  return (
    <>
      <div className="relative h-1/3 bg-gray-500 bg-right-bottom bg-cover bg-blend-multiply">
        <img
          className="absolute h-full w-full mix-blend-multiply"
          src={activeJobItem.coverImgURL}
          alt="cover-image"
        />
        <div className="absolute bottom-2 left-10 inline-flex overflow-visible">
          <a target="_blank" href={activeJobItem.companyURL}>
            <button className="bg-yellow-300 -mb-5 mr-3 rounded text-lg font-bold h-16 w-12 flex justify-center items-center">
              {activeJobItem.badgeLetters}
            </button>
          </a>
          <div className="inline-block text-zinc-200">
            <h1 className="capitalize text-2xl font-bold">
              {activeJobItem.title}
            </h1>
            <h2 className="font-semibold italic">{activeJobItem.company}</h2>
          </div>
        </div>
        <button className="absolute right-3 top-3 bg-gray-400 p-2 rounded-lg">
          APPLY
        </button>
      </div>
      <div className="px-10 overflow-y-auto h-2/3 custom-scrollbar">
        <div className="inline-flex mb-4">
          <div className="w-12 flex justify-between items-center mt-4 px-1">
            <span>{activeJobItem.daysAgo}d</span>
            <BookmarkSimple size={15} className="cursor-pointer inline-block" />
          </div>
          <div className="pt-1.5 pl-4">
            <p className="mt-2 mb-3">{activeJobItem.description}</p>
            <div className="mt-5">
              <div className="inline-flex mr-7">
                <ClockClockwise size={15} weight="duotone" className="mr-2" />
                <p>{activeJobItem.duration}</p>
              </div>
              <div className="inline-flex mr-7">
                <CurrencyCircleDollar
                  size={15}
                  weight="duotone"
                  className="mr-2"
                />
                <p>{activeJobItem.salary}</p>
              </div>
              <div className="inline-flex mr-7">
                <MapPin size={15} weight="duotone" className="mr-2" />
                <p>{activeJobItem.location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-2 w-full">
          <Qualifications qualifications={activeJobItem.qualifications} />
          <CompanyReviews reviews={activeJobItem.reviews} />
        </div>
      </div>
    </>
  );
}

export default JobDetails;
