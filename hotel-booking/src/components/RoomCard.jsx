export default function RoomCard({ cardColor, cardSize, textColor }) {
  return (
    <div className={`card ${cardColor} ${cardSize} shadow-sm`}>
      <figure className="px-5 pt-10">
        <img
          src="../../public/assets/placeHolderImage.webp"
          alt="Hotel Image"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className={`card-title ${textColor}`}>Hotel Tehran</h2>
        <p className={`${textColor}`}> Price: $100</p>
        <div className="card-actions">
          <button className="btn btn-base-200">Book</button>
        </div>
      </div>
    </div>
  );
}
