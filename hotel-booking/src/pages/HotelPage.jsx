import useAPICall from "../hooks/useAPICall";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import HotelBanner from "../components/HotelBanner";
import HotelDescription from "../components/HotelDescription";
import Filter from "../components/Filter";
import NumInput from "../components/NumInput";
import Calendar from "../components/Calendar";
import List from "../components/List";
import CommentsSection from "../components/CommentsSection";
import Footer from "../components/Footer";
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
  const [checkInDate, setcheckInDate] = useState("");
  const [checkOutDate, setcheckOutDate] = useState("");

  const handleInputChange = (value) => {
    setNumPeople(value);
  };

  const handleCheckInDate = (value) => {
    setcheckInDate(value);
  };

  const handleCheckOutDate = (value) => {
    setcheckOutDate(value);
  };

  return (
    <>
      <Header />
      <HotelBanner
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
        <NumInput value={numPeople} onNumInputChange={handleInputChange} />
        <Calendar
          onCalendarChange={handleCheckInDate}
          legendText={"Check in Date:"}
          value={checkInDate}
        />
        <Calendar
          onCalendarChange={handleCheckOutDate}
          legendText={"Check out Date:"}
          value={checkOutDate}
        />
      </Filter>
      <List
        items={roomsData}
        loading={roomsDataLoading}
        error={roomsDataError}
        filterObj={{ numPeople, checkInDate, checkOutDate }}
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
