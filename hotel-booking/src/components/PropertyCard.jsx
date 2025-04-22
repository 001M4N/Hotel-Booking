function PropertyCard({
  isPopular = false,
  cardTitle,
  imgSrc,
  cardDescription,
  buttonText,
}) {
  const [cardSize, cardColor, textColor] = isPopular
    ? ["w-100 sm:w-90", "bg-yellow-200", "text-black"]
    : ["w-50 sm:w-60", "bg-slate-700", "text-white"];

  return (
    <div className={`card ${cardColor} ${cardSize} shadow-sm`}>
      <figure className="px-5 pt-10">
        <img src={imgSrc} alt="Hotel Image" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className={`card-title ${textColor}`}>{cardTitle}</h2>
        <p className={`${textColor}`}>{cardDescription}</p>
        <div className="card-actions">
          <button className="btn btn-base-200">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
