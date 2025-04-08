import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PopularHotels from "../components/PopularHotels";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <SearchBar />
      <PopularHotels />
      <Footer />
    </div>
  );
}

export default Home;
