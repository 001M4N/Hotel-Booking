import ErrorDisplay from "./ErrorDisplay";
import HotelRating from "./HotelRating";

export default function HotelBanner({ data, loading, error }) {
  if (loading) {
    return <div className="skeleton w-full h-80"></div>;
  }

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  return (
    <div
      className="hero w-full h-80 relative"
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className="w-full h-10 absolute bottom-0 bg-black opacity-80 px-2 py-2 flex justify-between">
        <h2 className="text-xl">{data.name}</h2>
        <HotelRating star={data.rating} />
      </div>
    </div>
  );
}
