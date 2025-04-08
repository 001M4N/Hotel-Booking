import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PopularHotels from "../components/PopularHotels";
import HotelList from "../components/HotelList";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <SearchBar />
      <PopularHotels />
      <HotelList />
      <Footer />
    </div>
  );
}

export default Home;
