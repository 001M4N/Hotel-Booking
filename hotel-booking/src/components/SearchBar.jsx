import { useState } from "react";
import provinces from "../data/provinces";

function SearchBar({ items, onSelect, selectorValue }) {
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
  console.log(recommendationsJsx);

  return (
    <div className="h-30 flex flex-col justify-center gap-x-5 gap-y-3 items-center sm:flex-row">
      <label className="input sm:w-md relative">
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

      <select
        className="select sm:w-3xs cursor-pointer"
        value={selectorValue}
        onChange={(e) => onSelect(e.target.value)}
      >
        {provinces.map((value, index) => {
          return <option key={index}>{value}</option>;
        })}
      </select>
    </div>
  );
}
export default SearchBar;
