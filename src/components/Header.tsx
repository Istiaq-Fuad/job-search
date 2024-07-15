import { CaretDown, MagnifyingGlass } from "@phosphor-icons/react";

function Header({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center flex-col h-[25vh]">
      <div className="text-white mb-5">
        <p className="inline-block text-lg">
          remo<span className="font-bold italic">TIC</span>
        </p>
        <span className="mx-5 opacity-70">|</span>
        <button>
          bookmarks{" "}
          <CaretDown size={15} weight="duotone" className="inline-block" />
        </button>
      </div>
      <div className="w-2/5 mx-auto relative mb-8">
        <input
          type="text"
          className="outline-none w-full h-11 pl-12 block rounded-md"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div
          className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
        >
          <MagnifyingGlass fontWeight={900} size={25} />
        </div>
      </div>
    </div>
  );
}

export default Header;
