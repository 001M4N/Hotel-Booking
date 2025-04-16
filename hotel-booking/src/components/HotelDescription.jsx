import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTaxi, faWifi, faSmoking } from "@fortawesome/free-solid-svg-icons";

export default function HotelDescription() {
  return (
    <div className="h-100 w-full">
      <table className="table mt-10 ml-5 w-1/2">
        <thead>
          <tr className="text-center">
            <th>Amenities</th>
          </tr>
        </thead>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
}
