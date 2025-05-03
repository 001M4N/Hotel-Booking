import PropertyCard from "./PropertyCard";
import HotelRating from "./HotelRating";
import Loading from "./Loading";
import Divider from "./Divider";
import ErrorDisplay from "./ErrorDisplay";
import InfoAlert from "./InfoAlert";

function List({
  items,
  loading,
  error,
  filterObj = {},
  listTitle,
  isForHotels = true,
}) {
  // calc if the rooms meets the filter selections: if it does not, the room gets filtered
  const calcIsFiltered = (item) => {
    // if the selected number of people is greater than room size, the room gets filtered
    if (item.size < filterObj.numPeople) {
      return true;
    }

    // check for the dates: if the selected date is inside the booked dates, then the room gets filtered
    const selectedTimeStart = new Date(filterObj.checkInDate);
    const selectedTimeEnd = new Date(filterObj.checkOutDate);

    return item.reservedTime.some((time) => {
      const bookedTimeStart = new Date(time.startDate);
      const bookedTimeEnd = new Date(time.endDate);
      return (
        bookedTimeStart <= selectedTimeStart || selectedTimeEnd <= bookedTimeEnd
      );
    });
  };

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

  // if Hotel list is empty
  if (isForHotels && items.length === 0) {
    return (
      <>
        <Divider title={listTitle} />
        <div className="flex justify-center items-center">
          <InfoAlert message={"No items are currently available."} />
        </div>
      </>
    );
  }
  // if Room lis is empty
  if (!isForHotels && items.rooms.length === 0) {
    return (
      <>
        <Divider title={listTitle} />
        <div className="flex justify-center items-center">
          <InfoAlert message={"No items are currently available."} />
        </div>
      </>
    );
  }

  const itemsJsx = isForHotels
    ? items.map((item) => {
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
            cardDescription={
              <>
                <p>{`Price Range: $${item.priceRange.min} - $${item.priceRange.max}`}</p>
              </>
            }
            buttonLink={`/hotelPage/${item.id}`}
            buttonText="Hotel Page"
          />
        );
      })
    : items.rooms.map((item) => {
        return (
          <PropertyCard
            key={item.id}
            cardTitle={item.name}
            imgSrc={item.image}
            cardDescription={
              <>
                <p>{`Price: $${item.price}`}</p>
                <p>{`Size: ${item.size} person(s)`}</p>
              </>
            }
            buttonText={"Book"}
            buttonLink={""}
            isFiltered={calcIsFiltered(item)}
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
