import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const numItemsPerSlide =
    width >= 1600 ? 4 : width >= 1200 ? 3 : width >= 800 ? 2 : 1;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [...Array(numItemsPerSlide)].map(() => {
    return (
      <PropertyCard
        isPopular={true}
        cardTitle="Hotel Abbasi"
        cardDescription="Total Price = $100"
        buttonText="Hotel Page"
      />
    );
  });

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 1024
        ? setNumItems(4)
        : window.innerWidth >= 768
        ? setNumItems(3)
        : setNumItems(1);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextCard = () => {};

  const previousCard = () => {};

  return (
    <div className="bg-white w-full flex justify-center gap-x-20 p-10 relative">
      <button className="btn btn-lg absolute bottom-1/2 left-2 opacity-50 rounded-full z-100">
        &lt;
      </button>

      {data}

      <button className="btn btn-lg absolute bottom-1/2 right-2 opacity-50 rounded-full z-100">
        &gt;
      </button>
    </div>
  );
}
