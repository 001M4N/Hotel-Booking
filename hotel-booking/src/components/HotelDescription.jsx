import Amenities from "./Amenities";
import Map from "./Map";

export default function HotelDescription() {
  return (
    <div className="w-full flex justify-center items-center flex-col sm:flex-row justify-between">
      <Amenities />
      <Map />
    </div>
  );
}
