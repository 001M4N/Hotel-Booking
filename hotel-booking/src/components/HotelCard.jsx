function HotelCard({ cardSize = "w-100" }) {
  return (
    <div className={`card bg-slate-700 ${cardSize} shadow-sm`}>
      <figure className="px-5 pt-10">
        <img
          src="../../public/assets/placeHolderImage.webp"
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
