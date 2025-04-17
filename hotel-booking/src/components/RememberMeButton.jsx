export default function RememberMeButton() {
  return (
    <>
      <fieldset className="fieldset p-1 border-none rounded-box w-30 mt-1">
        <label className="fieldset-label">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox rounded-full"
          />
          <span className="text-l">Remember me</span>
        </label>
      </fieldset>
    </>
  );
}
