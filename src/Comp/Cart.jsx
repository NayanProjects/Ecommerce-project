// import React, { useContext, useEffect, useState } from "react";
// import Navbar2 from "./Navbar2";
// import { Mycontext } from "./Mycontext";
// import Card from "./Card";
// import { NavLink, useLocation } from "react-router-dom";
// import {
//   ArrowRight,
//   ChevronRight,
//   Headset,
//   Heart,
//   Minus,
//   MoveRight,
//   Package,
//   Plus,
//   ShieldCheck,
//   Trash,
//   Truck,
// } from "lucide-react";
// import axios, { Axios } from "axios";

// const Cart = () => {
//   let {
//     maindata,

//     setCfedata,
//     cbedata,
//     setCbedata,
//     setCheckfoot,
//     Cartdata,
//     setCartdata,
//     totalcartitems,
//     setTotalcartitems,
//   } = useContext(Mycontext);
//   //   useEffect(() => {
//   //   async function getdata() {
//   //     try {
//   //       const response = await axios.get("http://localhost:3000/cart");
//   //       // console.log(response.data);
//   //       setCartitems(response.data);
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   }

//   //   getdata();
//   // }, [removeitems ]);
//   // console.log(Cartdata);

//   let fdata = maindata?.slice(8, 14);
//   console.log(Cartdata);

//   let [cartquantity, setCartquantity] = useState({});

//   console.log(cartquantity);

//   async function removeitems(id) {
//     let response = await axios.delete(`http://localhost:3000/cart/${id}`);
//     // console.log(response);
//   }

//   const deleteItem = async (productId) => {
//     const response = await axios.get("http://localhost:3000/cart");

//     const item = response.data.find((el) => el.cart.id === productId);

//     if (item) {
//       await axios.delete(`http://localhost:3000/cart/${item.id}`);
//     }
//   };

//   // {
//   //   let n=Number(prompt("enter total amount:"));
//   //   // console.log((n*3)/100);
//   //   if(n>0 && n<5000){
//   //     console.log("toatal amount",n);
//   //   }
//   //   else if(n> 5000 && n<7000){
//   //     console.log("toatal amount u have to pay is :",n-((n*5)/100));
//   //   }
//   //   else if(n>7000 && n<9000){
//   //     console.log("total amount u have to pay is:",n-((n*10)/100));
//   //   }
//   //   else{
//   //     console.log("total amount u have to pay is:",n-((n*20)/100));
//   //   }
//   // }

//   const [carttotals, setCarttotals] = useState([]);
//   const [nv, setnv] = useState([]);
//   useEffect(() => {
//     setnv((prev) => {
//       return Cartdata.map((product) => {
//         const oldItem = prev.find((item) => item.id === product.id);

//         return {
//           id: product.id,
//           quantity: oldItem ? oldItem.quantity : 1,
//           price:  Number((product.price - (product.price * product.discount) / 100).toFixed(
//                             2,
//                           )),

//         };
//       });
//     });
//   }, [Cartdata]);

// let money=[];
// {
//   nv.map((el)=>{
//     money.push(el.price*el.quantity).toFixed(2);
//   })
// }
// console.log(money);
// let billtotal=money.reduce((p,c)=>{
//   return p+c;
// },0).toFixed(2);


// let totalitems=0;
// nv.map((el)=>{
//   totalitems=totalitems+el.quantity;
// })
// let Shippingcharges=Number(5.99);


// let [checkdata,setCheckdata]=useState();


// useEffect(()=>{
//   async function getorders() {
//   let response=await axios.get('http://localhost:3000/orders');
//   console.log(response.data);
//   setCheckdata(response.data);
// }
// getorders();


//   async function putorders(nv) {
//    let response=await axios.post('http://localhost:3000/orders',{
//     data:nv
//    });
//   console.log(response);
// }
// putorders(nv);
// },[Cartdata,nv])









//   return (
//     <div className="min-w-screen min-h-screen">
//       <Navbar2 cartcount={Cartdata?.length} />
//       <div className="max-w-[1340px] w-full mx-auto  h-full px-14 bg-[#F8FAFC] pt-4 pb-10  flex flex-col gap-4">
//         <div className="flex flex-col gap-2">
//           <div className="text-[#374151] flex items-center ">
//             <NavLink to="/">Home</NavLink>
//             <ChevronRight size={20} />
//             <NavLink to="/cart">Cart</NavLink>
//           </div>
//           <div className="leading-tight">
//             <h1 className="text-2xl">Your Cart</h1>
//             <p className="text-[#374151] ">
//               {Cartdata?.length} items in your cart
//             </p>
//           </div>
//         </div>

