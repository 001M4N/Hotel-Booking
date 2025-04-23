import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import HotelPage from "../pages/HotelPage";
import LoginSignPage from "../pages/LoginSignPage";
import Carousel from "../components/Carousel";
import PropertyCard from "../components/PropertyCard";

export default function AppRouter() {
  const abs = [...Array(10)].map((_, index) => {
    return (
      <PropertyCard
        key={index}
        isPopular={true}
        cardTitle="Hotel Abbasi"
        cardDescription="Total Price = $100"
        buttonText="Hotel Page"
      />
    );
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotelPage/:hotelId" element={<HotelPage />} />
        <Route path="/LoginSign" element={<LoginSignPage />} />
        <Route path="/test" element={<Carousel items={abs} />} />
      </Routes>
    </Router>
  );
}
