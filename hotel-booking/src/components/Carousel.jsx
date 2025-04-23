import { useState } from "react";
import PropertyCard from "./PropertyCard";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-white w-full flex justify-center gap-x-10 py-5 relative">
      <button className="btn btn-lg absolute bottom-1/2 left-2 opacity-50 rounded-full">
        &lt;
      </button>
      <PropertyCard
        isPopular={true}
        cardTitle="Hotel Abbasi"
        cardDescription="Total Price = $100"
        buttonText="Hotel Page"
      />
      <PropertyCard
        isPopular={true}
        cardTitle="Hotel Abbasi"
        cardDescription="Total Price = $100"
        buttonText="Hotel Page"
      />
      <PropertyCard
        isPopular={true}
        cardTitle="Hotel Abbasi"
        cardDescription="Total Price = $100"
        buttonText="Hotel Page"
      />

      <button className="btn btn-lg absolute bottom-1/2 right-2 opacity-50 rounded-full">
        &gt;
      </button>
    </div>
  );
}
