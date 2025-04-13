export default function NumberOfPeopleSelector() {
  const options = Array(10)
    .fill()
    .map((_, index) => <option key={index}>{index}</option>);

  return (
    <select defaultValue="Pick a color" className="select">
      <option disabled={true}>Number of People</option>
      {options}
    </select>
  );
}
