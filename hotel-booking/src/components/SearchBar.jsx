import provinces from "../data/provinces";

function SearchBar({ onSelect }) {
  return (
    <div className="h-30 flex flex-col justify-center gap-x-5 gap-y-3 items-center sm:flex-row">
      <label className="input">
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
        <input type="search" required placeholder="Search Hotel Name" />
      </label>

      <select
        className="select sm:w-3xs cursor-pointer"
        onChange={(e) => onSelect(e.target.value)}
      >
        {provinces.map((value, index) => {
          if (value === "Tehran") {
            return (
              <option key={index} selected="selected">
                {value}
              </option>
            );
          } else {
            return <option key={index}>{value}</option>;
          }
        })}
      </select>
    </div>
  );
}
export default SearchBar;
