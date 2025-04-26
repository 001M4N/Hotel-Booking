function PropertyCard({
  isPopular = false,
  cardTitle,
  imgSrc,
  cardDescription,
  buttonText,
}) {
  const [cardSize, cardColor, textColor] = isPopular
    ? ["w-100 sm:w-90", "bg-amber-100", "text-black"]
    : ["w-80 sm:w-70", "bg-slate-700", "text-white"];

  return (
    <div className={`card ${cardColor} ${cardSize} shadow-sm`}>
      <figure className="px-5 pt-10">
        <img
          src={imgSrc}
          alt="Hotel Image"
          className="rounded-xl w-full h-[150px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <div className={`card-title ${textColor} flex flex-col`}>
          {cardTitle}
        </div>
        <p className={`${textColor}`}>{cardDescription}</p>
        <div className="card-actions">
          <button className="btn btn-base-200">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
