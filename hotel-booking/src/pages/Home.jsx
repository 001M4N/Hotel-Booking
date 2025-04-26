import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PopularHotels from "../components/PopularHotels";
import List from "../components/List";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import useAPICall from "../hooks/useAPICall";
import Skeleton from "../components/Skeleton";

function Home() {
  const { data, loading, error } = useAPICall("http://localhost:3000/hotels");
  return (
    <div>
      <Header />
      <SearchBar />
      {loading ? (
        <Skeleton />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <PopularHotels items={data} title="Popular Hotels" />
          <List items={data} listTitle="Hotels" />
        </>
      )}
      <Footer />
    </div>
  );
}

export default Home;
