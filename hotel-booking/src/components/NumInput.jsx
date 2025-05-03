export default function NumInput({ value, onNumInputChange }) {
  return (
    <fieldset className="fieldset w-1/2 lg:w-1/5">
      <legend className="fieldset-legend">Number of People:</legend>
      <input
        type="number"
        className="input input-lg input-primary w-full"
        onChange={(event) => {
          onNumInputChange(event.target.value);
        }}
        placeholder="Type a number"
        value={value}
      />
    </fieldset>
  );
}
