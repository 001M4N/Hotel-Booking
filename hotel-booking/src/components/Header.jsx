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
        <Link to={"/SignIn"}>
          <button className="btn btn-lg">Sign in</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
