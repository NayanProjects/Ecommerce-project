// import { Heart, MoveRight, ShoppingCart, Star } from "lucide-react";
// import React, { useContext, useEffect, useState } from "react";
// import { Mycontext } from "./Mycontext";
// import axios from "axios";

// const Card = ({
//   el,
//   height = 370,
//   width = 220,
//   imgheight = 190,
//   height2 = 40,
//   lineclamp = "line-clamp-none",
//   text = "text-[18px]",
//   gap = "gap-1.5",
//   pricegap = 1,
//   show = "flex",
//   padding = 4,
// }) => {
//   // console.log("el from card",el.images[0]);
//   const { Wishlistdata, setWishlistdata ,Cartdata,setCartdata} = useContext(Mycontext);

//   const Liked = Wishlistdata.some((item) => item.id === el.id);
//   const Cartadd = Cartdata.some((item) => item.id === el.id);


// // useEffect(()=>{
  
// //   async function Cartload(){
// //     let response=await axios.get(`http://localhost:3000/users`);
// //     console.log(response.data);
// //   }
// //   Cartload(); 
// // },[])

//   async function intocart(el,e) {
//    e.preventDefault();
//     let response=await axios.post(`http://localhost:3000/users`,{
//       cart:el
//     })
    
//   }

//   return (
//     <div>
//       <div
//         className="bg-white w-fit rounded-xl overflow-hidden product-card max-w-[220px] h-[370px] "
//         style={{ height: `${height}px` }}
//       >
//         <div className="shadowss  ">
//           {" "}
//           <div className="relative mx-auto flex items-center justify-center rounded overflow-hidden w-full">
//             <div
//               className=""
//               style={{ width: `${width}px`, height: `${imgheight}px` }}
//             >
//               <img
//                 src={el.images[0]}
//                 className=" w-full h-full object-cover"
//                 alt=""
//               />
//             </div>
//             <div className="sale-badge top-[1px] left-[1px] absolute">
//               -{el.discount}%
//             </div>
//             <div
//               className="absolute right-2 top-2 bg-white rounded p-1 "
//               onClick={() => {
//                 if (!Liked) {
//                   setWishlistdata((prev) => [...prev, el]);
//                 } else {
//                   setWishlistdata((prev) =>
//                     prev.filter((item) => item.id !== el.id),
//                   );
//                 }
//               }}
//             >
//               <Heart
//                 className={`text-gray-300 ${Liked ? "fill-red-600 text-red-600" : "fill-white"} `}
//               />
//             </div>
//           </div>
//         </div>
//         <div
//           className={`bg-white px-${padding} py-2 pb-3 flex flex-col ${gap} justify-center`}
//         >
//           <div className={`flex flex-col gap-${pricegap}`}>
//             <div className="leading-tight flex flex-col gap-1">
//               <h1
//                 className={`font-bold text-[16px] ${lineclamp} `}
//                 style={{ height: `${height2}px` }}
//               >
//                 {el.title}
//               </h1>
//               <p className={`text-[14px] ${show}`}>{el.category}</p>
//             </div>

//             <div className="flex gap-1 items-center text-[15px]">
//               <Star className="text-yellow-300 fill-yellow-300" size={18} />
//               <span className="font-bold">{el.rating}</span>{" "}
//               <span className="text-[#374151] ">({el.reviews})</span>
//             </div>
//             <div className={`flex gap-2 items-center ${text}`}>
//               <span className="font-extrabold">
//                 ${(el.price - (el.price * el.discount) / 100).toFixed(2)}
//               </span>
//               <span>${el.price} </span>
//             </div>
//           </div>

//           <button type="button" className="bg-[#2563EB] flex items-center gap-2 px-6 py-1  text-white rounded justify-center"
//                         onClick={(e) => {
//                            e.preventDefault();
//                 if (!Cartadd) {
//                   setCartdata((prev) => [...prev, el]);
//                   intocart(el,e);
//                 } else {
//                   setCartdata((prev) =>
//                     prev.filter((item) => item.id !== el.id),
//                   );
//                 }
//               }}
//           >
            
//                {(Cartadd)?"":<ShoppingCart size={20} />}
//             {(Cartadd)?"Remove from Cart":"Add to Cart"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

import React, { useContext } from "react";
import { Mycontext } from "./Mycontext";
import axios from "axios";

