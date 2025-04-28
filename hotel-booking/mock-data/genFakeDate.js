import fs from "fs";
import { hotelNames, roomNames } from "./hotelRoomNames.js";
import provinces from "./provinces.js";
import { hotelImages, roomImages } from "./images.js";
import genReservedDate from "./genReservedDate.js";
import { hotelComments } from "./hotelComments.js";
import { managerReplies } from "./hotelComments.js";

function getItemRandomly(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export default function genHotels(count = 10) {
  let hotels = [];
  for (let i = 0; i < count; i++) {
    hotels.push({
      id: String(i),
      name: getItemRandomly(hotelNames),
      Province: getItemRandomly(provinces),
      rating: Math.floor(Math.random() * 3 + 3),
      isSelected: Math.random() > 0.7,
      priceRange: {
        min: Math.floor(Math.random() * 500),
        max: Math.floor(Math.random() * 500 + 1000),
      },
      image: getItemRandomly(hotelImages),
    });
  }
  return hotels;
}

function genRooms(count = 20) {
  let hotelsRooms = [];
  const maxRoomNumber = 20;

  for (let i = 0; i < count; i++) {
    hotelsRooms.push({
      id: String(i),
      rooms: [...Array(Math.floor(Math.random() * maxRoomNumber))].map(
        (_, index) => {
          return {
            id: String(index),
            name: getItemRandomly(roomNames),
            price: Math.floor(Math.random() * 500) + 500,
            size: Math.floor(Math.random() * 7 + 2),
            reservedTime: [genReservedDate()],
            image: [...Array(Math.floor(Math.random() * 5) + 1)].map(() =>
              getItemRandomly(roomImages)
            ),
          };
        }
      ),
    });
  }
  return hotelsRooms;
}

function genComments(count) {
  const hotelsComments = [];
  const maxNumComments = 10;

  for (let i = 0; i < count; i++) {
    hotelsComments.push({
      id: String(i),
      comments: [...Array(Math.floor(Math.random() * maxNumComments))].map(
        (_, index) => {
          return {
            id: String(index),
            comment: getItemRandomly(hotelComments),
            reply: getItemRandomly(managerReplies),
          };
        }
      ),
    });
  }
  return hotelsComments;
}

const count = 1000;
const fakeDate = {
  hotels: genHotels(count),
  rooms: genRooms(count),
  comments: genComments(count),
};

fs.writeFileSync("db.json", JSON.stringify(fakeDate, null, 2));
