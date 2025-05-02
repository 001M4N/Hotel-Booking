import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function SearchBar({ items }) {
  const [query, setQuery] = useState("");
  const [recomVisible, setRecomVisible] = useState(false);
  const searchBarRef = useRef(null);

  // Handle hiding recommendations when clicking outside the SearchBar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setRecomVisible(false);
      }
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    };
  }, []);

  const recommendations = items.filter((item) => {
    if (query != "") {
      return item.name.toLowerCase().startsWith(query.toLowerCase());
    }
  });

  const recommendationsJsx = recommendations.map((item, index) => {
    return (
      <li
        key={index}
        className="flex justify-center items-center py-2
         text-white text-md hover:bg-blue-300"
      >
        <Link to={`/hotelPage/${item.id}`}>{item.name}</Link>
      </li>
    );
  });

  const handleSearch = (value) => {
    setQuery(value);
  };

  const handleFocus = () => {
    setRecomVisible(true);
  };

  return (
    <div className="relative z-100" ref={searchBarRef}>
      <label className="input input-lg input-primary w-xs sm:w-md">
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
          value={query}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          onFocus={handleFocus}
        />
      </label>
      {recommendationsJsx.length != 0 && recomVisible && (
        <ul
          className="absolute w-full top-full left-0 z-101 bg-base-200
          overflow-y-auto max-h-30 border-gray-500 border-opacity-70 border border-b rounded-xs"
        >
          {recommendationsJsx}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
