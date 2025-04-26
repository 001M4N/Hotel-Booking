import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PopularHotels from "../components/PopularHotels";
import List from "../components/List";
import Footer from "../components/Footer";
import useAPICall from "../hooks/useAPICall";
import { useState } from "react";

function Home() {
  const { data, loading, error } = useAPICall("http://localhost:3000/hotels");
  const [selectedProvince, setSelectedProvince] = useState("Tehran");

  const handleSelect = (selectedValue) => {
    setSelectedProvince(selectedValue);
  };

  console.log(selectedProvince);

  return (
    <div>
      <Header />
      <SearchBar onSelect={handleSelect} selectorValue={selectedProvince} />
      <PopularHotels items={data} loading={loading} error={error} />
      <List items={data} loading={loading} error={error} listTitle="Hotels" />
      <Footer />
    </div>
  );
}

export default Home;
