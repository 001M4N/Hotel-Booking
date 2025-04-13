import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PopularHotels from "../components/PopularHotels";
import List from "../components/List";
import Footer from "../components/Footer";
import HotelCard from "../components/HotelCard";

function Home() {
  const hotels = Array(10)
    .fill()
    .map((_, index) => (
      <HotelCard key={index} cardSize="w-50 sm:w-60" cardColor="bg-slate-700" />
    ));

  return (
    <div>
      <Header />
      <SearchBar />
      <PopularHotels />
      <List items={hotels} />
      <Footer />
    </div>
  );
}

export default Home;
