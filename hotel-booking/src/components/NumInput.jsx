export default function NumInput() {
  const options = [
    "1 Adult",
    "2 Adults",
    "3 Adults",
    "4 Adults",
    "1 Adult, 1 Child",
    "1 Adult, 2 Children",
    "1 Adult, 3 Children",
    "1 Adult, 4 Children",
    "2 Adults, 1 Child",
    "2 Adults, 2 Children",
    "2 Adults, 3 Children",
    "2 Adults, 4 Children",
    "3 Adults, 1 Child",
    "3 Adults, 2 Children",
    "3 Adults, 3 Children",
    "3 Adults, 4 Children",
    "4 Adults, 1 Child",
    "4 Adults, 2 Children",
    "4 Adults, 3 Children",
    "4 Adults, 4 Children",
  ];

  return (
    <div className="m-2 flex justify-center items-center w-1/4">
      <button className="btn btn-primary h-7 mr-5 w-12 h-12 rounded-full">
        <span className="text-3xl">-</span>
      </button>
      <select
        defaultValue="Pick a text editor"
        className="select select-primary select-lg w-full"
      >
        {options.map((value) => {
          return <option>{value}</option>;
        })}
      </select>
      <button className="btn btn-primary h-7 ml-5 w-12 h-12 rounded-full">
        <span className="text-3xl">+</span>
      </button>
    </div>
  );
}
