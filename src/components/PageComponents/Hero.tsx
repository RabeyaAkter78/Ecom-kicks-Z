/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import bg from "../../assets/images/bg.jpg";
import subHero1 from "../../assets/images/subHero1.jpg";
import subHero2 from "../../assets/images/subHero2.jpg";
import Image from "next/image";
import { StaticImageData } from "next/image";

const Hero = () => {
  const [currentBg, setCurrentBg] = useState<StaticImageData>(bg);

  const handleSubImageClick = (imageSrc: StaticImageData) => {
    setCurrentBg(imageSrc);
  };

  return (
    <div className="container mx-auto px-4 md:px-0">
      <div
        className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] bg-cover bg-center rounded-3xl p-6 sm:p-8 flex items-end transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${currentBg.src})` }}
      >
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-top-left bg-black text-white px-2 py-1 rounded-b-md text-xs sm:text-sm">
          Nike product of the year
        </div>

        <div className="text-white w-full sm:w-1/2 p-2 sm:p-0">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-rubik font-bold mb-2 leading-snug">
            NIKE AIR MAX
          </h2>
          <p className="text-sm sm:text-lg md:text-2xl font-semibold mb-4 sm:mb-6 font-sans">
            Nike introducing the new air max for everyone's comfort
          </p>
          <button className="bg-[#4F46E5] hover:bg-blue-700 text-white rounded-lg px-4 py-2 sm:px-8 sm:py-4 font-bold text-sm sm:text-base">
            SHOP NOW
          </button>
        </div>

        <div className="absolute right-2 bottom-2 sm:bottom-10 sm:right-10 flex flex-col gap-2 sm:gap-4 space-y-2">
          {[subHero1, subHero2].map((img, idx) => (
            <div
              key={idx}
              className="h-12 w-12 sm:w-40 sm:h-40 rounded-2xl overflow-hidden relative cursor-pointer ring-2 ring-white ring-offset-2 ring-offset-transparent hover:ring-offset-white transition-all duration-300 "
              onClick={() => handleSubImageClick(img)}
            >
              <Image
                src={img}
                alt={`sub hero ${idx + 1}`}
                fill
                className="objject-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
