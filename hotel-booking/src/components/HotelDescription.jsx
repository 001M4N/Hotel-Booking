import Amenities from "./Amenities";
import ErrorDisplay from "./ErrorDisplay";
import Loading from "./Loading";
import Map from "./Map";

export default function HotelDescription({ items, loading, error }) {
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
    <div className="w-full flex justify-evenly items-center flex-col lg:flex-row gap-x-5 m-15 justify-between">
      <Amenities />
      <Map lat={35.715298} long={51.404343} markerName={"hotel"} />
    </div>
  );
}
