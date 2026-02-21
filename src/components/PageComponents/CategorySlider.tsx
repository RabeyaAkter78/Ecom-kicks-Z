"use client";
import React, { useState } from "react";
import Image from "next/image";
import cat1 from "../../assets/images/cat1.png";
import cat2 from "../../assets/images/cat2.png";

const CategorySlider = () => {
  const categories = [
    { id: 1, title: "LIFESTYLE SHOES", image: cat1 },
    { id: 2, title: "BASKETBALL SHOES", image: cat2 },
    { id: 3, title: "RUNNING SHOES", image: cat1 },
    { id: 4, title: "TRAINING SHOES", image: cat2 },
  ];

  const itemsPerPage = 2;
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const nextSlide = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="bg-[#1c1c1c] rounded-t-[40px] px-10 py-8 flex items-center justify-between">
        <h2 className="text-5xl font-extrabold text-white tracking-wide">
          CATEGORIES
        </h2>

        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            disabled={currentPage === 0}
            className="w-10 h-10 bg-gray-600 text-white rounded-md flex items-center justify-center disabled:opacity-40"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            disabled={currentPage === totalPages - 1}
            className="w-10 h-10 bg-gray-300 text-black rounded-md flex items-center justify-center disabled:opacity-40"
          >
            ›
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="bg-[#e9e9e9] rounded-b-[40px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="min-w-full flex"
            >
              {categories
                .slice(
                  pageIndex * itemsPerPage,
                  pageIndex * itemsPerPage + itemsPerPage
                )
                .map((category, index) => (
                  <div
                    key={category.id}
                    className={`w-1/2 relative bg-[#efefef] h-[420px] flex items-center justify-center p-10
                    ${
                      index === 0
                        ? "rounded-l-[40px]"
                        : "rounded-r-[40px]"
                    }`}
                  >
                    {/* Image */}
                    <div className="relative w-full h-64">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-2xl font-extrabold text-black leading-snug">
                        {category.title.split(" ").map((word, i) => (
                          <span key={i} className="block">
                            {word}
                          </span>
                        ))}
                      </h3>
                    </div>

                    {/* Arrow Button on Card */}
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
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;