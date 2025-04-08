import HotelCard from "./HotelCard";

function HotelLists() {
  return (
    <>
      <h2 className="text-xl font-bold text-center mb-6 sm:mb-1">Hotels</h2>
      <div className="grid grid-cols-4">
        <HotelCard cardSize="w-80" />
      </div>
    </>
  );
}
export default HotelLists;
