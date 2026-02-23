/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@/redux/feature/cart/cartSlice";
import { Button, InputNumber } from "antd";
import YouMayAlsoLike from "@/components/PageComponents/YouMayAlsoLike";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total, itemCount } = useSelector(
    (state: RootState) => state?.cart,
  );

  const handleRemoveItem = (id: number, size?: number, color?: string) => {
    dispatch(removeFromCart({ id, size, color }));
  };

  const handleUpdateQuantity = (
    id: number,
    quantity: number,
    size?: number,
    color?: string,
  ) => {
    dispatch(updateQuantity({ id, quantity, size, color }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
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
    <div className="container mx-auto bg-gray-50 p-6 md:p-12">
      <h1 className="text-2xl font-bold mb-2">Your Shopping Cart</h1>
      <div className="md:flex md:space-x-8">
        {/* Cart Items */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Your Bag</h2>
          <p className="text-gray-500 mb-4">
            Items in your bag are not reserved — checkout now to secure them.
          </p>

          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.size}-${item.color}`}
                className="border border-gray-300 rounded-lg p-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-sm">Color:</span>
                      <span
                        className="inline-block w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm ml-2">Size: {item.size}</span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-2">
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
                      <div className="text-right">
                        <div className="font-bold text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          onClick={() =>
                            handleRemoveItem(item.id, item.size, item.color)
                          }
                          className="text-red-500 hover:text-red-600 text-sm mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <Button danger onClick={handleClearCart}>
              Clear Cart
            </Button>
            <div className="font-bold text-lg">Total: ${total.toFixed(2)}</div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span className="font-medium">{itemCount} Items</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white p-3 rounded-lg mb-4 hover:bg-gray-900 transition">
            Checkout
          </button>
          <p className="text-gray-600 underline text-center cursor-pointer">
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
