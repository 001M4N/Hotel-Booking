import PropertyCard from "./PropertyCard";
import HotelRating from "./HotelRating";
import Carousel from "./Carousel";
import Loading from "./Loading";

function PopularHotels({ items, loading, error }) {
  if (loading) {
    return (
      <div className="h-100">
        <div className="divider mb-6">
          <h2 className="text-xl font-bold text-center">Popular Hotels</h2>
        </div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const itemsJsx = items.map((item) => {
    return (
      <PropertyCard
        key={item.id}
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