const Card = ({
  el,
  height = 370,
  width = 220,
  imgheight = 190,
  height2 = 40,
  lineclamp = "line-clamp-none",
  text = "text-[18px]",
  gap = "gap-1.5",
  pricegap = 1,
  show = "flex",
  padding = 4,
  classname,
}) => {
  const {
    Wishlistdata,
    setWishlistdata,
    Cartdata,
    setCartdata,
  } = useContext(Mycontext);

  const Liked = Wishlistdata.some(
    (item) => item.id === el.id
  );

  const Cartadd = Cartdata?.some(
    (item) => item.id === el.id
  );

  // ADD TO CART
  async function addToCart(e) {
    e.preventDefault();
    e.stopPropagation();

    try {
      console.log("ADD TO CART CLICKED");

      // Save to db.json
      const response = await axios.post(
        "http://localhost:3000/cart",
        {
          cart: el,
        }
      );

      console.log(
        "Product added to database:",
        response.data
      );

      // Update React state
      setCartdata((prev) => {
        const alreadyExists = prev.some(
          (item) => item.id === el.id
        );

        if (alreadyExists) {
          return prev;
        }

        return [...prev, el];
      });
    } catch (error) {
      console.error(
        "Error adding to cart:",
        error
      );
    }
  }

  // REMOVE FROM CART
  async function removeFromCart(e) {
    e.preventDefault();
    e.stopPropagation();

    try {
      console.log("REMOVE FROM CART CLICKED");

      // Get cart records from database
      const response = await axios.get(
        "http://localhost:3000/cart"
      );

      // Find the database record
      const cartItem = response.data.find(
        (item) =>
          item.cart?.id === el.id
      );

      if (cartItem) {
        await axios.delete(
          `http://localhost:3000/cart/${cartItem.id}`
        );

        console.log(
          "Product removed from database"
        );
      }

      // Update React state
      setCartdata((prev) =>
        prev.filter(
          (item) => item.id !== el.id
        )
      );
    } catch (error) {
      console.error(
        "Error removing from cart:",
        error
      );
    }
  } 

  // CART BUTTON
  function handleCart(e) {
    e.preventDefault();
    e.stopPropagation();

    if (Cartadd) {
      removeFromCart(e);
    } else {
      addToCart(e);
    }
  }

  // WISHLIST
  function handleWishlist(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!Liked) {
      setWishlistdata((prev) => [
        ...prev,
        el,
      ]);
    } else {
      setWishlistdata((prev) =>
        prev.filter(
          (item) => item.id !== el.id
        )
      );
    }
  }

  return (
    <div>
      <div
        className={`bg-white w-fit rounded-xl overflow-hidden product-card max-w-[220px] ${classname}`}
        style={{
          height: `${height}px`,
        }}
      >
        {/* IMAGE */}
        <div className="shadowss">
          <div className="relative mx-auto flex items-center justify-center rounded overflow-hidden w-full">

            <div
              style={{
                width: `${width}px`,
                height: `${imgheight}px`,
              }}
            >
              <img
                src={el.images?.[0]}
                className="w-full h-full object-cover"
                alt={el.title}
              />
            </div>

            {/* DISCOUNT */}
            <div className="sale-badge top-[1px] left-[1px] absolute">
              -{el.discount}%
            </div>

            {/* WISHLIST */}
            <button
              type="button"
              className="absolute right-2 top-2 bg-white rounded p-1"
              onClick={handleWishlist}
            >
              <Heart
                className={`text-gray-300 ${
                  Liked
                    ? "fill-red-600 text-red-600"
                    : "fill-white"
                }`}
              />
            </button>
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div
          className={`bg-white px-${padding} py-2 pb-3 flex flex-col ${gap} justify-center`}
        >
          <div
            className={`flex flex-col gap-${pricegap}`}
          >
            {/* TITLE */}
            <div className="leading-tight flex flex-col gap-1">

              <h1
                className={`font-bold text-[16px] ${lineclamp}`}
                style={{
                  height: `${height2}px`,
                }}
              >
                {el.title}
              </h1>

              <p
                className={`text-[14px] ${show}`}
              >
                {el.category}
              </p>

            </div>

            {/* RATING */}
            <div className="flex gap-1 items-center text-[15px]">

              <Star
                className="text-yellow-300 fill-yellow-300"
                size={18}
              />

              <span className="font-bold">
                {el.rating}
              </span>

              <span className="text-[#374151]">
                ({el.reviews})
              </span>

            </div>

            {/* PRICE */}
            <div
              className={`flex gap-2 items-center ${text}`}
            >
              <span className="font-extrabold">
                $
                {(
                  el.price -
                  (el.price * el.discount) / 100
                ).toFixed(2)}
              </span>

              <span>
                ${el.price}
              </span>
            </div>
          </div>

          {/* CART BUTTON */}
          <button
            type="button"
            className="bg-[#2563EB] flex items-center gap-2 px-6 py-1 text-white rounded justify-center"
            onClick={handleCart}
          >
            {!Cartadd && (
              <ShoppingCart size={20} />
            )}

            {Cartadd
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;