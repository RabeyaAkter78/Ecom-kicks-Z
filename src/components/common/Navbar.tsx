"use client";
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import logo from "../../assets/images/Logo (1).png";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Drawer, Button, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Desktop Navbar */}
      <div className="bg-white rounded-3xl items-center justify-between px-8 py-8 mt-8 hidden lg:flex">
        <div className="flex items-center justify-between gap-10">
          <div className="flex items-center space-x-1">
            <p className="text-lg">New Drops 🔥</p>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-lg">Men</span>
            <MdArrowDropDown />
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-lg">Women</span>
            <MdArrowDropDown />
          </div>
        </div>

        <div className="font-bold text-2xl tracking-wider">
          <Image src={logo} alt="logo" width={100} height={100}></Image>
        </div>

        <div className="flex items-center justify-between gap-10">
          <IoSearch className="h-7 w-7" />

          <FaUser className="h-7 w-7" />

          <div className="relative">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-semibold">0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl flex items-center justify-between px-6 py-4 my-4 lg:hidden">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
          className="flex items-center justify-center text-2xl"
        />

        <div className="font-bold text-2xl tracking-wider">
          <Image src={logo} alt="logo" width={100} height={100}></Image>
        </div>

        <div className="flex items-center space-x-3">
          <FaUser className="h-6 w-6" />

          <div className="relative">
            <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-semibold">0</span>
            </div>
          </div>
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={drawerOpen}
        size={250}
      >
        <Space direction="vertical" size="large" className="w-full">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">New Drops 🔥</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">Men</span>
              <MdArrowDropDown />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">Women</span>
              <MdArrowDropDown />
            </div>
          </div>

          <div className="border-t pt-4">
            <Space direction="vertical" size="middle" className="w-full">
              <div className="flex items-center space-x-3">
                <IoSearch className="h-6 w-6" />
                <span className="text-lg">Search</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaUser className="h-6 w-6" />
                <span className="text-lg">Account</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">0</span>
                </div>
                <span className="text-lg">Cart</span>
              </div>
            </Space>
          </div>
        </Space>
      </Drawer>
    </div>
  );
};

export default Navbar;
