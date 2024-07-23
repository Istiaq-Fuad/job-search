import BookmarkButton from "./BookmarkedJobs";
import SearchTextInput from "./SearchTextInput";

function Header() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center flex-col h-[25vh]">
      <div className="text-white mb-5 relative">
        <a href="/" className="inline-block text-lg">
          remo<span className="font-bold italic">TIC</span>
        </a>
        <span className="mx-5 opacity-70">|</span>
        <BookmarkButton />
      </div>
      <SearchTextInput />
    </div>
  );
}

export default Header;
