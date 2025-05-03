export default function Calendar({ value, legendText, onCalendarChange }) {
  return (
    <fieldset className="fieldset w-1/2 lg:w-1/5">
      <legend className="fieldset-legend">{legendText}</legend>
      <input
        type="date"
        className="input input-lg w-full input-primary"
        onChange={(event) => {
          onCalendarChange(event.target.value);
        }}
        value={value}
      />
    </fieldset>
  );
}
