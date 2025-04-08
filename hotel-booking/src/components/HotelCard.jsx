function HotelCard() {
  return (
    <div className="card bg-slate-700 w-70 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Hotel Image"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Hotel Tehran</h2>
        <p> Price: $100</p>
        <div className="card-actions">
          <button className="btn btn-base-200">Hotel Page</button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
