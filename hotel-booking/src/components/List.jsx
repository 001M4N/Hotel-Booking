import HotelCard from "./HotelCard";

function List(items) {
  return (
    <div className="my-10">
      <div className="divider divider mb-6">
        <h2 className="text-xl font-bold text-center">Hotels</h2>
      </div>
      <div className="justify-center m-5 place-items-center grid gap-5 grid-cols-[repeat(auto-fit,13rem)] sm:grid-cols-[repeat(auto-fit,15rem)]">
        {items}
      </div>
    </div>
  );
}
export default List;
