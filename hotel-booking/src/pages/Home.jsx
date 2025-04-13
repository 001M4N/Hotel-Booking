import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PopularHotels from "../components/PopularHotels";
import List from "../components/List";
import Footer from "../components/Footer";

function Home() {
  const hotels = Array(10).fill(
    <HotelCard cardSize="w-50 sm:w-60" cardColor="bg-slate-700" />
  );

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
