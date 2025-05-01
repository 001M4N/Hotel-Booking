import provinces from "../data/provinces";

export default function ProvinceSelector({ selectedValue, onSelect }) {
  return (
    <label>
      <select
        className="select w-xs sm:w-3xs cursor-pointer select-primary select-lg"
        value={selectedValue}
        onChange={(e) => onSelect(e.target.value)}
      >
        {provinces.map((value, index) => {
          return <option key={index}>{value}</option>;
        })}
      </select>
    </label>
  );
}
