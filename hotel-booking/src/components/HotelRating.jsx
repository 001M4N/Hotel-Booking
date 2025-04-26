export default function HotelRating({ star }) {
  console.log(star);
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((_, index) => {
        return (
          <div
            key={index}
            className="mask mask-star bg-yellow-400"
            aria-current={index + 1 === Math.floor(star) ? "true" : "false"}
            aria-label={`${index} star`}
          ></div>
        );
      })}
    </div>
  );
}
