import HotelCard from "./HotelCard";

function PopularHotels() {
  return (
    <div className="w-full mt-6">
      <div className="divider mb-6">
        <h2 className="text-xl font-bold text-center">Popular Hotels</h2>
      </div>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-3">
        <HotelCard
          cardSize="w-100 sm:w-90"
          cardColor="bg-yellow-200"
          textColor="text-black"
        />
        <HotelCard
          cardSize="w-100 sm:w-90"
          cardColor="bg-yellow-200"
          textColor="text-black"
        />
        <HotelCard
          cardSize="w-100 sm:w-90"
          cardColor="bg-yellow-200"
          textColor="text-black"
        />
      </div>
    </div>
  );
}
export default PopularHotels;
