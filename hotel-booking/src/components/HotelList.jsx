import HotelCard from "./HotelCard";

function HotelList() {
  return (
    <div className="my-10">
      <h2 className="text-xl font-bold text-center mb-6 sm:mb-4">Hotels</h2>
      <div className="m-5 grid grid-cols-2 gap-5 place-items-center sm:grid-cols-5 xlg:grid-cols-6">
        <HotelCard cardSize="w-50 sm:w-60" cardColor="bg-slate-700" />
        <HotelCard cardSize="w-50 sm:w-60" cardColor="bg-slate-700" />
        <HotelCard cardSize="w-50 sm:w-60" cardColor="bg-slate-700" />
        <HotelCard cardSize="w-50 sm:w-60" cardColor="bg-slate-700" />
        <HotelCard cardSize="w-50 sm:w-60" cardColor="bg-slate-700" />
        <HotelCard cardSize="w-50 sm:w-60" cardColor="bg-slate-700" />
      </div>
    </div>
  );
}
export default HotelList;
