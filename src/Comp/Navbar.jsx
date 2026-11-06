import React, { useState } from "react";
import { CircleUserRound, Heart, Menu, Scale, Search, ShoppingCart,X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = ({cartcount}) => {
  let navigate=useNavigate();
  const [Openmenus,setOpenmenus]=useState(false);

  useGSAP(()=>{

    let tl=gsap.timeline();
    tl.from('.logo',{
      opacity:0,
      y:-100
      
    })
    tl.from(".its",{
        opacity:0,
      y:-100,
      
      stagger:0.01
    })
    tl.from(".sear",{
        opacity:0,
      y:-100
    })
    tl.from(".its1",{
         opacity:0,
      y:-100,
      
      stagger:0.01
    })
  })
  return (
    <div className="lg:h-[72px] w-full bg-white border border-[#E5E7EB]  items-center justify-between md:px-20 gap-2 py-2 md:gap-0 md:py-2 text-[#374151] flex   lg:flex-row flex-col">
      {/* Logo */}
      {/* <h1 className="font-[800] text-[#111827] text-[24px]">
        Shop<span className="text-[#2563EB]">Sphere</span>
      </h1> */}
      <div className="flex justify-between  items-center w-full lg:w-auto relative px-8 md:px-0  ">
          <div className="lg:hidden" onClick={()=>{
            setOpenmenus(!Openmenus);

          }}>
            <Menu size={28} />
          </div>
          <div>
            {" "}
            <h1 className="font-[800] text-[#111827] text-[24px] logo">
              Shop<span className="text-[#2563EB]">Sphere</span>
            </h1>
          </div>
          <div className="flex lg:hidden gap-4">
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `navlink flex gap-2 items-center ${isActive ? "active" : ""} `
              }
            >
              <Heart size={22} />
              {/* <span className="navlink">Wishlist</span> */}
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `navlink flex gap-2 items-center ${isActive ? "active" : ""}`
              }
            >
              <div className="relative">
                <ShoppingCart size={22} />
                <div className="absolute top-[-6px] right-[-5px] bg-red-600 rounded-full p-0.5 px-1 text-[10px] text-white">
                  {cartcount}
                </div>
              </div>
              {/* <span className="navlink">Cart</span> */}
            </NavLink>
          </div>



          <div className={`absolute bg-white   w-full px-6  py-4 shadow1 rounded z-50 items-center   transition-transform  ease-in  ${Openmenus?"top-10 flex left-0":"top-[-1000px] hidden"} `}>
                    <div className="  gap-2 text-[20px]  flex flex-col   relative w-full ">
                     <div className="absolute right-2  cursor-pointer " onClick={(e)=>{
                     e.preventDefault();
    e.stopPropagation();
                      setOpenmenus(false)
                  
                     
                     }}> <X size={26} /> </div>
          <NavLink
            className={({ isActive }) => `navlink ${isActive ? "active" : ""} its w-[80%]`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => `navlink ${isActive ? "active" : ""} its`}
            to="/Product"
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) => `navlink ${isActive ? "active" : ""} its`}
            to="/Category"
          >
            Categories
          </NavLink>
          <NavLink
            className={({ isActive }) => `navlink ${isActive ? "active" : ""} its`}
            to="/Deals"
          >
            Deals
          </NavLink>
        </div>

          </div>
        </div>

      {/* Navigation */}
      <div className=" gap-6 text-[16px]  hidden lg:flex">
        <NavLink
          className={({ isActive }) => `navlink ${isActive ? "active" : ""} its`}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => `navlink ${isActive ? "active" : ""} its`}
          to="/Product"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) => `navlink ${isActive ? "active" : ""} its`}
          to="/Category"
        >
          Categories
        </NavLink>
        <NavLink
          className={({ isActive }) => `navlink ${isActive ? "active" : ""} its`}
          to="/Deals"
        >
          Deals
        </NavLink>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 px-2 search sear" onClick={()=>{
        navigate("/Product");
      }}>
        <Search size={20} />
        <input
          type="text"
          placeholder="Search for products, brands and more..."
          className="flex-1 outline-none"
        />
      </div>

      {/* Actions */}
      <div className=" gap-6 text-[16px]  lg:flex  hidden ">
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            `navlink flex gap-2 items-center ${isActive ? "active" : ""} its1`
          }
        >
          <Heart size={22} />
          <span className="navlink">Wishlist</span>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `navlink flex gap-2 items-center ${isActive ? "active" : ""} its1`
          }
        >
          <div className="relative">
            <ShoppingCart size={22} />
            <div className="absolute top-[-6px] right-[-5px] bg-red-600 rounded-full p-0.5 px-1 text-[10px] text-white">
              {cartcount}
            </div>
          </div>
          <span className="navlink">Cart</span>
        </NavLink>

        <NavLink
          to="/account"
          className={({ isActive }) =>
            `navlink flex gap-2 items-center ${isActive ? "active" : ""} its1`
          }
        >
          <CircleUserRound size={22} />
          <span className="navlink">Account</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
