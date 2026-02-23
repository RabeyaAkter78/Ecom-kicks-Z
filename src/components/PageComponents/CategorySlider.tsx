"use client";
import React, { useState } from "react";
import Image from "next/image";

import { useGetProductByCategoryQuery } from "@/redux/api/productsApi";

const CategorySlider = () => {
  const { data: catData, isLoading } = useGetProductByCategoryQuery({});
  console.log("catData", catData);
  const categories = catData || [];

  const itemsPerPage = 2;
  const totalPages = categories.length
    ? Math.ceil(categories.length / itemsPerPage)
    : 0;

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
    <div className="bg-[#1c1c1c] ">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className=" rounded-t-[40px] md:px-10 py-8 flex items-center justify-between">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide">
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
        <div className="bg-background rounded-tl-[48px] overflow-hidden">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4a69e2]"></div>
            </div>
          ) : (
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >
              {categories?.map((category, pageIndex) => (
                <div
                  key={pageIndex}
                  className="min-w-full flex flex-col md:flex-row justify-between items-center"
                >
                  {categories
                    .slice(
                      pageIndex * itemsPerPage,
                      pageIndex * itemsPerPage + itemsPerPage,
                    )
                    .map((category) => (
                      <div key={category.id} className="relative">
                        {/* Image */}
                        <div className="relative  flex items-center justify-center ">
                          <Image
                            src={category.image}
                            alt={category.name}
                            width={690}
                            height={600}
                            className="object-contain w-full h-full"
                          />
                        </div>

                        <h1 className="absolute bottom-2 md:bottom-8 left-8 md:left-20 text-3xl font-extrabold text-black ">
                          {category.name}
                        </h1>

                        {/* Arrow Button on Card */}
                        <div className="absolute bottom-2 md:bottom-8 right-8 w-10 h-10 bg-black rounded-md flex items-center justify-center">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
