import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="navbar-start">
        <Link to={"/"}>
          <button className="btn btn-ghost btn-xl">Hotel Booking</button>
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-lg">Sign in/up</button>
      </div>
    </div>
  );
}

export default Header;
