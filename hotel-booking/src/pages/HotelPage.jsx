import useAPICall from "../hooks/useAPICall";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Hotelbanner from "../components/Hotelbanner";
import HotelDescription from "../components/HotelDescription";
import Filter from "../components/Filter";
import NumInput from "../components/NumInput";
import Calendar from "../components/Calendar";
import List from "../components/List";
import CommentsSection from "../components/CommentsSection";
import Footer from "../components/Footer";
import { useSVGOverlay } from "react-leaflet/SVGOverlay";
import { useState } from "react";

export default function HotelPage() {
  const { hotelId } = useParams();
  const [hotelData, hotelDataLoading, hotelDataError] = useAPICall(
    `http://localhost:3000/hotels/${hotelId}`
  );
  const [roomsData, roomsDataLoading, roomsDataError] = useAPICall(
    `http://localhost:3000/rooms/${hotelId}`
  );

  const [commentsData, commentsLoading, commentsError] = useAPICall(
    `http://localhost:3000/comments/${hotelId}`
  );

  const [numPeople, setNumPeople] = useState(1);

  const handleInputChange = (value) => {
    setNumPeople(value);
  };

  console.log(numPeople);

  return (
    <>
      <Header />
      <Hotelbanner
        data={hotelData}
        loading={hotelDataLoading}
        error={hotelDataError}
      />
      <HotelDescription
        data={hotelData}
        loading={hotelDataLoading}
        error={hotelDataError}
      />
      <Filter>
        <NumInput onNumInputChange={handleInputChange} />
        <Calendar legendText={"Check in Date:"} />
        <Calendar legendText={"Check out Date:"} />
      </Filter>
      <List
        items={roomsData}
        loading={roomsDataLoading}
        error={roomsDataError}
        listTitle={"Rooms"}
        isForHotels={false}
      />
      <CommentsSection
        items={commentsData}
        loading={commentsLoading}
        error={commentsError}
      />
      <Footer />
    </>
  );
}
