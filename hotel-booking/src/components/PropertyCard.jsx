import { Link } from "react-router-dom";
import Carousel from "./Carousel";

function PropertyCard({
  isPopular = false,
  cardTitle,
  imgSrc,
  cardDescription,
  buttonText,
  buttonLink,
}) {
  const [cardSize, cardColor, textColor] = isPopular
    ? ["w-100 sm:w-90", "bg-amber-100", "text-black"]
    : ["w-80 sm:w-70", "bg-slate-700", "text-white"];

  return (
    <div className={`card ${cardColor} ${cardSize} shadow-sm`}>
      <Carousel
        items={imgSrc.map((src) => {
          return (
            <figure className="w-full">
              <img
                src={src}
                alt="Hotel Image"
                className="rounded-2xl w-full h-[250px] p-2"
              />
            </figure>
          );
        })}
        isForImage={true}
      />
      <div className="card-body items-center text-center">
        <div className={`card-title ${textColor} flex flex-col`}>
          {cardTitle}
        </div>
        <div className={`text-lg ${textColor}`}>{cardDescription}</div>
        <div className="card-actions">
          <Link to={buttonLink}>
            <button className="btn btn-base-200">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
