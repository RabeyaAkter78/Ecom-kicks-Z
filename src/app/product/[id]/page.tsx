"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useGetProductByIdQuery } from "@/redux/api/productsApi";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import YouMayAlsoLike from "@/components/PageComponents/YouMayAlsoLike";

const ProductDetails = () => {
  const params = useParams();
  const productId = params.id as string;
  const colors = ["#1F2937", "#6B8E6E"];
  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
  const unavailableSizes = [39, 40];
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductByIdQuery(parseInt(productId));

  const [selectedSize, setSelectedSize] = useState<number | null>(38);

  if (isLoading) {
    return (
      <div className="bg-[#f3f3f3] min-h-screen py-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4a69e2]"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#f3f3f3] min-h-screen py-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">
              Error: Failed to fetch product
            </div>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#4a69e2] text-white px-6 py-3 rounded-lg font-rubik font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-[#f3f3f3] min-h-screen py-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-gray-500 text-xl">Product not found</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen py-8 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-4  ">
          {product.images
            ?.slice(0, 4)
            .map(
              (
                img: string | undefined | null | StaticImport | StaticImageData,
                index: number,
              ) => {
                const roundedStyles = [
                  "rounded-tl-[28px]",
                  "rounded-tr-[28px]",
                  "rounded-bl-[28px]",
                  "rounded-br-[28px]",
                ];

                return (
                  <div
                    key={index}
                    className={`relative bg-[#f5f5f5] overflow-hidden ${roundedStyles[index]}`}
                  >
                    {img && (
                      <Image
                        src={img}
                        alt={product.title}
                        width={600}
                        height={700}
                        className={`w-full h-full object-cover ${roundedStyles[index]}`}
                      />
                    )}
                  </div>
                );
              },
            ) || (
            // Fallback if no images
            <div className="col-span-2 bg-white rounded-2xl overflow-hidden flex items-center justify-center p-6">
              <Image
                src="/placeholder-image.jpg"
                alt={product.title}
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          )}
        </div>

        <div className="w-full md:w-[30%] ">
          <span className="bg-[#4d6cdc]   px-4 py-3 rounded-xl font-rubik text-white">
            New Release
          </span>

          <h1 className="text-xl text-[#232321] md:text-3xl font-semibold mt-4 font-rubik/32px">
            {product.title}
          </h1>

          <p className="text-[#4d6cdc] text-2xl  font-semibold my-4 font-rubik/24px ">
            ${product.price}.00
          </p>

          <div className="mt-4">
            <h3 className="font-semibold mb-3 font-rubik">COLOR</h3>

            <div className="flex gap-3">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
                    selectedColor === color
                      ? "border-2 border-black"
                      : "border-2 border-transparent"
                  }`}
                >
                  <span
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="my-8 font-rubik">
            <div className="flex justify-between items-center">
              <h3 className=" font-semibold">SIZE</h3>
              <span className="underline cursor-pointer">SIZE CHART</span>
            </div>

            <div className="grid grid-cols-8 gap-1 mt-3">
              {sizes.map((size) => {
                const isUnavailable = unavailableSizes.includes(size);

                return (
                  <button
                    key={size}
                    disabled={isUnavailable}
                    onClick={() => !isUnavailable && setSelectedSize(size)}
                    className={`p-4 rounded-lg font-medium border transition-all duration-200
          ${
            isUnavailable
              ? "bg-gray-400 text-white border-gray-400 cursor-not-allowed"
              : selectedSize === size
                ? "bg-black text-white border-black"
                : "bg-white border-gray-300 hover:border-black"
          }
        `}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <Link
                href="/cart"
                className="w-full bg-black text-white py-3 rounded-lg text-center "
              >
                <button className=" font-semibold hover:bg-gray-800 transition-all">
                  ADD TO CART
                </button>
              </Link>
              <button className="px-4 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all">
                <CiHeart className="text-2xl cursor-pointer" />
              </button>
            </div>

            <button className="w-full bg-[#4d6cdc] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
              BUY IT NOW
            </button>
          </div>

          {/* ABOUT PRODUCT */}
          <div className="mt-8 text-gray-600 space-y-3 font-rubik">
            <h3 className="font-semibold text-black">ABOUT THE PRODUCT</h3>
            <p>{product.description}</p>
            <p>
              This product is excluded from all promotional discounts and
              offers.
            </p>
            <ul className="list-disc pl-5 space-y-1 ml-5 ">
              <li>
                Pay over time in interest-free installments with Affirm, Klarna
                or Afterpay.
              </li>
              <li>
                Join adiClub to get unlimited free standard shipping, returns, &
                exchanges.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <YouMayAlsoLike />
    </div>
  );
};

export default ProductDetails;
