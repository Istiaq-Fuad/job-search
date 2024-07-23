import { MagnifyingGlass } from "@phosphor-icons/react";
import useSearchTextContext from "../../lib/hooks/useSearchTextContext";

function SearchTextInput() {
  const { searchText, setSearchText } = useSearchTextContext();
  return (
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
  );
}

export default SearchTextInput;
