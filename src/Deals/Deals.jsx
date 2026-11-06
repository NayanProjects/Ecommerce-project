import React, { useContext } from "react";
import Navbar2 from "../Comp/Navbar2";
import {
  ChevronLeft,
  ChevronRight, 
  Flame,
  Heart,
  MoveRight,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Mycontext } from "../Comp/Mycontext";
import Card from "../Comp/Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Deals = ({cartcount}) => {
  let citemdata = [
    {
      img: "/images/Cmen.png",
      title: "Men's Clothing",
      tag: "Up to 50% off",
      id: "Men's Clothing",
    },
    {
      img: "/images/Cfemale.png",
      title: "Women's Clothing",
      tag: "Up to 60% off",
      id: "Women's Clothing",
    },
    {
      img: "/images/Cjewel.png",
      title: "Jewellery",
      tag: "Up to 40% off",
      id: "Jewelry",
    },
    {
      img: "/images/Celectronic.png",
      title: "Electronics",
      tag: "Up to 45% off",
      id: "Electronics",
    },
  ];
  let navigate = useNavigate();
  let { setCheckfoot, setCbedata, setCfedata, maindata,setDealdata } =
    useContext(Mycontext);

    let dealdatas=maindata.sort((a,b)=>{
      return b.discount-a.discount;
    });
  let dealdata = dealdatas.slice(0, 10);




  useGSAP(() => {
      if (dealdata.length === 0) return;
  gsap.from(".toto", {
    y:100,
    opacity:0,
 

    scrollTrigger: {
      trigger: ".toto",
      start: "top 100%",
      toggleActions: "play none none reverse",
     
    },
  });

    gsap.from(".cproduct-card", {
    x:1000,
    opacity:0,
    
 

    scrollTrigger: {
      trigger: ".deals",
      start: "top 100%",
      toggleActions: "play none none reverse",
     
    },
  });


},[]);




  return (
    <div>
      <Navbar2 cartcount={cartcount}/>
      <div className="flex flex-col gap-2 pt-4 px-6 pb-4">
        <div className="text-[#374151] flex items-center ">
          <NavLink to="/">Home</NavLink>
          <ChevronRight size={20} />
          <NavLink to="/Deals">Deals</NavLink>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-4">
        <div className=" max-w-[1340px] w-full mx-auto  pt-2 ">
          {/* hero slider */}
          <div className=" overflow-hidden  max-w-[1340px] w-full mx-auto relative ">
            <img
              className="w-[1340px] max-h-[300px] mx-auto rounded-2xl w-full "
              src="\images\dealsback.png"
              alt=""
            />
            <div
              className=" flex flex-col gap-2 absolute max-w-[450px] h-[250px] w-full absolute
           md:top-5 md:left-40 top-[-45px] left-5 justify-center"
            >
              <div className="flex flex-col gap-1.5">
                <h1 className="text-5xl font-bold hero-title  ">
                  Limited Time Deals
                </h1>
                <p className="leading-tight font-[inter]">
                  Grab the best deals before they're gone!
                </p>
              </div>
              <button
                className=" font-[inter] mt-2 flex bg-[#2563EB]  text-white py-2 px-6 rounded items-center gap-2 w-fit"
                onClick={() => {
                  navigate("/Product");
                }}
              >
                Shop All Deals
              </button>
            </div>

            {/* <div className="flex flex-col sale-text h-[95px] w-[95px] py-2 absolute top-[20px] right-[450px]  flex items-center justify-center rounded-full">
            <p className="text-[13px]">UP TO</p>
           <h1 className="text-2xl">40%</h1>
           <p className="text-[13px]">OFF</p>
           </div> */}
            <div></div>
          </div>
        </div>
        {/* flash deals */}
        <div className="category flex flex-col gap-4">
          <div className="flex justify-between px-2">
            <div className="flex gap-2 ">
              <div className="pt-1">
                {" "}
                <Zap size={30} className="fill-red-600 text-red-600" />
              </div>
              <div className="leading-tight">
                <h1 className="font-bold text-2xl font-[inter]">Flash Deals</h1>
                <p className="text-[#374151]">
                  Special offers for limited time{" "}
                </p>
              </div>
            </div>
            <button
              className="flex items-center text-[#2563EB] gap-1"
              onClick={() => {
                navigate("/Product");
                setDealdata(true);
                setCbedata(false);
                    setCfedata(false);
                    setCheckfoot(false);
              }}
            >
              View All <MoveRight size={16} />{" "}
            </button>
          </div>
          <div className="w-full flex   flex-wrap gap-12 pl-4 justify-center md:justify-normal toto">
            {dealdata.map((el, idx) => {
              // return (
              //   <div
              //     key={idx}
              //     className="bg-white w-fit rounded-xl overflow-hidden product-card max-w-[220px] w-full "
              //   >
              //     <div className="shadowss  ">
              //       {" "}
              //       <div className="relative">
              //         <img
              //           src={el.image}
              //           className="w-full h-[150px]  object-cover "
              //           alt=""
              //         />
              //         <div className="sale-badge top-[1px] left-[1px] absolute">
              //           -{el.discount}%
              //         </div>
              //         <div className="absolute right-2 top-2 bg-white rounded p-1 ">
              //           <Heart className=" text-gray-300" />
              //         </div>
              //       </div>
              //     </div>
              //     <div className="bg-white px-2  py-2 pb-3 flex flex-col gap-1.5 justify-center">
              //       <div className="flex gap-1 items-center text-[15px]">
              //         <Star
              //           className="text-yellow-300 fill-yellow-300"
              //           size={18}
              //         />{" "}
              //         <span className="font-bold">4.4</span>{" "}
              //         <span className="text-[#374151] ">(180)</span>
              //       </div>
              //       <div className="flex flex-col gap-1">
              //         <h1 className="font-bold text-[15px] h-5 line-clamp-1">
              //           {el.title}
              //         </h1>
              //         <div className="flex gap-2 items-center text-[16px]">
              //           <span className="font-extrabold">
              //             $
              //             {(el.price - (el.price * el.discount) / 100).toFixed(
              //               2,
              //             )}
              //           </span>
              //           <span>${el.price}</span>
              //         </div>
              //       </div>
              //       <button className="bg-[#2563EB] flex items-center gap-2 px-8 py-1  text-white rounded">
              //         <ShoppingCart size={20} />
              //         Add to Cart
              //       </button>
              //     </div>
              //   </div>
              // );
              return <Card classname="hello" el={el} key={idx}/>
            })}
          </div>
        </div>

        {/* deals by category */}
        <div className="flex flex-col gap-3 px-4 deals ">
          <div className="flex items-center gap-2">
            <Flame size={28} className="fill-red-600 text-red-600" />
            <h1 className="text-xl font-bold">Deals by Category</h1>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-normal flex-wrap md:flex-nowrap">
            {citemdata.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className="w-[310px] rounded-xl overflow-hidden relative cproduct-card"
                  onClick={() => {
                    navigate("/Product", { state: `${el.id}` });
                    setCbedata(false);
                    setCfedata(false);
                    setCheckfoot(false);
                    setDealdata(false);
                  }}
                >
                  <img src={el.img} className="h-full object-cover" alt="" />
                  <div className="absolute top-[20%] left-[4%] flex flex-col gap-8">
                    <div className="leading-tight flex flex-col gap-1">
                      <h1 className="font-bold text-xl">{el.title}</h1>
                      <p>{el.tag}</p>
                    </div>
                    <button className="bg-[#2563EB] text-[16px] px-3 py-2 w-fit rounded-xl text-white gap-1 flex items-center justify-center gap-2">
                      Shop Now <MoveRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
