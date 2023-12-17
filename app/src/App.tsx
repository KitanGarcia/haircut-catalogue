import { useEffect, useState } from "react";
import SearchDropDown from "./components/SearchDropDown";
import Haircut from "./types/haircut";

function App() {
  const [isSearchbarSelected, setIsSearchbarSelected] = useState(false);
  const [haircuts, setHaircuts] = useState<Haircut[]>([]);
  const [matches, setMatches] = useState<string[]>([]);
  const [lowerCaseMap, setLowerCaseMap] = useState<Record<string, string>>({});
  const [selection, setSelection] = useState<string>("");

  // Fetch haircuts from DB
  const fetchHaircuts = async () => {
    console.log("Fetching haircuts");
    try {
      const response = await fetch("http://localhost:5000/haircuts");
      console.log(response);

      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
      // Tell user that the fetch failed
      alert("Failed to load haircuts");
      return [];
    }
  };

  // Set up state from fetched haircuts
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

  return (
    <div className="h-full bg-gradient-to-br from-amber-200 to-orange-400 flex justify-center text-slate-600">
      <div className="w-1/2 mt-12 flex justify-center">
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
      </div>
    </div>
  );
}

export default App;