//         {/* cart box */}
//         <div className="flex gap-4 min-h-screen">
//           <div className="w-2/3 flex flex-col gap-8">
//             <div className=" bg-amber-300 h-[60vh] rounded-xl bg-white shadow1 px-2 py-1 overflow-y-scroll ">
//               {Cartdata?.map((el) => {
//                 // let [count,setCount]=useState(1);

//                 return (
//                   <div
//                     className="flex border-b border-[#E5E7EB] py-2  items-center justify-between "
//                     key={el.id}
//                   >
//                     {/* image details */}
//                     <div className="flex items-center w-1/2 gap-4 ">
//                       <div className="h-[100px] min-w-[154px] rounded-xl overflow-hidden">
//                         <img
//                           className="h-full w-full object-cover"
//                           src={el.image}
//                           alt=""
//                         />
//                       </div>
//                       <div>
//                         <h1>{el.title}</h1>
//                         <div>{el.subCategory}</div>
//                         <p className="text-green-500 font-medium text-[15px]">
//                           {el.stock ? "In Stock" : "Sold Out"}
//                         </p>
//                       </div>
//                     </div>
//                     {/* price box */}
//                     <div className="flex items-center  w-1/2 justify-between pr-4">
//                       <div>
//                         <h1 className="font-bold">
//                           {" "}
//                           $
//                           {(el.price - (el.price * el.discount) / 100).toFixed(
//                             2,
//                           )}
//                         </h1>
//                         <div className="flex items-center   gap-2">
//                           <p className="line-through text-[13px]">
//                             ${el.price}
//                           </p>
//                           <p className="bg-red-200 w-fit px-2 text-[13px] py-0.5 rounded-2xl text-[#ff0000]">
//                             -{el.discount}%
//                           </p>
//                         </div>
//                       </div>
//                       <div className="flex bg-[#F8FAFC] border-[#E5E7EB] w-fit border-1 rounded ">
//                         <div
//                           className="border-r  border-[#E5E7EB] px-3 py-2 flex justify-center items-center"
//                           onClick={() => {
//   const item = nv.find((item) => item.id === el.id);

