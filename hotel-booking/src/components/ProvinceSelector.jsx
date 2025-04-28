import provinces from "../data/provinces";

export default function ProvinceSelector({ selectorValue, onSelect }) {
  return (
    <label>
      <select
        className="select sm:w-3xs cursor-pointer"
        value={selectorValue}
        onChange={(e) => onSelect(e.target.value)}
      >
        {provinces.map((value, index) => {
          return <option key={index}>{value}</option>;
        })}
      </select>
    </label>
  );
}
