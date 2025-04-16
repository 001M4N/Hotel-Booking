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
  faKitMedical,
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
    <div className="h-100 w-full">
      <table className="table mt-10 ml-5 w-1/2">
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
          </tr>
          <tr className="bg-base-200">
            <td>
              <FontAwesomeIcon icon={faSmoking} className="mr-2" />
              Smoke Room
            </td>
            <td>
              <FontAwesomeIcon icon={faWheelchair} className="mr-2" />
              Disable-people friendlly
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
