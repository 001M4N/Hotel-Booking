export default function HotelRating({ star }) {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((_, index) => {
        return (
          <div
            key={index}
            className="mask mask-star"
            aria-current={index === Math.floor(star) ? "true" : "false"}
            aria-label={`${index} star`}
          ></div>
        );
      })}
    </div>
  );
}
