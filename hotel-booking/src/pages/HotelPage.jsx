import Header from "../components/Header";
import Footer from "../components/Footer";
import Hotelbanner from "../components/Hotelbanner";
import HotelDescription from "../components/HotelDescription";
import List from "../components/List";
import PropertyCard from "../components/PropertyCard";
import Filter from "../components/Filter";
import CommentsSection from "../components/CommentsSection";

import useAPICall from "../hooks/useAPICall";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

export default function HotelPage() {
  const { hotelId } = useParams();
  const [hotelData, hotelDataLoading, hotelDataError] = useAPICall(
    `http://localhost:3000/hotels/${hotelId}`
  );
  const [roomsData, roomsDataLoading, roomsDataError] = useAPICall(
    `http://localhost:3000/rooms/${hotelId}`
  );

  // const Rooms = Array(10)
  //   .fill()
  //   .map((_, index) => (
  //     <PropertyCard
  //       key={index}
  //       cardSize="w-50 sm:w-60"
  //       cardColor="bg-slate-700"
  //       cardTitle="King Room"
  //       cardDescription="Total Price = $100"
  //       buttonText="Book"
  //     />
  //   ));

  return (
    <>
      <Header />
      <Hotelbanner />
      {/* <HotelDescription />
      <Filter />
      <List items={Rooms} listTitle="Rooms" />
      <CommentsSection /> */}
      <Footer />
    </>
  );
}
