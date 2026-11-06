import React, { useContext, useState } from "react";
import Navbar from "../Comp/Navbar";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Headset,
  Heart,
  MoveRight,
  Package,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../Comp/Mycontext";
import Product from "../Products/Product";
import Card from "../Comp/Card";

const Home = () => {
  let {
    maindata,
    setDealdata,
    setMaindata,
    setBedata,
    setFedata,
    cfedata,
    setCfedata,
    cbedata,
    setCbedata,
    setCheckfoot,
    Cartdata
  } = useContext(Mycontext);
  let navigate = useNavigate();
  let [count, setCount] = useState(0);
  let data = [
    {
      img: "https://cdn.scenesku.com/resources/fashion_store_hero_banner_womens_accessories.webp?w=2000",
    },
    {
      img: "https://cdn.scenesku.com/resources/electronics_gaming_hero_banner_neon_workspace.webp?w=2000",
    },
    {
      img: "https://cdn.scenesku.com/resources/mens_fashion_hero_banner_business_style.webp?w=2000",
    },
    {
      img: "https://cdn.scenesku.com/resources/baby_kids_hero_banner_nursery_essentials.webp?w=2000",
    },
    {
      img: "https://cdn.scenesku.com/resources/beauty_skincare_hero_banner_floral_luxury.webp?w=2000",
    },
    {
      img: "https://cdn.scenesku.com/resources/holiday_specials_hero_banner_warm_luxury_products.webp?w=2000",
    },
    {
      img: "https://cdn.scenesku.com/resources/pet_supplies_hero_banner_cozy_pet_corner.webp?w=2000",
    },
    {
      img: "https://cdn.scenesku.com/resources/holiday_specials_hero_banner_gifts_and_treats.webp?w=2000",
    },
  ];
  let category = [
    {
      mens: "https://cdn.scenesku.com/resources/mens-clothing.webp?w=1000",
    },
    {
      women: "https://cdn.scenesku.com/resources/womens-clothing.webp?w=1000",
    },
    {
      kids: "https://cdn.scenesku.com/resources/kids-clothing.webp?w=1000",
    },
    {
      shoes: "https://cdn.scenesku.com/resources/shose.webp?w=1000",
    },
    {
      jewellery:
        "https://cdn.scenesku.com/resources/jewelry-and-accesories.webp?w=1000",
    },
    {
      watches: "https://cdn.scenesku.com/resources/watches.webp?w=1000",
    },
    {
      sports: "https://cdn.scenesku.com/resources/sportswear.webp?w=1000",
    },
    {
      accessories: "https://cdn.scenesku.com/resources/accessories.webp?w=1000",
    },
  ];

  function homebannernext() {
    if (count < 7) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }
  function homebannerprev() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(7);
    }
  }

  // console.log(
  //   maindata?.map((el) => {
  //     return el.featured;
  //   }),
  // );
  let FeaturedData = maindata?.filter((items) => {
    return items.featured == true;
  });
  // setFedata(FeaturedData);
  // console.log(FeaturedData);
  let fdata = FeaturedData?.slice(8, 12);

  let BestPData = maindata?.filter((items) => {
    return items.bestRated == true;
  });
  // console.log(BestPData);
  // setBedata(BestPData);
  let bb = BestPData?.slice(4, 9);

  // console.log(maindata, "from hmain");

  // console.log(count);
  // console.log(data[count].img);

  return (
    <div className="min-h-screen pb-0 ">
      <Navbar cartcount={Cartdata?.length} />
      <div className=" max-w-[1340px] w-full mx-auto flex flex-col gap-3.5 md:pt-0 pt-2 px-2 md:px-2 ">
        {/* hero slider */}
        <div className=" overflow-hidden  max-w-[1340px] w-full mx-auto relative ">
          <img
            className="w-[1340px] max-h-[300px] mx-auto rounded-2xl"
            src={data[count].img}
            alt=""
          />
          <div
            className=" flex flex-col md:gap-2 gap-1 absolute md:max-w-[400px] md:h-[250px] w-full max-w-[200px] h-[200px]
           md:top-5 md:left-50 left-20 top-[-28px] justify-center"
          >
            <p className="hero-label ">NEW COLLECTION</p>
            <div className="flex flex-col gap-1.5">
              <h1 className="font-bold hero-title   ">
                Elevate Your Everyday Style
              </h1>
              <p className="leading-tight font-[inter] text-[10px]">
                Discover the latest fashion trends with premium quality and
                unbeatable prices
              </p>
            </div>
            <button className=" font-[inter] mt-2 flex bg-black text-white md:py-2 md:px-4 px-2 py-1 rounded items-center gap-2 w-fit" onClick={()=>{
              navigate('/Product');
            }}>
              Shop Now <MoveRight size={18} />
            </button>
          </div>
          <div
            onClick={() => {
              homebannerprev();
            }}
            className="h-[45px] w-[45px] absolute md:top-[125px] md:left-[20px] top-14 left-2 bg-gray-600 text-white rounded-full  justify-center flex items-center"
          >
            <ChevronLeft size={30} />
          </div>
          <div
            onClick={() => {
              homebannernext();
            }}
            className="h-[45px] w-[45px]  md:top-[125px] md:right-[20px] top-14 right-2  absolute bg-gray-600 text-white rounded-full  justify-center flex items-center"
          >
            <ChevronRight size={30} />
          </div>
          {/* <div className="flex flex-col sale-text h-[95px] w-[95px] py-2 absolute top-[20px] right-[450px]  flex items-center justify-center rounded-full">
            <p className="text-[13px]">UP TO</p>
           <h1 className="text-2xl">40%</h1>
           <p className="text-[13px]">OFF</p>
           </div> */}
          <div>
            <ul className="bg-[#F8FAFC] md:h-[80px] flex  justify-around rounded flex-wrap md:flex-nowrap flex-col md:flex-row hidden">
              <li className="flex items-center gap-4">
                <Truck size={40} strokeWidth={1.5} />
                <div className="leading-tight">
                  <h1 className="text-black p-0 m-0 font-bold">
                    Free Shipping
                  </h1>
                  <p className="text-[#374151] p-0 m-0 text-[15px] ">
                    On orders above $50
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <ShieldCheck size={40} strokeWidth={1.5} />
                <div className="leading-tight">
                  <h1 className="text-black p-0 m-0 font-bold">
                    Secure Payment
                  </h1>
                  <p className="text-[#374151] p-0 m-0 text-[15px] ">
                    100% secure and safe
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Package size={40} strokeWidth={1.5} />
                <div className="leading-tight">
                  <h1 className="text-black p-0 m-0 font-bold">Easy Returns</h1>
                  <p className="text-[#374151] p-0 m-0 text-[15px] ">
                    7 days hassie free
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Headset size={40} strokeWidth={1.5} />
                <div className="leading-tight">
                  <h1 className="text-black p-0 m-0 font-bold">24/7 Support</h1>
                  <p className="text-[#374151] p-0 m-0 text-[15px] ">
                    Dedicated support
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* fshop by category section */}
        <div className="category flex flex-col md:gap-2.5 gap-6">
          <div className="flex justify-between px-4 md:px-2">
            <div className="leading-tight">
              <h1 className="font-bold text-2xl font-[inter]">
                Shop By Category
              </h1>
              <p className="text-[#374151]">Find what you're looking for</p>
            </div>
            <button className="flex items-center text-[#2563EB] gap-1">
              View All <MoveRight size={16} />{" "}
            </button>
          </div>
          <div className="flex gap-4 px-2 flex-wrap  justify-center md:justify-normal md:flex-nowrap">
            <div
              onClick={() => {
                navigate("/Product", { state: "Men's Clothing" });
                setCbedata(false);
                setCfedata(false);
                setCheckfoot(false);
                setDealdata(false);
              }}
              className="text-center w-fit gap-1 flex flex-col"
            >
              <div className=" rounded-xl overflow-hidden">
                <img
                  src="images\men1.png"
                  className="w-[350px] h-auto"
                  alt=""
                />
              </div>
              <p className="text-center inline">Men's clothing</p>
            </div>
            <div
              onClick={() => {
                navigate("/Product", { state: "Women's Clothing" });
                setCbedata(false);
                setCfedata(false);
                setCheckfoot(false);
                setDealdata(false);
              }}
              className="text-center w-fit gap-1 flex flex-col"
            >
              <div className=" rounded-xl overflow-hidden">
                <img
                  src="images\women1.png"
                  className="w-[350px] h-auto"
                  alt=""
                />
              </div>
              <p className="text-center inline">Women's clothing</p>
            </div>
            <div
              onClick={() => {
                navigate("/Product", { state: "Jewelry" });
                setCbedata(false);
                setCfedata(false);
                setCheckfoot(false);
                setDealdata(false);
              }}
              className="text-center w-fit gap-1 flex flex-col"
            >
              <div className=" rounded-xl overflow-hidden">
                <img
                  src="images\jewel1.png"
                  className="w-[350px] h-auto"
                  alt=""
                />
              </div>
              <p className="text-center inline">Jewellery</p>
            </div>
            <div
              onClick={() => {
                navigate("/Product", { state: "Electronics" });
                setCbedata(false);
                setCfedata(false);
                setCheckfoot(false);
                setDealdata(false);
              }}
              className="text-center w-fit gap-1 flex flex-col"
            >
              <div className=" rounded-xl overflow-hidden">
                <img
                  src="images\elec1.png"
                  className="w-[350px] h-auto"
                  alt=""
                />
              </div>
              <p className="text-center inline">Electronics</p>
            </div>
          </div>
        </div>

        {/* featured product section */}
        <div className="category flex flex-col md:gap-2.5 gap-6 ">
          <div className="flex justify-between px-4 md:px-2">
            <div className="leading-tight">
              <h1 className="font-bold text-2xl font-[inter]">
                Featured Products
              </h1>
              <p className="text-[#374151]">
                Handpicked products you might love
              </p>
            </div>
            <button
              className="flex items-center text-[#2563EB] gap-1"
              onClick={() => {
                navigate("/Product");
                setCfedata(true);
                setCheckfoot(false);
                if (cbedata) {
                  setCbedata(false);
                }
              }}
            >
              View All <MoveRight size={16} />{" "}
            </button>
          </div>
          <div className="flex md:gap-2 gap-4 flex-col md:flex-row">
            <div className="md:w-4/6 w-[100%]  flex  justify-around flex-col md:flex-row gap-4  md:gap-0 items-center md:items-normal flex-wrap">
              {fdata.map((el, idx) => {
                //  let Liked=Wishlistdata?.some(items => items.id ===el.id );
                //  const [Liked1,setLiked1]=useState(false);
                // return (

                //   <div key={idx} className="bg-white w-fit rounded-xl overflow-hidden product-card relative max-h-70">
                //     <div className="shadowss flex justify-center max-w-[210px] ">
                //       {" "}
                //       <img
                //         src={el.image}
                //         className=" h-[120px] w-full object-cover "
                //         alt=""
                //       />
                //     </div>
                //     <div className="bg-white px-2  py-2 pb-3 flex flex-col gap-1.5 justify-center">
                //       <div className="flex gap-1 items-center text-[15px]">
                //         <Star
                //           className="text-yellow-300 fill-yellow-300"
                //           size={18}
                //         />{" "}
                //         <span className="font-bold">{el.rating}</span>{" "}
                //         <span className="text-[#374151] ">({el.reviews})</span>
                //       </div>
                //       <div className="flex flex-col gap-1">
                //         <h1 className="font-bold text-[15px]">{el.title}</h1>
                //         <div className="flex gap-2 items-center text-[16px]">
                //           <span className="font-extrabold">
                //             $
                //             {(
                //               el.price -
                //               (el.price * el.discount) / 100
                //             ).toFixed(2)}
                //           </span>
                //           <span>${el.price}</span>{" "}
                //           <div className="sale-badge">-{el.discount}%</div>
                //         </div>
                //       </div>
                //       <button className="bg-black flex items-center gap-2 px-8 py-1  text-white rounded">
                //         <ShoppingCart size={20} />
                //         Add to Cart
                //       </button>
                //     </div>
                //     <div className="absolute right-1 top-2 bg-white rounded p-1 "
                //     // onClick={()=>{
                //     //   alert("ho");
                //     //   if(!Liked || !Liked1){
                //     // setLiked1(true);
                //     //     setWishlistdata((prev)=>{
                //     //      return [...prev,el.id]
                //     //     })
                //     //   }else{
                //     //     setWishlistdata(()=>{
                //     //       Wishlistdata.filter((items)=>{
                //     //         return items.id!=el.id
                //     //       })
                //     //     })
                //     //   }}}
                //     >
                //       <Heart className={`  "text-gray-300 " `} size={20} />
                //     </div>
                //   </div>
                // );
                return (
                  <Card
                    el={el}
                    key={idx}
                    height={280}
                    width={210}
                    imgheight={120}
                    height2={20}
                  />
                );
              })}
            </div>
            <div className="md:w-2/6  bg-amber-200 rounded-xl overflow-hidden relative mx-2 md:mx-0 ">
              <img src="\shoes2.png" className="h-full  w-auto " alt="" />
              <button
                className="absolute bg-black flex text-white items-center gap-1 px-3 py-1.5 rounded bottom-[46px] left-[26px]"
                onClick={() => {
                  navigate("/Product");
                  setCheckfoot(true);
                  setCbedata(false);
                  setCfedata(false);
                }}
              >
                Shop Deals <MoveRight size={16} />{" "}
              </button>
            </div>
          </div>
        </div>

        {/* best rated products section */}
        <div className="flex gap-2 flex-col md:flex-row ">
          <div className="md:w-6/8 w-full  py-2 px-2">
            <div className="category flex flex-col md:gap-2.5 gap-6 flex-wrap  ">
              <div className="flex justify-between px-3 md:px-2">
                <div className="leading-tight">
                  <h1 className="font-bold text-2xl font-[inter]">
                    Best Rated Products
                  </h1>
                  <p className="text-[#374151]">Our highest rated products</p>
                </div>
                <button
                  className="flex items-center text-[#2563EB] gap-1"
                  onClick={() => {
                    navigate("/Product");
                    setCbedata(true);
                    setCheckfoot(false);
                    if (cfedata) {
                      setCfedata(false);
                    }
                  }}
                >
                  View All <MoveRight size={16} />{" "}
                </button>
              </div>
              <div className="flex gap-2 ">
                <div className="  flex w-full justify-between flex-wrap flex-col md:flex-row items-center gap-3 md:gap-0">
                  {bb.map((el, idx) => {
                    return (
                      <Card
                        el={el}
                        key={idx}
                        height={225}
                        width={180}
                        imgheight={105}
                        height2={20}
                        lineclamp="line-clamp-1"
                        text="text-[16px]"
                        gap="gap-1"
                        pricegap={0}
                        padding={1}
                        show="hidden"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/8 w-full  flex flex-col gap-2  px-2 py-2 ">
            <h1 className="text-2xl font-bold">Why Shop With Us?</h1>
            <ul className="  flex   rounded flex-col gap-2   ">
              <li className="flex items-center gap-4 product-card1 w-full py-1.5 px-5">
                <Truck size={40} strokeWidth={1.5} className="text-[#2563EB]" />
                <div className="leading-tight">
                  <h1 className="text-black p-0 m-0 font-bold">
                    Free Shipping
                  </h1>
                  <p className="text-[#374151] p-0 m-0 text-[15px] ">
                    On orders above $50
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-4  product-card1 w-full py-1.5 px-5">
                <ShieldCheck
                  size={40}
                  strokeWidth={1.5}
                  className="text-[#2563EB]"
                />
                <div className="leading-tight">
                  <h1 className="text-black p-0 m-0 font-bold">
                    Secure Payment
                  </h1>
                  <p className="text-[#374151] p-0 m-0 text-[15px] ">
                    100% secure and safe
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4  product-card1 w-full py-1.5 px-5">
                <Package
                  size={40}
                  strokeWidth={1.5}
                  className="text-[#2563EB]"
                />
                <div className="leading-tight">
                  <h1 className="text-black p-0 m-0 font-bold">Easy Returns</h1>
                  <p className="text-[#374151] p-0 m-0 text-[15px] ">
                    7 days hassie free
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4  product-card1 w-full py-1.5 px-5">
                <Headset
                  size={40}
                  strokeWidth={1.5}
                  className="text-[#2563EB]"
                />
                <div className="leading-tight">
                  <h1 className="text-black p-0 m-0 font-bold">24/7 Support</h1>
                  <p className="text-[#374151] p-0 m-0 text-[15px] ">
                    Dedicated support
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* emailbox */}
        <div className="px-2 mx-auto w-full ">
          <div className="rounded-xl overflow-hidden relative pb-2 ">
            <img
              src="\images\footimage.png"
              className="md:h-[100px] w-full object-cover h-full"
              alt=""
            />
            <div className="flex absolute md:top-5 items-center md:left-15 top-2 justify-between max-w-[1000px] w-full flex-col md:flex-row gap-4">
              <div className="leading-tight">
                <h1 className="text-2xl font-bold ">Stay in the loop!</h1>
                <p>Get updates about new products and special offers</p>
              </div>
              <div className="flex md:relative  borders md:w-[500px] rounded bg-white   ">
                <input
                  className="flex-1 pl-2 py-2.5 outline-none  "
                  type="text"
                  placeholder="Enter your email address..."
                />
                <button className="bg-black md:absolute right-0 text-white rounded hover:scale-95 top-0.8 py-2.5 px-4">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
