import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#111827] text-white flex justify-around py-4 footerbox rounded-xl flex-col md:flex-row px-4 md:px-0 gap-4 md:gap-0 ">
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-bold">
          Shop<span className="text-[#2563EB]">Sphere</span>
        </h1>
        <p className="text-[15px]">Your modern shopping destination</p>
        <div className="flex gap-4">
          <FaInstagram />
          <FaFacebook />
          <GrYoutube />
          <FaTwitterSquare />
        </div>
        <p className="text-[15px]">@2026 ShopSphere.All rights are reserved</p>
      </div>

      <ul>
        <li className="text-xl font-bold">Shop</li>
        <li className="text-[15px]">Products</li>
        <li className="text-[15px]">Categories</li>
        <li className="text-[15px]">New Arrivals</li>
        <li className="text-[15px]">Featured Products</li>

        <li className="text-[15px]">Deals</li>
      </ul>

      <ul>
        <li  className="text-xl font-bold">Customer Care</li>
        <li className="text-[15px]">Contact Us</li>
        <li className="text-[15px]">FAQs</li>
        <li className="text-[15px]">Shipping & Delivery</li>

        <li className="text-[15px]">Track Order</li>
        <li className="text-[15px]">Help Center</li>
      </ul>

      <ul>
        <li  className="text-xl font-bold">Company</li>
        <li className="text-[15px]">About Us</li>
        <li className="text-[15px]">Our Story</li>
        <li className="text-[15px]">Careers</li>
        <li className="text-[15px]">Privacy Policy</li>
        <li className="text-[15px]">Terms & Conditions</li>
      </ul>

      <div className="flex flex-col text-xl font-bold gap-2">
        <h1>Get The App</h1>
      <div className="flex gap-2 flex-col md:flex-row">

          <div className="flex p-2 px-4 fborders rounded-xl bg-black items-center gap-1 w-fit md:w-full px-10">
          <img src="\apple.png" className="h-[40px]" alt="" />
          <div>
            <p className="text-[12px]"> Download on the </p>
            <h1 className="text-[16px]">App Store</h1>
          </div>
        </div>
        <div className="flex p-2 px-4 fborders rounded-xl bg-black items-center gap-1 w-fit md:w-full px-10">
          <img src="\playstore.png" className="h-[40px]" alt="" />
          <div>
            <p className="text-[12px]">GET IT ON</p>
            <h1  className="text-[16px]">Google Play</h1>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
