import HotelCard from "./HotelCard";

function HotelList() {
  return (
    <div className="my-10">
      <div className="divider divider mb-6">
        <h2 className="text-xl font-bold text-center">Hotels</h2>
      </div>
      <div className="justify-center m-5 place-items-center grid gap-5 grid-cols-[repeat(auto-fit,13rem)] sm:grid-cols-[repeat(auto-fit,15rem)]">
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
