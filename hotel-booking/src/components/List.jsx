import PropertyCard from "./PropertyCard";
import HotelRating from "./HotelRating";

function List({ items, listTitle }) {
  const itemsJsx = items.map((item) => {
    return (
      <PropertyCard
        key={item.id}
        cardSize="w-50 sm:w-60"
        cardColor="bg-slate-700"
        cardTitle={item.name}
        imgSrc={item.image}
        cardDescription={
          <>
            <p>
              {`Price Range: ${item.priceRange.min} - ${item.priceRange.max}`}
            </p>
            <HotelRating star={item.rating} />
          </>
        }
        buttonText="Hotel Page"
      />
    );
  });

  return (
    <div className="my-10">
      <div className="divider divider mb-6">
        <h2 className="text-xl font-bold text-center">{listTitle}</h2>
      </div>
      <div className="justify-center m-5 place-items-center grid gap-5 grid-cols-[repeat(auto-fit,13rem)] sm:grid-cols-[repeat(auto-fit,15rem)]">
        {itemsJsx}
        "test"
      </div>
    </div>
  );
}
export default List;
