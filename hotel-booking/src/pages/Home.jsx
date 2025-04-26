import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PopularHotels from "../components/PopularHotels";
import List from "../components/List";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import useAPICall from "../hooks/useAPICall";

function Home() {
  const { data, loading, error } = useAPICall("http://localhost:3000/hotels");
  return (
    <div>
      <Header />
      <SearchBar />
      <PopularHotels
        items={data}
        loading={loading}
        error={error}
        title="Popular Hotels"
      />
      {!loading && <List items={data} listTitle="Hotels" />}
      <Footer />
    </div>
  );
}

export default Home;
