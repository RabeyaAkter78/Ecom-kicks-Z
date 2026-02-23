import React from "react";
import f1 from "../../assets/images/f1.png";
import f2 from "../../assets/images/f2.png";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mb-8 ">
      <div className="container mx-auto ">
        <div className="relative">
          <div className="relative bg-[#4F46E5] rounded-t-3xl p-8 md:p-12 pb-20 mb-5">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
              <div className="text-white mb-8 md:mb-0 md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  Join our KicksPlus Club & get 15% off
                </h2>
                <p className="text-lg mb-6">
                  Sign up for free! Join the community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="px-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white flex-grow"
                  />
                  <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    SUBMIT
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <Image src={f1} alt="f1" width={400} height={400}></Image>
              </div>
            </div>
          </div>

          <div className=" bg-[#1C1C1C] rounded-t-3xl p-8 md:p-12 text-white -mt-10 z-50">
            <div className="container mx-auto md:mb-72">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-orange-400 font-rubik">
                    About us
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    We are the biggest hyperstore in the universe. We got you
                    all cover with our exclusive collections and latest drops.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="hover:text-white transition-colors cursor-pointer">
                      Runners
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer">
                      Sneakers
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer">
                      Basketball
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer">
                      Outdoor
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer">
                      Golf
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer">
                      Hiking
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Company</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="hover:text-white transition-colors cursor-pointer">
                      About
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer">
                      Contact
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer">
                      Blogs
                    </li>
                  </ul>
                </div>

           
                <div>
                  <h3 className="text-white font-bold text-lg mb-4">
                    Follow us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                      aria-label="Facebook"
                    >
                      <FaFacebook size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                      aria-label="Instagram"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      <FaTwitter size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                      aria-label="TikTok"
                    >
                      <FaTiktok size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full px-10 ">
              <Image
                src={f2}
                alt="KICKS background"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="py-4 z-10 text-center text-gray-500 text-sm">
          &copy; All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
