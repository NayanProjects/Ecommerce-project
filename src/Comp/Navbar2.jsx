import React, { useContext, useState } from "react";
import {
  CircleUserRound,
  HdIcon,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Mycontext } from "./Mycontext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar2 = ({ cartcount }) => {
  let navigate = useNavigate();
  const { searchdata, setSearchdata } = useContext(Mycontext);
  // console.log("n",searchdata);
  // console.log(cartcount,"from nav");

  const [Openmenu,setOpenmenu]=useState(false);




 useGSAP(()=>{
  let tl=gsap.timeline();
   tl.from('.logo',{
      opacity:0,
      y:-100,
      duration:1
    })

    tl.from(".sear",{
        opacity:0,
      y:-100
    })

       tl.from(".its",{
        opacity:0,
      y:-100,
      
      stagger:0.1
    })

let tl2=gsap.timeline();
    tl2.from(".its2",{
      x:200,
      opacity:0,
      stagger:0.1
    })


 })






  return (
    <div className="h-auto w-full bg-white border border-[#E5E7EB]  items-center justify-between md:px-16 px-8 text-[#374151] flex flex-col gap-4 py-2 pt-4">
      <div className="flex  w-full lg:gap-15 flex-wrap gap-4 flex-row md:flex-nowrap  ">
        {/* Logo */}
        <div className="flex justify-between  items-center w-full md:w-auto relative ">
          <div className="md:hidden" onClick={()=>{
            setOpenmenu(!Openmenu);

          }}>
            <Menu size={28} />
          </div>
          <div>
            {" "}
            <h1 className="font-[800] text-[#111827] text-[24px] logo">
              Shop<span className="text-[#2563EB]">Sphere</span>
            </h1>
          </div>
          <div className="flex md:hidden gap-4">
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `navlink flex gap-2 items-center ${isActive ? "active" : ""}`
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



          <div className={`absolute bg-white   w-full px-6  py-4 shadow1 rounded z-50 items-center  md:hidden  transition-transform  ease-in  ${Openmenu?"top-10 flex":"top-[-1000px] hidden"} `}>
                    <div className="  gap-2 text-[20px]  flex flex-col   relative w-full ">
                     <div className="absolute right-0" onClick={()=>{
                      setOpenmenu(false)
                     }}> <X size={26} /></div>
          <NavLink
            className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}
            to="/Product"
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}
            to="/Category"
          >
            Categories
          </NavLink>
          <NavLink
            className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}
            to="/Deals"
          >
            Deals
          </NavLink>
        </div>

          </div>
        </div>

        {/* Search */}
        <div
          className="flex items-center gap-2 pl-2 sear search2 flex-1 overflow-hidden min-w-[400px]"
          onClick={() => {
            navigate("/Product");
          }}
        >
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            className="flex-1 outline-none "
            onChange={(e) => {
              setSearchdata(e.target.value);
            }}
          />
          <div className="h-full bg-[#2563EB]  px-2 flex items-center justify-center-safe">
            {" "}
            <Search
              size={15}
              className="text-white w-full bg-[#2563EB] h-full py-1 "
            />
          </div>
        </div>

        {/* Actions */}
        <div className=" gap-6 text-[16px]  md:flex  hidden">
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              `navlink flex gap-2 items-center ${isActive ? "active" : ""} its`
            }
          >
            <Heart size={22} />
            <span className="navlink">Wishlist</span>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `navlink flex gap-2 items-center ${isActive ? "active" : ""} its`
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
              `navlink flex gap-2 items-center ${isActive ? "active" : ""} its`
            }
          >
            <CircleUserRound size={22} />
            <span className="navlink">Account</span>
          </NavLink>
        </div>
      </div>
      {/* Navigation */}
      <div className="md:flex justify-self-start items-start w-full hidden">
        <div className=" gap-6 text-[16px]  flex ">
          <NavLink
            className={({ isActive }) => `navlink ${isActive ? "active" : ""} its2`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => `navlink ${isActive ? "active" : ""} its2`}
            to="/Product"
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) => `navlink ${isActive ? "active" : ""} its2`}
            to="/Category"
          >
            Categories
          </NavLink>
          <NavLink
            className={({ isActive }) => `navlink ${isActive ? "active" : ""} its2`}
            to="/Deals"
          >
            Deals
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
