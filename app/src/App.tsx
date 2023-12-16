import { useEffect, useMemo, useState } from "react";
import SearchDropDown from "./components/SearchDropDown";

function App() {
  const haircuts = [
    "Test1",
    "Test2",
    "Test3",
    "Abc",
    "Ac",
    "Xyz",
    "est1",
    "est2",
    "est3",
    "bc",
    "c",
    "yz",
  ];
  const [isSearchbarSelected, setIsSearchbarSelected] = useState(false);
  const [matches, setMatches] = useState<string[]>([]);
  const [selection, setSelection] = useState("");

  useEffect(() => {
    // Fetch haircuts from DB
    setMatches(haircuts);
  }, []);

  // Store lowercase haircuts in dictionary for case insensitive search
  const lowerCaseMap = useMemo(() => {
    if (!haircuts || haircuts.length === 0) {
      return {};
    }
    let map: Record<string, string> = {};
    for (let haircut of haircuts) {
      map[haircut.toLowerCase()] = haircut;
    }
    return map;
  }, [haircuts]);
  //console.log("lower case map", lowerCaseMap);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSelection(input);

    // Find matches between lowercase query and lowercase haircuts
    // Lowercase used for case insensitivity
    const queryMatches = Object.keys(lowerCaseMap).filter((haircut) =>
      haircut.includes(input.toLowerCase())
    );

    // Get original casing for rendering
    const originalStrings: string[] = queryMatches.map(
      (lowerCase) => lowerCaseMap[lowerCase]
    );
    setMatches(originalStrings);
  };

  const handleSearchClick = (haircut: string) => {
    setSelection(haircut);
    setMatches([haircut]);
  };

  console.log("SELECITON", selection);

  return (
    <div className="h-full bg-gradient-to-br from-amber-200 to-orange-400 flex justify-center text-slate-600">
      <div className="w-1/2 mt-12 flex justify-center">
        <div
          className={`relative max-w-md h-fit w-11/12 rounded-b-xl rounded-t-2xl ${
            matches && "bg-white "
          }`}
        >
          <label
            className={`absolute bg-transparent left-4 -top-6 ${
              isSearchbarSelected
                ? "text-slate-800 border-slate-800"
                : "text-slate-500 border-slate-500"
            }`}
          >
            Haircut Type
          </label>

          <input
            className={`relative w-full h-12 z-10 rounded-2xl outline-0 pl-2 border-2   ${
              isSearchbarSelected
                ? "border-slate-800 text-slate-800"
                : "border-slate-500 text-slate-500"
            }`}
            type="text"
            value={selection}
            placeholder="Filter by haircut type . . . "
            onFocus={() => setIsSearchbarSelected(true)}
            onBlur={() => setIsSearchbarSelected(false)}
            onChange={(e) => handleSearch(e)}
          ></input>
          {matches && (
            <SearchDropDown
              matches={matches}
              handleSearchClick={handleSearchClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
