import { useEffect, useState } from "react";
import HaircutCard from "./components/HaircutCard";
import SearchDropDown from "./components/SearchDropDown";
import Haircut from "./types/haircut";

function App() {
  const [isSearchbarSelected, setIsSearchbarSelected] = useState(false);
  const [haircuts, setHaircuts] = useState<Record<string, Haircut>>({});
  const [matches, setMatches] = useState<string[]>([]);
  const [lowerCaseMap, setLowerCaseMap] = useState<Record<string, string>>({});
  const [selection, setSelection] = useState<string>("");
  const [sortAscending, setSortAscending] = useState(true);
  const [sortAlphabetical, setSortAlphabetical] = useState(true);

  // Fetch haircuts from DB
  const fetchHaircuts = async () => {
    try {
      const response = await fetch("http://localhost:5000/haircuts");

      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);

      // Tell user that the fetch failed
      alert("Failed to load haircuts");
      return {};
    }
  };

  // Initialize state from fetched haircuts
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHaircuts();

      let haircutNames: string[] = [];
      let lowerCaseNamesMap: Record<string, string> = {};
      let keys = Object.keys(data);
      for (let haircutName of keys) {
        // Get all haircut names to initialize matches as all haircuts
        // ^ This is to show user all options on empty input (no filter applied)
        haircutNames.push(haircutName);

        // Store lowercase haircuts in dictionary for case insensitive search
        lowerCaseNamesMap[haircutName.toLowerCase()] = haircutName;
      }
      setHaircuts(data);
      setMatches(haircutNames);
      setLowerCaseMap(lowerCaseNamesMap);
    };
    fetchData();
  }, []);

  // Sets matches according to user input
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

  // Sets selection and matches to clicked haircut so it alone displays
  const handleSearchClick = (haircut: string) => {
    setSelection(haircut);
    setMatches([haircut]);
  };

  // Sort haircuts by price or alphabetically
  const sortHaircuts = (method: string) => {
    let sortableHaircuts: Haircut[] = [];
    let sorted: Haircut[] = [];

    // Price sort
    if (method === "price") {
      for (let haircut of matches) {
        if (haircuts[haircut]) {
          sortableHaircuts.push(haircuts[haircut]);
        }
      }

      if (sortAscending) {
        sorted = sortableHaircuts.sort((a: Haircut, b: Haircut) => {
          return a.price - b.price;
        });
      } else {
        sorted = sortableHaircuts.sort((a: Haircut, b: Haircut) => {
          return b.price - a.price;
        });
      }
      let sortedNames = sorted.map((haircut) => haircut.name);
      setMatches(sortedNames as string[]);
      setSortAscending(!sortAscending);
    }

    // Alphabetical sort
    else {
      let sortedMatches = matches;
      if (sortAlphabetical) {
        sortedMatches = matches.sort();
      } else {
        sortedMatches = matches.sort().reverse();
      }
      setMatches(sortedMatches);
      setSortAlphabetical(!sortAlphabetical);
    }
  };

  return (
    <div className="h-full overflow-auto bg-gradient-to-br from-amber-200 to-orange-400 text-slate-600">
      <div className="w-full pt-16 flex justify-center items-center flex-col">
        <div
          className={`relative max-w-md h-fit w-11/12 rounded-b-xl rounded-t-2xl ${
            matches.length > 0 && "bg-white"
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
        <div className="h-12 w-64 flex justify-around items-center">
          <button
            className="h-7 px-3 leading-none bg-white rounded-xl border-2 border-slate-500 text-slate-500 hover:border-slate-800 hover:text-slate-800"
            onClick={() => sortHaircuts("price")}
          >
            Sort: Price
          </button>

          <button
            className="h-7 px-3 leading-none bg-white rounded-xl border-2 border-slate-500 text-slate-500 hover:border-slate-800 hover:text-slate-800"
            onClick={() => sortHaircuts("alphabetical")}
          >
            Sort: Name
          </button>
        </div>
      </div>
      {matches && (
        <div className="place-content-center flex flex-wrap p-5 gap-12">
          {matches.map((haircutName) => (
            <HaircutCard
              key={haircutName}
              haircut={haircuts[haircutName]}
              haircutName={haircutName}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
