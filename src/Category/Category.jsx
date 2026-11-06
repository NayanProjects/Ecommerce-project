import React, { useContext } from "react";
import Navbar2 from "../Comp/Navbar2";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronRight, MoveRight, Timeline } from "lucide-react";
import { Mycontext } from "../Comp/Mycontext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger, useGSAP);


const Category = ({ cartcount }) => {
  let navigate = useNavigate();
  let { setCheckfoot, setCbedata, setCfedata, setDealdata } =
    useContext(Mycontext);
  let citemdata = [
    {
      img: "/images/Cmen.png",
      title: "Men's Clothing",
      tag: "Trendy outfits for every occasion",
      id: "Men's Clothing",
    },
    {
      img: "/images/Cfemale.png",
      title: "Women's Clothing",
      tag: "Fashion for every you",
      id: "Women's Clothing",
    },
    {
      img: "/images/Cjewel.png",
      title: "Jewellery",
      tag: "Elegant pieces for special moments",
      id: "Jewelry",
    },
    {
      img: "/images/Celectronic.png",
      title: "Electronics",
      tag: "Latest tech for a better tomorrow",
      id: "Electronics",
    },
  ];

  let csubitemdata = [
    {
      img: "/images/CFoot.png",
      title: "Footwear",
      tag: "200+ Products",
      id: "Footwear",
    },
    {
      img: "/images/Cbags.png",
      title: "Bags & Accessories",
      tag: "180+ Products",
      id: "Bags & Accessories",
    },
    {
      img: "/images/Cbeauty.png",
      title: "Beauty & Personal Care",
      tag: "250+ Products",
      id: "Beauty & Personal Care",
    },
    {
      img: "/images/Chome.png",
      title: "Home & Living",
      tag: "300+ Products",
      id: "Home & Living",
    },
  ];
  // useGSAP(()=>{
  //   let tl=gsap.timeline();
  //   tl.from(".slides",{
  //     y:1000,
  //     opacity:0,
  //     duration:1,
  //     stagger:1,
  //     scrollTrigger:{
  //       trigger:".slides",
       
  //       scrub:true,
  //       start:"top 90%",
  //       end:"bottom 100%",
    

  //     }
  //   })


  //   let tl1=gsap.timeline();
  //   tl1.from(".lefts",{
  //     y:100,
      
    
  //   })
  // })
useGSAP(() => {

  // Main category cards
  gsap.fromTo(
    ".lefts",
    { x: -500, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".slide1box",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".rights",
    { x: 500, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".slide1box",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    }
  );

  // Subcategory cards
  gsap.fromTo(
    ".slides",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".slidebox",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    }
  );

});

  return (
    <div className="w-screen min-h-screen ">
      <Navbar2 cartcount={cartcount} />
      <div className="max-w-[1340px] w-full mx-auto h-full px-14 bg-[#F8FAFC] pt-4 pb-10  flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className="text-[#374151] flex items-center ">
            <NavLink to="/">Home</NavLink>
            <ChevronRight size={20} />
            <NavLink to="/Category">Category</NavLink>
          </div>
          <div className="leading-tight">
            <h1 className="text-2xl">Shop by Category</h1>
            <p className="text-[#374151] ">
              Explore our wide range of product categories
            </p>
          </div>
        </div>
        {/* items box */}
        <div className="flex flex-wrap gap-5  slide1box">
          {citemdata.map((el, idx) => {
            return (
              <div
                key={idx}
                className={`w-[600px] rounded-xl overflow-hidden relative cproduct-card ${(idx%2==0)?"lefts":"rights"} `}
              >
                <img src={el.img} className="h-full   object-cover" alt="" />
                <div className="absolute md:top-[30%] md:left-[10%] top-[10%] left-[4%] flex flex-col md:gap-5 gap-2">
                  <div className="leading-tight flex flex-col md:gap-2 gap-1">
                    <h1 className="font-bold md:text-4xl text-xl">{el.title}</h1>
                    <p>{el.tag}</p>
                  </div>
                  <button
                    className="bg-[#2563EB] px-3 py-2  w-fit rounded-xl text-white gap-1 flex items-center justify-center gap-2"
                    onClick={() => {
                      navigate("/Product", { state: `${el.id}` });
                      setCbedata(false);
                      setCfedata(false);
                      setCheckfoot(false);
                      setDealdata(false);
                    }}
                  >
                    Shop Now <MoveRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* subitem */}
        <div className="flex gap-5  pr-2 flex-wrap justify-center md:justify-normal slidebox">
          {csubitemdata.map((el, idx) => {
            return (
              <div
                key={idx}
                className="bg-pink-300 w-fit rounded-xl overflow-hidden product-card slides"
                onClick={() => {
                  navigate("/Product", { state: `${el.id}` });
                }}
              >
                <div className="w-[285px]">
                  <img src={el.img} className="w-full h-auto" alt="" />
                </div>
                <div className="flex px-3  py-4 items-center justify-between">
                  <div>
                    <h1 className="text-black font-bold text-[18px]">
                      {el.title}
                    </h1>
                    <p className="text-[#374151] text-[15px]">{el.tag}</p>
                  </div>
                  <div className="text-[#2563EB] border-2 hover:scale-95 border-[#2563EB] rounded-full flex items-center h-[40px] w-[40px] justify-center">
                    <ChevronRight />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
