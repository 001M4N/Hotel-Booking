import PropertyCard from "./PropertyCard";
import HotelRating from "./HotelRating";
import Loading from "./Loading";
import Divider from "./Divider";
import ErrorDisplay from "./ErrorDisplay";

function List({ items, loading, error, listTitle }) {
  if (loading) {
    return (
      <div className="h-100">
        <div className="divider divider mb-6">
          <h2 className="text-xl font-bold text-center">{listTitle}</h2>
        </div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center">
        <Divider title={listTitle} />
        <ErrorDisplay message={error.message} />
      </div>
    );
  }

  const itemsJsx = items.map((item) => {
    return (
      <PropertyCard
        key={item.id}
        isPopular={false}
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
    <div className="my-10">
      <Divider title={listTitle} />
      <div className="justify-center m-5 place-items-center grid gap-8 grid-cols-[repeat(auto-fit,20rem)] sm:grid-cols-[repeat(auto-fit,17rem)]">
        {itemsJsx}
      </div>
    </div>
  );
}
export default List;
