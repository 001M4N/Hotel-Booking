function PropertyCard({
  cardSize = "w-80 sm:w-80",
  cardColor = "bg-slate-700",
  textColor = "text-white",
  cardTitle,
  imgSrc,
  cardDescription,
  buttonText,
}) {
  console.log(imgSrc);
  return (
    <div className={`card ${cardColor} ${cardSize} shadow-sm`}>
      <figure className="px-5 pt-10">
        <img src={imgSrc} alt="Hotel Image" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className={`card-title ${textColor}`}>{cardTitle}</h2>
        <div className={`${textColor}`}>{cardDescription}</div>
        <div className="card-actions">
          <button className="btn btn-base-200">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
