import fs from "fs";
import { hotelNames, roomNames } from "./hotelRoomNames.js";
import provinces from "./provinces.js";
import { hotelImages, roomImages } from "./images.js";
import genReservedDate from "./genReservedDate.js";

function getItemRandomly(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export default function generateHotels(count = 10) {
  let hotels = [];
  for (let i = 0; i < count; i++) {
    hotels.push({
      id: i,
      name: getItemRandomly(hotelNames),
      Province: getItemRandomly(provinces),
      rating: Math.floor(Math.random() * 3 + 3),
      priceRange: {
        min: Math.floor(Math.random() * 500),
        max: Math.floor(Math.random() * 500 + 1000),
      },
      Image: getItemRandomly(hotelImages),
      rooms: genRooms(Math.floor(Math.random() * 20)),
    });
  }
  return hotels;
}

function genRooms(numRooms) {
  let rooms = [];
  for (let i = 0; i < numRooms; i++) {
    rooms.push({
      id: i,
      name: getItemRandomly(roomNames),
      price: Math.floor(Math.random() * 500) + 500,
      size: Math.floor(Math.random() * 7 + 2),
      reservedTime: [genReservedDate()],
      image: [...Array(Math.floor(Math.random() * 5) + 1)].map(() =>
        getItemRandomly(roomImages)
      ),
    });
  }
  return rooms;
}

const fakeDate = { hotels: generateHotels(1000) };
fs.writeFileSync("db.json", JSON.stringify(fakeDate, null, 2));
