import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import {
  faTaxi,
  faWifi,
  faSmoking,
  faWheelchair,
  faParking,
  faBowlFood,
  faFire,
  faSpa,
  faMosque,
  faSwimmingPool,
  faTv,
  faKitMedical,
  faCoffee,
  faElevator,
  faSuitcase,
  faTree,
  faBook,
  faBell,
  faDrumstickBite,
} from "@fortawesome/free-solid-svg-icons";

export default function Amenities({ amenitiesList }) {
  const icons = {
    Wifi: faWifi,
    Parking: faParking,
    Wheelchair: faWheelchair,
    Elevator: faElevator,
    KitMedical: faKitMedical,
    Taxi: faTaxi,
    SwimmingPool: faSwimmingPool,
    Spa: faSpa,
    Tv: faTv,
    Coffee: faCoffee,
    Suitcase: faSuitcase,
    Bell: faBell,
    BowlFood: faBowlFood,
    DrumstickBite: faDrumstickBite,
    Book: faBook,
    Mosque: faMosque,
    Tree: faTree,
    Fire: faFire,
    Smoking: faSmoking,
  };

  const iconDefenition = {
    Wifi: "Wifi",
    Parking: "Free Parking Place",
    Wheelchair: "Facilities for Disable People",
    Elevator: "Elevator",
    KitMedical: "On-Site Doctor",
    Taxi: "Taxi",
    SwimmingPool: "Swimming Pool",
    Spa: "Spa",
    Tv: "TV",
    Coffee: "Café",
    Suitcase: "Luggage Storage",
    Bell: "Late Arrival",
    BowlFood: "Buffet  Breakfast",
    DrumstickBite: "Buffet Lunch",
    Book: "Library",
    Mosque: "Mosque",
    Tree: "Green Place",
    Fire: "Fire Place",
    Smoking: "Smoking Room",
  };

  //showing amenities in custom number of cols
  const numCols = 3;
  let tmp_cols = [];
  let tmp_rows = [];

  const amenitiesJsx = amenitiesList.map((item, index) => {
    if (tmp_cols.length % numCols !== 0) {
      tmp_cols.push(
        <td
          key={uuidv4()}
          colSpan={index + 1 === amenitiesList.length ? "100%" : "0%"}
          className="text-center align-middle h-18"
        >
          <FontAwesomeIcon icon={icons[item]} className="mr-2" />
          {iconDefenition[item]}
        </td>
      );
    } else {
      tmp_rows.push(
        <tr key={uuidv4()} className="bg-base-200">
          {tmp_cols}
        </tr>
      );
      tmp_cols = [];
      tmp_cols.push(
        <td
          key={uuidv4()}
          colSpan={index + 1 === amenitiesList.length ? "100%" : "0%"}
          className="text-center align-middle h-18"
        >
          <FontAwesomeIcon icon={icons[item]} className="mr-2" />
          {iconDefenition[item]}
        </td>
      );
    }
    if (index + 1 === amenitiesList.length) {
      tmp_rows.push(
        <tr key={uuidv4()} className="bg-base-200">
          {tmp_cols}
        </tr>
      );
      return tmp_rows;
    }
  });

  return (
    <table className="table text-base w-full lg:w-1/2">
      <tbody>{amenitiesJsx}</tbody>
    </table>
  );
}
