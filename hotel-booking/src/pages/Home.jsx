import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PopularHotels from "../components/PopularHotels";
import List from "../components/List";
import Footer from "../components/Footer";
import useAPICall from "../hooks/useAPICall";
import { useState } from "react";
import Filter from "../components/Filter";
import ProvinceSelector from "../components/ProvinceSelector";

function Home() {
  const { data, loading, error } = useAPICall("http://localhost:3000/hotels");
  const [selectedProvince, setSelectedProvince] = useState("Tehran");

  const handleSelect = (selectedValue) => {
    setSelectedProvince(selectedValue);
  };

  const selProvinceItems =
    !loading && !error
      ? data.filter((item) => {
          return item.Province === selectedProvince;
        })
      : [];
  return (
    <div>
      <Header />
      <Filter>
        <SearchBar items={selProvinceItems} />
        <ProvinceSelector
          selectedValue={selectedProvince}
          onSelect={handleSelect}
        />
      </Filter>
      <PopularHotels items={selProvinceItems} loading={loading} error={error} />
      <List
        items={selProvinceItems}
        loading={loading}
        error={error}
        listTitle="Hotels"
      />
      <Footer />
    </div>
  );
}

export default Home;
