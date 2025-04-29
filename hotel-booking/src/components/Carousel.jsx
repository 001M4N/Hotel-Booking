import { useEffect, useState } from "react";

export default function Carousel({ items, isForImage = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  // if the Carousel is used for images, then each slide has one item,
  // otherwise, according to the window width, the number of the items
  // in each slide, will be calculated
  const numItemsPerSlide = isForImage
    ? 1
    : width >= 2000
    ? 4
    : width >= 1200
    ? 3
    : width >= 800
    ? 2
    : 1;

  const arrayLength = items.length;
  const selectedIndices = Array.from({ length: numItemsPerSlide }, (_, i) => {
    return (currentIndex + i) % arrayLength;
  });

  const slide = items.filter((_, i) => {
    return selectedIndices.includes(i);
  });

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // if Carousel isForImage, then the automatic sliding will be off
  useEffect(() => {
    let interval;
    if (!isForImage) {
      interval = setInterval(() => {
        setCurrentIndex((prevCurrentIndex) => {
          prevCurrentIndex === arrayLength - 1
            ? setCurrentIndex(0)
            : setCurrentIndex(prevCurrentIndex + 1);
        });
      }, 4000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [arrayLength, isForImage]);

  const handlePrevClick = () => {
    currentIndex === 0
      ? setCurrentIndex(arrayLength - 1)
      : setCurrentIndex(currentIndex - 1);
  };
  const handleNextlick = () => {
    currentIndex === arrayLength - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="w-full flex justify-center gap-x-20 p-1 relative">
      <button
        onClick={handlePrevClick}
        className="btn btn-sm absolute bottom-1/2 left-2 opacity-50 rounded-full z-100"
      >
        &lt;
      </button>
      {slide}
      <button
        onClick={handleNextlick}
        className="btn btn-sm absolute bottom-1/2 right-2 opacity-50 rounded-full z-100"
      >
        &gt;
      </button>
    </div>
  );
}