//   if (item.quantity > 1) {
//     setnv((prev) =>
//       prev.map((item) =>
//         item.id === el.id
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   } else {
//     deleteItem(el.id);

//     const n = Cartdata.filter(
//       (item) => item.id !== el.id
//     );

//     setCartdata(n);
//   }
// }}
//                         >
//                           <Minus size={14} />
//                         </div>
//                         <div className="px-4 flex items-center text-[14px] bg-white">
//                           {nv.find((item) => item.id === el.id)?.quantity || 1}
//                         </div>
//                         <div
//                           className="border-l  border-[#E5E7EB] px-3 py-2 flex justify-center items-center"
//                           onClick={() => {
//                             setnv((prev) =>
//                               prev.map((item) =>
//                                 item.id === el.id
//                                   ? { ...item, quantity: item.quantity + 1 }
//                                   : item,
//                               ),
//                             );
//                           }}
//                         >
//                           <Plus size={14} />
//                         </div>
//                       </div>
//                       <div
//                         className="flex gap-6"
//                         onClick={(e) => {
//                           deleteItem(el.id);
//                           let n = Cartdata.filter((item) => {
//                             return item.id != el.id;
//                           });
//                           setCartdata(n);
//                         }}
//                       >
//                         {/* <Heart size={18} /> */}
//                         <Trash size={18} />
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="w-full">
//               <div className="category flex flex-col gap-2.5">
//                 <div className="flex justify-between px-2">
//                   <div className="leading-tight">
//                     <h1 className="font-bold text-2xl font-[inter]">
//                       Featured Products
//                     </h1>
//                     <p className="text-[#374151]">
//                       Handpicked products you might love
//                     </p>
//                   </div>
//                   <button
//                     className="flex items-center text-[#2563EB] gap-1"
//                     onClick={() => {
//                       navigate("/Product");
//                       setCfedata(true);
//                       setCheckfoot(false);
//                       if (cbedata) {
//                         setCbedata(false);
//                       }
//                     }}
//                   >
//                     View All <MoveRight size={16} />{" "}
//                   </button>
//                 </div>
//                 <div className="flex gap-2">
//                   <div
//                     className="flex  justify-around flex-wrap gap-2
//             "
//                   >
//                     {fdata.map((el, idx) => {
//                       return (
//                         <Card
//                           el={el}
//                           key={idx}
//                           height={280}
//                           width={210}
//                           imgheight={120}
//                           height2={20}
//                         />
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="bg-transparent w-1/3 flex gap-4 flex-col ">
//             <div className="flex flex-col gap-3 bg-white rounded-xl shadow1 py-4 px-3">
//               <h1 className="font-bold text-xl">Order Summary</h1>
//               <div className="flex flex-col gap-2">
//                 <div className="flex justify-between">
//                   <p>
//                     Subtotal (<span>{totalitems} items</span>)
//                   </p>
//                   <p>${billtotal}</p>
//                 </div>
//                 <div className="flex text-green-500 justify-between">
//                   <p>Shipping</p>
//                   <p>${Shippingcharges}</p>
//                 </div>
//               </div>
//               <hr className="text-gray-300" />
//               <div className="flex justify-between font-bold text-xl">
//                 <p>Total</p>
//                 <p>${Number(billtotal)+Shippingcharges}</p>
//               </div>
//               <button className="flex mx-2 gap-2 bg-[#2563EB] text-white p-2 rounded-xl text-center justify-center items-center">
//                 Proceed to Checkout <ArrowRight size={20} />
//               </button>
//             </div>
//             <div className="bg-white rounded-xl shadow1 py-4 px-3 flex flex-col gap-3">
//               <h1 className="px-2">Apply Coupon</h1>
//               <div className="flex gap-2 ">
//                 <input
//                   type="text"
//                   placeholder="Enter coupon code"
//                   className="search2 flex-1   px-2 outline-none"
//                 />
//                 <button className="px-5 py-1 rounded-xl text-[#2563EB]  bg-[rgb(37,99,235,0.1)]">
//                   Apply
//                 </button>
//               </div>
//             </div>
//             <div className="bg-white rounded-xl shadow1 py-4 px-4 flex flex-col gap-3 ">
//               <ul className="  flex flex-col gap-4  justify-around rounded">
//                 <li className="flex items-center gap-4  bg-[#F8FAFC] py-3 px-3 shadow1 rounded">
//                   <Truck size={40} strokeWidth={1.5} />
//                   <div className="leading-tight">
//                     <h1 className="text-black p-0 m-0 font-bold">
//                       Free Shipping
//                     </h1>
//                     <p className="text-[#374151] p-0 m-0 text-[15px] ">
//                       On orders above $50
//                     </p>
//                   </div>
//                 </li>

//                 <li className="flex items-center gap-4 bg-[#F8FAFC] py-3 px-3 shadow1 rounded">
//                   <ShieldCheck size={40} strokeWidth={1.5} />
//                   <div className="leading-tight">
//                     <h1 className="text-black p-0 m-0 font-bold">
//                       Secure Payment
//                     </h1>
//                     <p className="text-[#374151] p-0 m-0 text-[15px] ">
//                       100% secure and safe
//                     </p>
//                   </div>
//                 </li>
//                 <li className="flex items-center gap-4 bg-[#F8FAFC] py-3 px-3 shadow1 rounded">
//                   <Package size={40} strokeWidth={1.5} />
//                   <div className="leading-tight">
//                     <h1 className="text-black p-0 m-0 font-bold">
//                       Easy Returns
//                     </h1>
//                     <p className="text-[#374151] p-0 m-0 text-[15px] ">
//                       7 days hassie free
//                     </p>
//                   </div>
//                 </li>
//                 <li className="flex items-center gap-4 bg-[#F8FAFC] py-3 px-3 shadow1 rounded">
//                   <Headset size={40} strokeWidth={1.5} />
//                   <div className="leading-tight">
//                     <h1 className="text-black p-0 m-0 font-bold">
//                       24/7 Support
//                     </h1>
//                     <p className="text-[#374151] p-0 m-0 text-[15px] ">
//                       Dedicated support
//                     </p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
import React, { useContext, useEffect, useState } from "react";
import Navbar2 from "./Navbar2";
import { Mycontext } from "./Mycontext";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Headset,
  Minus,
  MoveRight,
  Package,
  Plus,
  ShieldCheck,
  Trash,
  Truck,
} from "lucide-react";
import axios from "axios";

