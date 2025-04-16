import Amenities from "./Amenities";
import Map from "./Map";

export default function HotelDescription() {
  return (
    <div className="h-100 w-full flex justify-between">
      <Amenities />
      <Map />
    </div>
  );
}
