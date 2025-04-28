import { useState } from "react";

function SearchBar({ items }) {
  const [query, setQuery] = useState("");

  const recommendations = items.filter((item) => {
    if (query != "") {
      return item.name.toLowerCase().startsWith(query.toLowerCase());
    }
  });

  const recommendationsJsx = recommendations.map((value, index) => {
    return (
      <li
        key={index}
        className="flex justify-center items-center border-y h-10"
      >
        {value.name}
      </li>
    );
  });

  const handleSearch = (value) => {
    setQuery(value);
  };

  return (
    <label className="input w-xs sm:w-md relative">
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
      <ul className="absolute bg-black w-full top-full left-0 z-100 text-lg rounded-sm text-white">
        {recommendationsJsx}
      </ul>
    </label>
  );
}
export default SearchBar;
