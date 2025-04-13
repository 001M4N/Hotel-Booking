import HotelRating from "./HotelRating";

export default function Hotelbanner() {
  return (
    <div className="hero w-full h-80 bg-[url(../../public/assets/placeHolderImage.webp)] relative">
      <div className="w-full h-8 absolute bottom-0 bg-black opacity-80 px-2 py-1 flex justify-between">
        <h2 className="text-xl">Hotel Abbasi</h2>
        <HotelRating />
      </div>
    </div>
  );
}
