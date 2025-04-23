import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import HotelPage from "../pages/HotelPage";
import LoginSignPage from "../pages/LoginSignPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotelPage/:hotelId" element={<HotelPage />} />
        <Route path="/LoginSign" element={<LoginSignPage />} />
        <Route path="/test" />
      </Routes>
    </Router>
  );
}
