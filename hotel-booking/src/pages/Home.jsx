import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PopularHotels from "../components/PopularHotels";
import List from "../components/List";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";

function Home() {
  const hotels = Array(10)
    .fill()
    .map((_, index) => (
      <PropertyCard
        key={index}
        cardSize="w-50 sm:w-60"
        cardColor="bg-slate-700"
        cardTitle="Hotel"
        cardDescription="Price = $100"
        buttonText="Hotel Page"
      />
    ));

  return (
    <div>
      <Header />
      <SearchBar />
      <PopularHotels />
      <List items={hotels} listTitle="Hotels" />
      <Footer />
    </div>
  );
}

export default Home;
