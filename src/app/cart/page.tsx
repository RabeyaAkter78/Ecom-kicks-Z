/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { clearCart } from "@/redux/feature/cart/cartSlice";
import { Button, InputNumber } from "antd";
import YouMayAlsoLike from "@/components/PageComponents/YouMayAlsoLike";
import Image from "next/image";
import { CiHeart, CiTrash } from "react-icons/ci";

const Cart = () => {
  const [items, setItems] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    const parsedCart = cart ? JSON.parse(cart) : [];
    setItems(parsedCart);

    const totalPrice = parsedCart.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity,
      0,
    );
    setTotal(totalPrice);
  }, []);

  const handleRemoveItem = (id: number, size?: number, color?: string) => {
    const newCart = items.filter(
      (item) => !(item.id === id && item.size === size && item.color === color),
    );
    setItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    const totalPrice = newCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    setTotal(totalPrice);
  };

  const handleUpdateQuantity = (
    id: number,
    quantity: number,
    size?: number,
    color?: string,
  ) => {
    const newCart = items.map((item) =>
      item.id === id && item.size === size && item.color === color
        ? { ...item, quantity }
        : item,
    );
    setItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    const totalPrice = newCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    setTotal(totalPrice);
  };
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          <div className="bg-white rounded-lg p-12 shadow-sm">
            <div className="text-gray-500 mb-6">
              <svg
                className="w-24 h-24 mx-auto mb-4 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added anything to your cart yet
            </p>
            <Link href="/product">
              <Button
                type="primary"
                size="large"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto bg-background px-4">
      <div className="my-8 font-rubik">
        <h1 className="text-2xl font-bold mb-2 font-rubik/32">
          Saving to celebrate{" "}
        </h1>
        <p className="text-gray-600">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>
        <Link href="#" className="text-gray-500">
          {" "}
          Join us
        </Link>{" "}
        or{" "}
        <Link href="#" className="text-gray-500">
          Sign-in
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        {/* Cart Items */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-md mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Your Bag</h2>
          <p className="text-gray-500 mb-4">
            Items in your bag are not reserved—check out now to make them yours.
          </p>

          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.size}-${item.color}`}
                className="flex flex-col md:flex-row items-start gap-4"
              >
                {/* Product Image */}
                <div className="flex-shrink-0 w-[200px] h-[225px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={225}
                    className="object-contain rounded-3xl w-full h-full"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 mt-2 flex-wrap">
                      <span className="text-sm">Size: {item.size}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Quantity:</span>
                        <InputNumber
                          min={1}
                          max={99}
                          value={item.quantity}
                          onChange={(value) =>
                            handleUpdateQuantity(
                              item.id,
                              value || 1,
                              item.size,
                              item.color,
                            )
                          }
                          className="w-20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 mt-4">
                    <CiHeart className="cursor-pointer text-xl text-gray-600 hover:text-red-500 transition" />
                    <CiTrash
                      className="cursor-pointer text-xl text-gray-600 hover:text-red-500 transition"
                      onClick={() =>
                        handleRemoveItem(item.id, item.size, item.color)
                      }
                    />
                  </div>
                </div>

                {/* Price */}
                <div className="mt-4 md:mt-0 md:ml-4 text-right">
                  <div className="font-bold text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md flex-shrink-0">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span className="font-medium">{items.length} ITEM</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Delivery</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Sales Tax</span>
            <span>-</span>
          </div>
          <div className="flex justify-between mb-4 font-bold text-xl">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white p-3 rounded-lg mb-4 hover:bg-gray-900 transition">
            Checkout
          </button>
          <p className="text-gray-600 underline cursor-pointer">
            Apply a promo code
          </p>
        </div>
      </div>
      {/* You may also like */}
      <YouMayAlsoLike></YouMayAlsoLike>
    </div>
  );
};

export default Cart;
