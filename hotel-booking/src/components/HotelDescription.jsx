import Amenities from "./Amenities";
import ErrorDisplay from "./ErrorDisplay";
import Loading from "./Loading";
import Map from "./Map";
import Divider from "./Divider";

export default function HotelDescription({ data, loading, error }) {
  if (loading) {
    return (
      <div className="h-100">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-100">
        <ErrorDisplay message={error.message} />
      </div>
    );
  }

  return (
    <div className="mt-5">
      <div
        className="w-full flex justify-evenly m-2 items-center flex-col
     lg:flex-row gap-x-5 gap-y-5 justify-between"
      >
        <Amenities amenitiesList={data.amenities} />
        <Map
          lat={data.latLong.lat}
          long={data.latLong.long}
          markerName={data.name}
        />
      </div>
    </div>
  );
}
