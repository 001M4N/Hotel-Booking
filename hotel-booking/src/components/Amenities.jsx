import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export default function Amenities() {
  const icons = {
    Wifi: "faWifi",
    Parking: "faParking",
    Wheelchair: "faWheelchair",
    Elevator: "faElevator",
    KitMedical: "faKitMedical",
    Taxi: "faTaxi",
    SwimmingPool: "faSwimmingPool",
    Spa: "faSpa",
    Tv: "faTv",
    Coffee: "faCoffee",
    Suitcase: "faSuitcase",
    Bell: "faBell",
    BowlFood: "faBowlFood",
    DrumstickBite: "faDrumstickBite",
    Book: "faBook",
    Mosque: "faMosque",
    Tree: "faTree",
    Fire: "faFire",
    Smoking: "faSmoking",
  };

  return (
    <table className="table h-10 w-1/2">
      <tbody>
        <tr className="bg-base-200">
          <td>
            <FontAwesomeIcon icon={faTaxi} className="mr-2" />
            Taxi
          </td>
          <td>
            <FontAwesomeIcon icon={faWifi} className="mr-2" />
            Wifi
          </td>
          <td>
            <FontAwesomeIcon icon={faWifi} className="mr-2" />
            Wifi
          </td>
        </tr>
        <tr className="bg-base-200">
          <td>
            <FontAwesomeIcon icon={faTaxi} className="mr-2" />
            Taxi
          </td>
        </tr>
      </tbody>
    </table>
  );
}
