import Header from "../components/Header";
import Footer from "../components/Footer";
import Hotelbanner from "../components/Hotelbanner";
import HotelDescription from "../components/HotelDescription";
import List from "../components/List";
import RoomCard from "../components/RoomCard";

export default function HotelPage() {
  const Rooms = Array(2)
    .fill()
    .map((_, index) => (
      <RoomCard key={index} cardSize="w-50 sm:w-60" cardColor="bg-slate-700" />
    ));

  return (
    <>
      <Header />
      <Hotelbanner />
      <HotelDescription />
      <List items={Rooms} />
      <Footer />
    </>
  );
}