const Cart = () => {
  let {
    maindata,
    setCfedata,
    cbedata,
    setCbedata,
    setCheckfoot,
    Cartdata,
    setCartdata,
    totalcartitems,
    setTotalcartitems,
  } = useContext(Mycontext);

  let fdata = maindata?.slice(8, 14);

  console.log("Cartdata:", Cartdata);

  // ---------------------------------------
  // NV
  // ---------------------------------------

  const [nv, setnv] = useState([]);

  const [orderId, setOrderId] = useState(null);

  const [loaded, setLoaded] = useState(false);

  console.log("NV:", nv);

  // ---------------------------------------
  // GET NV FROM SERVER
  // ---------------------------------------

  useEffect(() => {
    async function getOrder() {
      try {
        const response = await axios.get(
          "http://localhost:3000/orders"
        );

        console.log("orders from server:", response.data);

        if (response.data.length > 0) {
          // Use the first order only
          const order = response.data[0];

          setOrderId(order.id);

          // Get saved quantity data
          setnv(order.data || []);
        } else {
          // No order exists
          // Create nv from current cart

          const initialNV = Cartdata.map((el) => {
            return {
              id: el.id,
              quantity: 1,
              price: Number(
                (
                  el.price -
                  (el.price * el.discount) / 100
                ).toFixed(2)
              ),
            };
          });

          const newOrder = await axios.post(
            "http://localhost:3000/orders",
            {
              data: initialNV,
            }
          );

          setOrderId(newOrder.data.id);

          setnv(initialNV);
        }

        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }

    getOrder();
  }, []);

  // ---------------------------------------
  // ADD NEW CART ITEMS TO NV
  // ---------------------------------------

  useEffect(() => {
    if (!loaded) return;

    setnv((prev) => {
      let updated = [...prev];

      Cartdata.forEach((el) => {
        const exists = updated.some(
          (item) => item.id === el.id
        );

        if (!exists) {
          updated.push({
            id: el.id,
            quantity: 1,
            price: Number(
              (
                el.price -
                (el.price * el.discount) / 100
              ).toFixed(2)
            ),
          });
        }
      });

      return updated;
    });
  }, [Cartdata, loaded]);

  // ---------------------------------------
  // REMOVE NV ITEMS THAT ARE NO LONGER
  // IN CARTDATA
  // ---------------------------------------

  useEffect(() => {
    if (!loaded) return;

    setnv((prev) => {
      return prev.filter((item) =>
        Cartdata.some(
          (el) => el.id === item.id
        )
      );
    });
  }, [Cartdata, loaded]);

  // ---------------------------------------
  // SAVE NV TO SERVER
  // ---------------------------------------

  useEffect(() => {
    if (!loaded || !orderId) return;

    async function saveNV() {
      try {
        await axios.put(
          `http://localhost:3000/orders/${orderId}`,
          {
            data: nv,
          }
        );

        console.log("NV saved:", nv);
      } catch (error) {
        console.log(error);
      }
    }

    saveNV();
  }, [nv, loaded, orderId]);

  // ---------------------------------------
  // DELETE FROM CART SERVER
  // ---------------------------------------

  const deleteItem = async (productId) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/cart"
      );

      const item = response.data.find(
        (el) => el.cart?.id === productId
      );

      if (item) {
        await axios.delete(
          `http://localhost:3000/cart/${item.id}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ---------------------------------------
  // PLUS
  // ---------------------------------------

  const increaseQuantity = (productId) => {
    setnv((prev) => {
      return prev.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });
    });
  };

  // ---------------------------------------
  // MINUS
  // ---------------------------------------

  const decreaseQuantity = (productId) => {
    setnv((prev) => {
      return prev
        .map((item) => {
          if (item.id === productId) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }

          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  // ---------------------------------------
  // DELETE COMPLETELY
  // ---------------------------------------

  const completelyDeleteItem = async (productId) => {
    try {
      await deleteItem(productId);

      // Remove from Cartdata
      setCartdata((prev) =>
        prev.filter(
          (item) => item.id !== productId
        )
      );

      // Remove from nv
      setnv((prev) =>
        prev.filter(
          (item) => item.id !== productId
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  // ---------------------------------------
  // TOTAL CART QUANTITY
  // ---------------------------------------

  const totalitems = nv.reduce(
    (total, item) => {
      return total + item.quantity;
    },
    0
  );

  // ---------------------------------------
  // SUBTOTAL
  // ---------------------------------------

  const subtotal = Cartdata.reduce(
    (total, el) => {
      const currentItem = nv.find(
        (item) => item.id === el.id
      );

      const quantity =
        currentItem?.quantity || 1;

      const singlePrice =
        el.price -
        (el.price * el.discount) / 100;

      return (
        total +
        singlePrice * quantity
      );
    },
    0
  );

  // ---------------------------------------
  // KEEP YOUR ORIGINAL SHIPPING
  // ---------------------------------------

  const shipping = subtotal > 50 ? 0 : 5.99;

  // ---------------------------------------
  // FINAL TOTAL
  // ---------------------------------------

  const finaltotal =
    subtotal + shipping;

  return (
    <div className="min-w-screen min-h-screen">

      <Navbar2 cartcount={Cartdata?.length} />

      <div className="max-w-[1340px] w-full mx-auto h-full lg:px-14 px-5 bg-[#F8FAFC] pt-4 pb-10 flex flex-col gap-4">

        <div className="flex flex-col gap-2">

          <div className="text-[#374151] flex items-center">

            <NavLink to="/">
              Home
            </NavLink>

            <ChevronRight size={20} />

            <NavLink to="/cart">
              Cart
            </NavLink>

          </div>

          <div className="leading-tight">

            <h1 className="text-2xl">
              Your Cart
            </h1>

            <p className="text-[#374151]">
              {totalitems} items in your cart
            </p>

          </div>

        </div>

        {/* cart box */}

        <div className="flex gap-4 min-h-screen flex-col lg:flex-row ">

          <div className="lg:w-2/3 w-full flex flex-col gap-8">

            <div className="bg-amber-300 h-[60vh] rounded-xl bg-white shadow1 px-2 py-1 overflow-y-scroll">

              {Cartdata?.map((el) => {

                // Find quantity from NV
                const currentItem = nv.find(
                  (item) => item.id === el.id
                );

                const quantity =
                  currentItem?.quantity || 1;

                // Price of one item
                const singlePrice =
                  el.price -
                  (el.price * el.discount) / 100;

                // Price based on quantity
                const totalItemPrice =
                  singlePrice * quantity;

                return (
                  <div
                    className="flex border-b border-[#E5E7EB] py-2 items-center justify-between"
                    key={el.id}
                  >

                    {/* image details */}

                    <div className="flex items-center w-1/2 gap-4">

                      <div className="lg:h-[100px] lg:min-w-[154px] h-[60px] min-w-[80px] rounded-xl overflow-hidden">

                        <img
                          className="h-full w-full object-cover"
                          src={el.image}
                          alt=""
                        />

                      </div>

                      <div>

                        <h1 className="lg:text-[18px] text-[14px] leading-tight lg:leading-normal">
                          {el.title}
                        </h1>

                        <div className="lg:text-[16px] text-[12px] ">
                          {el.subCategory}
                        </div>

                        <p className="text-green-500 font-medium lg:text-[15px] text-[13px]">
                          {el.stock
                            ? "In Stock"
                            : "Sold Out"}
                        </p>

                      </div>

                    </div>

                    {/* price box */}

                    <div className="flex items-center w-1/2 justify-between pr-4 lg:flex-row  flex-col">

                      <div className="">

                        <h1 className="font-bold">

                          $
                          {totalItemPrice.toFixed(
                            2
                          )}

                        </h1>

                        <div className="flex items-center gap-2">

                          <p className="line-through text-[13px]">
                            ${el.price}
                          </p>

                          <p className="bg-red-200 w-fit px-2 text-[13px] py-0.5 rounded-2xl text-[#ff0000]">
                            -{el.discount}%
                          </p>

                        </div>

                      </div>

                      <div className=" flex justify-around lg:px-4 items-center w-full lg:gap-10 gap-4 mt-2 ">
                      {/* quantity */}

                      <div className="flex bg-[#F8FAFC] border-[#E5E7EB] w-fit border-1 rounded">

                        {/* MINUS */}

                        <div
                          className="border-r border-[#E5E7EB] px-3 py-2 flex justify-center items-center cursor-pointer"
                          onClick={() => {

                            if (quantity > 1) {

                              decreaseQuantity(
                                el.id
                              );

                            } else {

                              completelyDeleteItem(
                                el.id
                              );

                            }

                          }}
                        >

                          <Minus size={14} />

                        </div>

                        {/* QUANTITY */}

                        <div className="px-4 flex items-center text-[14px] bg-white">

                          {quantity}

                        </div>

                        {/* PLUS */}

                        <div
                          className="border-l border-[#E5E7EB] px-3 py-2 flex justify-center items-center cursor-pointer"
                          onClick={() => {

                            increaseQuantity(
                              el.id
                            );

                          }}
                        >

                          <Plus size={14} />

                        </div>

                      </div>

                      {/* delete */}

                      <div
                        className="flex gap-6 cursor-pointer"
                        onClick={() => {

                          completelyDeleteItem(
                            el.id
                          );

                        }}
                      >

                        <Trash size={18} />

                      </div>
                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* featured products */}

            <div className="w-full">

              <div className="category flex flex-col gap-2.5">

                <div className="flex justify-between px-2">

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

                      setCfedata(true);

                      setCheckfoot(false);

                      if (cbedata) {
                        setCbedata(false);
                      }

                    }}
                  >

                    View All

                    <MoveRight size={16} />

                  </button>

                </div>

                <div className="flex gap-2">

                  <div className="flex justify-around flex-wrap gap-2">

                    {fdata?.map(
                      (el, idx) => {

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

                      }
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="bg-transparent lg:w-1/3 w-full flex gap-4 flex-col">

            {/* Order Summary */}

            <div className="flex flex-col gap-3 bg-white rounded-xl shadow1 py-4 px-3">

              <h1 className="font-bold text-xl">
                Order Summary
              </h1>

              <div className="flex flex-col gap-2">

                <div className="flex justify-between">

                  <p>
                    Subtotal (
                    <span>
                      {totalitems} items
                    </span>
                    )
                  </p>

                  <p>
                    ${subtotal.toFixed(2)}
                  </p>

                </div>

                <div className="flex text-green-500 justify-between">

                  <p>
                    Shipping
                  </p>

                  <p>
                    ${shipping.toFixed(2)}
                  </p>

                </div>

              </div>

              <hr className="text-gray-300" />

              <div className="flex justify-between font-bold text-xl">

                <p>
                  Total
                </p>

                <p>
                  ${finaltotal.toFixed(2)}
                </p>

              </div>

              <button className="flex mx-2 gap-2 bg-[#2563EB] text-white p-2 rounded-xl text-center justify-center items-center">

                Proceed to Checkout

                <ArrowRight size={20} />

              </button>

            </div>

            {/* Coupon */}

            <div className="bg-white rounded-xl shadow1 py-4 px-3 flex flex-col gap-3">

              <h1 className="px-2">
                Apply Coupon
              </h1>

              <div className="flex gap-2">

                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="search2 flex-1 px-2 outline-none"
                />

                <button className="px-5 py-1 rounded-xl text-[#2563EB] bg-[rgb(37,99,235,0.1)]">
                  Apply
                </button>

              </div>

            </div>

            {/* Features */}

            <div className="bg-white rounded-xl shadow1 py-4 px-4 flex flex-col gap-3">

              <ul className="flex flex-col gap-4 justify-around rounded">

                <li className="flex items-center gap-4 bg-[#F8FAFC] py-3 px-3 shadow1 rounded">

                  <Truck
                    size={40}
                    strokeWidth={1.5}
                  />

                  <div className="leading-tight">

                    <h1 className="text-black p-0 m-0 font-bold">
                      Free Shipping
                    </h1>

                    <p className="text-[#374151] p-0 m-0 text-[15px]">
                      On orders above $50
                    </p>

                  </div>

                </li>

                <li className="flex items-center gap-4 bg-[#F8FAFC] py-3 px-3 shadow1 rounded">

                  <ShieldCheck
                    size={40}
                    strokeWidth={1.5}
                  />

                  <div className="leading-tight">

                    <h1 className="text-black p-0 m-0 font-bold">
                      Secure Payment
                    </h1>

                    <p className="text-[#374151] p-0 m-0 text-[15px]">
                      100% secure and safe
                    </p>

                  </div>

                </li>

                <li className="flex items-center gap-4 bg-[#F8FAFC] py-3 px-3 shadow1 rounded">

                  <Package
                    size={40}
                    strokeWidth={1.5}
                  />

                  <div className="leading-tight">

                    <h1 className="text-black p-0 m-0 font-bold">
                      Easy Returns
                    </h1>

                    <p className="text-[#374151] p-0 m-0 text-[15px]">
                      7 days hassie free
                    </p>

                  </div>

                </li>

                <li className="flex items-center gap-4 bg-[#F8FAFC] py-3 px-3 shadow1 rounded">

                  <Headset
                    size={40}
                    strokeWidth={1.5}
                  />

                  <div className="leading-tight">

                    <h1 className="text-black p-0 m-0 font-bold">
                      24/7 Support
                    </h1>

                    <p className="text-[#374151] p-0 m-0 text-[15px]">
                      Dedicated support
                    </p>

                  </div>

                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Cart;