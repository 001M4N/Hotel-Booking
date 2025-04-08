import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PopularHotels from "../components/PopularHotels";
import HotelLists from "../components/HotelLists";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <SearchBar />
      <PopularHotels />
      <HotelLists />
      <Footer />
    </div>
  );
}

export default Home;
