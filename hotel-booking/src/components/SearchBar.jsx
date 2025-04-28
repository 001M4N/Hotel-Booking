import { useState } from "react";

function SearchBar({ items }) {
  const [query, setQuery] = useState("");

  const recommendations = items.filter((item) => {
    if (query != "") {
      return item.name.toLowerCase().startsWith(query.toLowerCase());
    }
  });
  console.log(recommendations);

  const recommendationsJsx = recommendations.map((value, index) => {
    return (
      <li
        key={index}
        className="flex justify-center items-center py-1
         text-white text-base hover:bg-blue-300"
      >
        {value.name}
      </li>
    );
  });

  const handleSearch = (value) => {
    setQuery(value);
  };

  return (
    <label className="input w-xs sm:w-md relative z-100">
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        type="search"
        required
        placeholder="Search Hotel Name"
        className="text-lg"
        value={query}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />

      {recommendationsJsx.length != 0 && (
        <ul className="absolute w-full top-full left-0 z-101 bg-base-200 mt-[1px] overflow-y-auto max-h-30 border-x border-b rounded-md">
          {recommendationsJsx}
        </ul>
      )}
    </label>
  );
}
export default SearchBar;
