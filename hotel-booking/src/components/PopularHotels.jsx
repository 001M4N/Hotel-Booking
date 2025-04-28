import PropertyCard from "./PropertyCard";
import HotelRating from "./HotelRating";
import Carousel from "./Carousel";
import Loading from "./Loading";
import Divider from "./Divider";
import ErrorDisplay from "./ErrorDisplay";

function PopularHotels({ items, loading, error }) {
  if (loading) {
    return (
      <div className="h-100">
        <Divider title={"Popular Hotels"} />
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center">
        <Divider title={"Popular Hotels"} />
        <ErrorDisplay message={error.message} />
      </div>
    );
  }

  const itemsJsx = items.map((item) => {
    return (
      <PropertyCard
        key={item.id}
        hotelId={item.id}
        isPopular={true}
        cardTitle={
          <>
            <HotelRating star={item.rating} />
            <h2 className="whitespace-nowrap">{item.name}</h2>
          </>
        }
        imgSrc={item.image}
        cardDescription={`Price Range: $${item.priceRange.min} - $${item.priceRange.max}`}
        buttonText="Hotel Page"
      />
    );
  });

  return (
    <div className="w-full mt-6">
      <div className="divider mb-6">
        <h2 className="text-xl font-bold text-center">Popular Hotels</h2>
      </div>
      <Carousel items={itemsJsx} />
    </div>
  );
}
export default PopularHotels;
