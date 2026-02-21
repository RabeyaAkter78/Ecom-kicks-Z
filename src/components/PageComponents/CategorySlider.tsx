"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import cat1 from "../../assets/images/cat1.png";
import cat2 from "../../assets/images/cat2.png";

const CategorySlider = () => {
  const categories = [
    {
      id: 1,
      title: "LIFESTYLE SHOES",
      image: cat1,
    },
    {
      id: 2,
      title: "BASKETBALL SHOES",
      image: cat2,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-[#1c1c1c] rounded-t-[40px] px-10 py-8 flex items-center justify-between">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
          CATEGORIES
        </h2>

        <div className="flex items-center gap-3">
          <button className="category-prev w-10 h-10 bg-gray-600 text-white rounded-md flex items-center justify-center">
            ‹
          </button>
          <button className="category-next w-10 h-10 bg-gray-300 text-black rounded-md flex items-center justify-center">
            ›
          </button>
        </div>
      </div>

      <div className="bg-[#e9e9e9] rounded-b-[40px] p-10">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".category-prev",
            nextEl: ".category-next",
          }}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={category.id}>
              <div
                className={`relative bg-[#efefef] h-[400px] flex items-center justify-center p-10
                ${index === 0 ? "rounded-l-[40px]" : "rounded-r-[40px]"}`}
              >
                <div className="relative w-full h-64">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-black leading-snug">
                    {category.title.split(" ").map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </h3>
                </div>

                <div className="absolute bottom-8 right-8 w-10 h-10 bg-black rounded-md flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H8M17 7V16"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;