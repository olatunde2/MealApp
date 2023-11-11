import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [
    {
      url: "https://thecarefreekitchen.com/wp-content/uploads/2022/05/Hawaiian-Pizza-Recipe-1.jpg",
    },
    {
      url: "https://static.skipthedishes.com/c1c31b68-a2f9-47b4-b792-98af79f56c7a-item-image-1533767012097.",
    },
    {
      url: "https://th.bing.com/th/id/R.8f8656fd0c73699ed862b5cd4f334ebf?rik=4dA8YeVj22Xrsw&pid=ImgRaw&r=0",
    },
    {
      url: "https://th.bing.com/th/id/R.a5e33719cbd799daf9ed53f1a4cb305d?rik=y0qmoOUyvCqmkQ&riu=http%3a%2f%2fnigerianfoodies.com%2fwp-content%2fuploads%2f2017%2f05%2fnigerian-amala.jpeg&ehk=6XIDBTe8AWUbvzAiaLQ8tmOk%2fpeZ55IXPbFDDo5RaR0%3d&risl=&pid=ImgRaw&r=0",
    },
  ];

  const [cuttentIndex, setCuttentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlide = cuttentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : cuttentIndex - 1;
    setCuttentIndex(newIndex);
  };

  const nextSlider = () => {
    const isLastSlide = cuttentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : cuttentIndex + 1;
    setCuttentIndex(newIndex);
  };

  const moveToNextSlider = (slideIndex) => {
    setCuttentIndex(slideIndex);
  };

  return (
    <div className="max-w-[2030px] xl:h-[1000px] h-[500px]  w-full py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover  duration-500"
        style={{ backgroundImage: `url(${sliders[cuttentIndex].url})` }}
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlider} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((sliderItems, slideIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={slideIndex}
            onClick={() => moveToNextSlider(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
