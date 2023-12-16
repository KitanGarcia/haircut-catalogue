interface SearchDropDownProps {
  matches: string[];
  handleSearchClick: (haircut: string) => void;
}

function SearchDropDown({ matches, handleSearchClick }: SearchDropDownProps) {
  return (
    <div className="bg-white max-h-32 overflow-y-scroll rounded-b-xl text-slate-400">
      <ul>
        {matches.map((match, index) => (
          <li
            key={index}
            onClick={() => handleSearchClick(match)}
            className={`relative z-30 pl-2 hover:text-slate-800 hover:bg-blue-200 cursor-pointer ${
              index === matches.length - 1 && "rounded-b-xl"
            }`}
          >
            {match}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchDropDown;
