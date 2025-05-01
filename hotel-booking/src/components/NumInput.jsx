export default function NumInput() {
  return (
    <fieldset className="fieldset w-1/5">
      <legend className="fieldset-legend">Number of People:</legend>
      <input
        type="number"
        className="input validator input-lg input-primary w-full"
        required
        placeholder="Type a number between 1 to 10"
        min="1"
        max="10"
        title="Must be between be 1 to 10"
      />
    </fieldset>
  );
}
