// import React, { useContext, useEffect, useState } from "react";
// import Navbar2 from "../Comp/Navbar2";
// import { ChevronRight, ChevronUp, Star } from "lucide-react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import Card from "../Comp/Card";
// import axios from "axios";
// import { Mycontext } from "../Comp/Mycontext";
// const Product = () => {
//   let [data, setData] = useState();
//   const {
//     searchdata,
//     setSearchdata,
//     bedata,
//     fedata,
//     cbedata,
//     cfedata,
//     maindata,
//     checkfoot,
//     Dealdata,
//     setDealdata,
//     setCbedata,
//     setCfedata,
//     setCheckfoot,
//     lth,
//     setlth,
//     htl,
//     sethtl,
//   } = useContext(Mycontext);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [category, setCategory] = useState(location.state);
//   const [checkboxdata, setCheckboxdata] = useState([]);
//   console.log(checkboxdata);

//   useEffect(() => {
//     if (location.state) {
//       setCategory(location.state);

//       navigate(location.pathname, {
//         replace: true,
//         state: null,
//       });
//     }
//   }, [searchdata]);

//   useEffect(() => {
//     async function getdata() {
//       let res = await axios.get("http://localhost:3000/products");
//       // console.log(res.data.limit=100);
//       // console.log(res.data);
//       setData(res.data);
//     }
//     getdata();
//   }, []);

//   // console.log(data);
//   let ndata = data;

//   if (category) {
//     ndata = data?.filter((items) => {
//       return items.category.includes(category);
//     });
//   }

//   if (checkboxdata.length === 0) {
//     ndata = data;
//   } else {
//     ndata = maindata.filter((items) => {
//       return checkboxdata.includes(items.category);
//     });
//   }

//   if (searchdata) {
//     ndata = data?.filter((items) => {
//       return items.title?.toLowerCase().includes(searchdata.toLowerCase());
//     });
//   }

//   if (cbedata) {
//     ndata = maindata?.filter((items) => {
//       return items.bestRated == true;
//     });
//   }
//   if (cfedata) {
//     ndata = maindata?.filter((items) => {
//       return items.featured == true;
//     });
//   }
//   if (checkfoot) {
//     ndata = maindata?.filter((items) => {
//       return items.category.includes("Footwear");
//     });
//   }
//   if (Dealdata) {
//     ndata = maindata.sort((a, b) => {
//       return b.discount - a.discount;
//     });
//   }

//   if (lth) {
//     ndata = maindata.sort((a, b) => {
//       return a.price - b.price;
//     });
//   }
//   if (htl) {
//     ndata = maindata.sort((a, b) => {
//       return b.price - a.price;
//     });
//   }

//   function selectsort(p) {
//     if (p == "lowtohigh") {
//       console.log("1");
//       setlth(true);
//       sethtl(false);
//       setCfedata(false);
//     }
//     if (p == "hightolow") {
//       console.log("2");
//       sethtl(true);
//       setlth(false);
//       setCfedata(false);
//     }
//     if (p == "featured") {
//       console.log("3");
//       setCfedata(true);
//       setlth(false);
//       sethtl(false);
//     }
//   }


//   const [filters,setFilters]=useState({
//     categories:[],
//     minprice:0,
//     maxprice:1000,
//     ratings:[],
//     availability:[],
//     brands:[],
//     discount:[]
//   })

// const filterdproducts=maindata.filter((items)=>{
//   const categorymatch=
//   filters.categories.length===0||filters.categories.includes(items.categories);

//   const brandmatch=
//   filters.brands.length===0||filters.brands.includes(items.brand);

//   const ratings=
//   filters.ratings.length===0||
//   filters.ratings.some(
//   selectedRating => items.rating >= selectedRating
// );

//   const discount=
//   filters.discount.length===0 || 
//     filters.discount.some(
//   selecteddiscount => items.discount >= selecteddiscount
// );
//  const priceMatch =
//     items.price >= filters.minPrice &&
//     items.price <= filters.maxPrice;
//  return priceMatch && discount && ratings && brandmatch && categorymatch;
// });



















//   return (
//     <div className="w-screen min-h-screen">
//       <Navbar2 />
//       <div className="max-w-[1400px] w-full mx-auto h-full px-10 bg-[#F8FAFC] pt-4 pb-10  flex flex-col gap-4">
//         {/* navbox */}
//         <div className="text-[#374151] flex items-center ">
//           <NavLink to="/">Home</NavLink>
//           <ChevronRight size={20} />
//           <NavLink to="/Product">Product</NavLink>
//         </div>
//         {/* sort box */}
//         <div className="flex  gap-2 justify-between items-center">
//           <div className="leading-tight">
//             <h1 className="text-2xl">
//               All Products <span className="text-[#374151]">(243 items)</span>
//             </h1>
//             <p className="text-[#374151] ">
//               Discover amazing products at the besr prices
//             </p>
//           </div>
//           <div className="flex gap-2 items-center">
//             <label htmlFor="Sort">Sort By:</label>
//             <select
//               name=""
//               id="Sort"
//               className="bg-white pr-8  px-1 py-2 outline-none"
//               onChange={(e) => {
//                 console.log(e.target.value);
//                 setCbedata(false);
//                 setCfedata(false);
//                 setCheckfoot(false);
//                 setDealdata(false);
//                 selectsort(e.target.value);
//               }}
//             >
//               <option value="featured">Featured</option>
//               <option value="lowtohigh">Low to High</option>
//               <option value="hightolow">High to Low</option>
//               {/* <option value="featured"></option> */}
//             </select>
//           </div>
//         </div>
//         {/* main box */}
//         <div className="flex gap-2 ">
//           {/* filter box */}
//           <div className="w-1/4 bg-white borders rounded px-3 py-2 flex flex-col pb-8 h-fit">
//             <div className="flex justify-between border-b border-[#E5E7EB] items-center py-2">
//               <h1 className="font-bold text-xl">Filters</h1>
//               <h1 className="font-bold text-[#2563EB]">Clear All</h1>
//             </div>
//             {/* category filter */}
//             <div className="border-b border-[#E5E7EB]  py-2 flex flex-col gap-2">
//               <div className="flex justify-between items-center">
//                 <h1 className="font-bold text-[19px]">Categories</h1>
//                 <ChevronUp />
//               </div>
//               <div className="flex flex-col gap-1 ">
//                 <div className="flex justify-between">
//                   <div className="flex gap-2">
//                     <input
//                       type="checkbox"
//                       className="w-4"
//                       name="Men's Clothing"
//                       onChange={(e) => {
//                         console.log(e.target.name);
//                         // console.log(e.target.checke

//                         if (e.target.checked) {
//                           setCheckboxdata((checkboxdata) => {
//                             {
//                               return [...checkboxdata, e.target.name];
//                             }
//                           });
//                         } else {
//                           setCheckboxdata(
//                             checkboxdata.filter((val) => {
//                               return val != e.target.name;
//                             }),
//                           );
//                         }
//                       }}
//                     />
//                     <p>Men's Clothing</p>
//                   </div>
//                   <span className="text-[#374151]">(32)</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <div className="flex gap-2">
//                     <input
//                       type="checkbox"
//                       className="w-4"
//                       name="Women's Clothing"
//                       onChange={(e) => {
//                         console.log(e.target.name);
//                         // console.log(e.target.checked)
//                         if (e.target.checked) {
//                           setCheckboxdata((checkboxdata) => {
//                             {
//                               return [...checkboxdata, e.target.name];
//                             }
//                           });
//                         } else {
//                           setCheckboxdata(
//                             checkboxdata.filter((val) => {
//                               return val != e.target.name;
//                             }),
//                           );
//                         }
//                       }}
//                     />
//                     <p>Women's Clothing</p>
//                   </div>
//                   <span className="text-[#374151]">(28)</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <div className="flex gap-2">
//                     <input
//                       type="checkbox"
//                       className="w-4"
//                       name="Jewelry"
//                       onChange={(e) => {
//                         console.log(e.target.name);
//                         // console.log(e.target.checked)
//                         if (e.target.checked) {
//                           setCheckboxdata((checkboxdata) => {
//                             {
//                               return [...checkboxdata, e.target.name];
//                             }
//                           });
//                         } else {
//                           setCheckboxdata(
//                             checkboxdata.filter((val) => {
//                               return val != e.target.name;
//                             }),
//                           );
//                         }
//                       }}
//                     />
//                     <p>Jewellery</p>
//                   </div>
//                   <span className="text-[#374151]">(25)</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <div className="flex gap-2">
//                     <input
//                       type="checkbox"
//                       className="w-4"
//                       name="Electronics"
//                       onChange={(e) => {
//                         console.log(e.target.name);
//                         // console.log(e.target.checked)
//                         if (e.target.checked) {
//                           setCheckboxdata((checkboxdata) => {
//                             {
//                               return [...checkboxdata, e.target.name];
//                             }
//                           });
//                         } else {
//                           setCheckboxdata(
//                             checkboxdata.filter((val) => {
//                               return val != e.target.name;
//                             }),
//                           );
//                         }
//                       }}
//                     />
//                     <p>Electronics</p>
//                   </div>
//                   <span className="text-[#374151]">(18)</span>
//                 </div>
//               </div>
//             </div>

//             {/* pricerange box */}
//             <div className="border-b border-[#E5E7EB]  py-2 pb-4 flex flex-col gap-1">
//               <div className="flex justify-between items-center">
//                 <h1 className="font-bold text-[19px]">Price Range</h1>
//                 <ChevronUp />
//               </div>
//               <div className="flex flex-col gap-2">
//                 <p>$0 - $1000</p>
//                 <input type="range" min={0} max={1000} className="w-full" onChange={(e)=>{
//                   console.log(e.target.value);
//                 }} />
//                 <div className="flex gap-8">
//                   <div className="flex p-1 bg-white border border-black max-w-[80px] w-full rounded items-center">
//                     $ 0
//                   </div>
//                   <div className="flex p-1 bg-white border border-black max-w-[80px] w-full rounded items-center">
//                     $ 1000
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Ratingbox */}
//             <div className="border-b border-[#E5E7EB]  py-2 pb-4 flex flex-col gap-2">
//               <div className="flex justify-between items-center">
//                 <h1 className="font-bold text-[19px]">Rating</h1>
//                 <ChevronUp />
//               </div>
//               <div className="flex flex-col gap-2 justify-center">
//                 <div className="flex gap-2 ">
//                   <input type="checkbox" className="w-4" />
//                   <div className="flex  justify-between w-full pr-4 items-center">
//                     <div className="flex">
//                       <Star className="fill-yellow-300 text-yellow-300" />
//                       <Star className="fill-yellow-300 text-yellow-300" />
//                       <Star className="fill-yellow-300 text-yellow-300" />
//                       <Star className="fill-yellow-300 text-yellow-300" />
//                       <Star className="fill-[#dadce2] text-[#dadce2] " />
//                     </div>
//                     <p className="text-[#374151]">4 & above</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <input type="checkbox" className="w-4" />
//                   <div className="flex  justify-between w-full pr-4 items-center">
//                     <div className="flex">
//                       <Star className="fill-yellow-300 text-yellow-300" />
//                       <Star className="fill-yellow-300 text-yellow-300" />
//                       <Star className="fill-yellow-300 text-yellow-300" />
//                       <Star className="fill-[#dadce2] text-[#dadce2] " />
//                       <Star className="fill-[#dadce2] text-[#dadce2] " />
//                     </div>
//                     <p className="text-[#374151]">3 & above</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <input type="checkbox" className="w-4" />
//                   <div className="flex  justify-between w-full pr-4 items-center">
//                     <div className="flex">
//                       <Star className="fill-yellow-300 text-yellow-300" />
//                       <Star className="fill-yellow-300 text-yellow-300" />
//                       <Star className="fill-[#dadce2] text-[#dadce2] " />
//                       <Star className="fill-[#dadce2] text-[#dadce2] " />
//                       <Star className="fill-[#dadce2] text-[#dadce2] " />
//                     </div>
//                     <p className="text-[#374151]">2 & above</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* AvailabilityBox */}
//             <div className="border-b border-[#E5E7EB]  py-2 flex flex-col gap-2 pb-4">
//               <div className="flex justify-between items-center">
//                 <h1 className="font-bold text-[19px]">Availability</h1>
//                 <ChevronUp />
//               </div>
//               <div className="flex gap-2 ">
//                 <input type="checkbox" className="w-4" />
//                 <p>
//                   In Stock Only <span>(212)</span>
//                 </p>
//               </div>
//             </div>

//             {/* brandbox */}
//             <div className="border-b border-[#E5E7EB]  py-2 flex flex-col gap-2 pb-4">
//               <div className="flex justify-between items-center">
//                 <h1 className="font-bold text-[19px]">Brand</h1>
//                 <ChevronUp />
//               </div>
//               <select name="" id="" className="borders py-1 px-2 outline-none">
//                 <option value="" hidden>
//                   All Brands
//                 </option>
//                 <option value="North & Co.">North & Co.</option>
//                 <option value="Aster">Aster</option>
//                 <option value="Vivid">Vivid</option>
//                 <option value="UrbanStyle">UrbanStyle</option>
//                 <option value="HomeCraft">HomeCraft</option>
//                 <option value="Nova">Nova</option>
//                 <option value="LuxeLine">LuxeLine</option>
//               </select>
//             </div>
//             {/* DiscountBox */}
//             <div className="border-b border-[#E5E7EB]  py-2 flex flex-col gap-2 pb-4">
//               <div className="flex justify-between items-center">
//                 <h1 className="font-bold text-[19px]">Discount</h1>
//                 <ChevronUp />
//               </div>
//               <div>
//                 <div className="flex gap-2 ">
//                   <input type="checkbox" className="w-4" />
//                   <div className="flex justify-between w-full pr-4 items-center">
//                     <p> 10% or more</p>
//                     <span>(120)</span>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <input type="checkbox" className="w-4" />
//                   <div className="flex justify-between w-full pr-4 items-center">
//                     <p> 20% or more</p>
//                     <span>(60)</span>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <input type="checkbox" className="w-4" />
//                   <div className="flex justify-between w-full pr-4 items-center">
//                     <p> 30% or more</p>
//                     <span>(45)</span>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <input type="checkbox" className="w-4" />
//                   <div className="flex justify-between w-full pr-4 items-center">
//                     <p> 50% or more</p>
//                     <span>(10)</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <button className="text-white bg-[#2563EB] py-1 rounded mb-1">
//               Apply Filters
//             </button>
//             <button className="bg-white borders py-1 mt-1">Clear All</button>
//           </div>

//           {/* cards box */}
//           <div className="w-3/4  px-2 gap-3 flex flex-wrap  justify-around">
//             {ndata?.map((el) => {
//               return <Card key={el.id} el={el} />;
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
import React, { useContext, useEffect, useState } from "react";
import Navbar2 from "../Comp/Navbar2";
import { ChevronDown, ChevronRight, ChevronUp, SlidersHorizontal, Star } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Card from "../Comp/Card";
import axios from "axios";
import { Mycontext } from "../Comp/Mycontext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Product = ({cartcount}) => {
  const [data, setData] = useState([]);

  const {
    searchdata,
    maindata,
    cbedata,
    cfedata,
    checkfoot,
    Dealdata,
    setCbedata,
    setCfedata,
    setCheckfoot,
    lth,
    setlth,
    htl,
    sethtl,
    setDealdata,
  } = useContext(Mycontext);

  const location = useLocation();
  const navigate = useNavigate();

  const [category, setCategory] = useState(location.state);

  // =========================
  // FILTER STATE
  // =========================

  const [filters, setFilters] = useState({
    categories: [],
    minprice: 0,
    maxprice: 1000,
    ratings: [],
    availability: false,
    brands: [],
    discount: [],
  });

  // =========================
  // GET PRODUCTS
  // =========================

  useEffect(() => {
    if (location.state) {
      setCategory(location.state);

      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    }
  }, [location.state, navigate]);

  useEffect(() => {
    async function getdata() {
      try {
        const res = await axios.get("http://localhost:3000/products");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    getdata();
  }, []);

  // =========================
  // BASE DATA
  // =========================

  let ndata = maindata?.length ? maindata : data;

  // =========================
  // ROUTE CATEGORY
  // =========================

  if (category) {
    ndata = ndata.filter((items) => {
      return items.category?.includes(category);
    });
  }

  // =========================
  // SEARCH
  // =========================

  if (searchdata) {
    ndata = ndata.filter((items) => {
      return items.title
        ?.toLowerCase()
        .includes(searchdata.toLowerCase());
    });
  }

  // =========================
  // BEST RATED
  // =========================

  if (cbedata) {
    ndata = ndata.filter((items) => {
      return items.bestRated === true;
    });
  }

  // =========================
  // FEATURED
  // =========================

  if (cfedata) {
    ndata = ndata.filter((items) => {
      return items.featured === true;
    });
  }

  // =========================
  // FOOTWEAR
  // =========================

  if (checkfoot) {
    ndata = ndata.filter((items) => {
      return items.category?.includes("Footwear");
    });
  }

  // =========================
  // DEALS
  // =========================

  if (Dealdata) {
    ndata = [...ndata].sort((a, b) => {
      return b.discount - a.discount;
    });
  }

  // =========================
  // LOW TO HIGH
  // =========================

  if (lth) {
    ndata = [...ndata].sort((a, b) => {
      return a.price - b.price;
    });
  }

  // =========================
  // HIGH TO LOW
  // =========================

  if (htl) {
    ndata = [...ndata].sort((a, b) => {
      return b.price - a.price;
    });
  }

  // =========================
  // SORT FUNCTION
  // =========================

  function selectsort(p) {
    if (p === "lowtohigh") {
      setlth(true);
      sethtl(false);
      setCfedata(false);
    }

    if (p === "hightolow") {
      sethtl(true);
      setlth(false);
      setCfedata(false);
    }

    if (p === "featured") {
      setCfedata(true);
      setlth(false);
      sethtl(false);
    }
  }

  // =====================================================
  // APPLY FILTERS
  // =====================================================

  const filteredProducts = ndata.filter((items) => {

    // CATEGORY
    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.includes(items.category);

    // BRAND
    const brandMatch =
      filters.brands.length === 0 ||
      filters.brands.includes(items.brand);

    // RATING
    const ratingMatch =
      filters.ratings.length === 0 ||
      filters.ratings.some(
        (selectedRating) => items.rating >= selectedRating
      );

    // DISCOUNT
    const discountMatch =
      filters.discount.length === 0 ||
      filters.discount.some(
        (selectedDiscount) => items.discount >= selectedDiscount
      );

    // PRICE
    const priceMatch =
      items.price >= filters.minprice &&
      items.price <= filters.maxprice;

    // AVAILABILITY
    const availabilityMatch =
      filters.availability === false ||
      items.stock > 0;

    return (
      categoryMatch &&
      brandMatch &&
      ratingMatch &&
      discountMatch &&
      priceMatch &&
      availabilityMatch
    );
  });

  // =====================================================
  // CATEGORY CHECKBOX HANDLER
  // =====================================================

  function handleCategoryChange(e) {
    const name = e.target.name;
    const checked = e.target.checked;

    if (checked) {
      setFilters((prev) => ({
        ...prev,
        categories: [...prev.categories, name],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        categories: prev.categories.filter(
          (category) => category !== name
        ),
      }));
    }
  }

  // =====================================================
  // RATING CHECKBOX HANDLER
  // =====================================================

  function handleRatingChange(e) {
    const value = Number(e.target.value);
    const checked = e.target.checked;

    if (checked) {
      setFilters((prev) => ({
        ...prev,
        ratings: [...prev.ratings, value],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        ratings: prev.ratings.filter(
          (rating) => rating !== value
        ),
      }));
    }
  }

  // =====================================================
  // DISCOUNT CHECKBOX HANDLER
  // =====================================================

  function handleDiscountChange(e) {
    const value = Number(e.target.value);
    const checked = e.target.checked;

    if (checked) {
      setFilters((prev) => ({
        ...prev,
        discount: [...prev.discount, value],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        discount: prev.discount.filter(
          (discount) => discount !== value
        ),
      }));
    }
  }

  // =====================================================
  // CLEAR ALL
  // =====================================================

  function clearAllFilters() {
    setFilters({
      categories: [],
      minprice: 0,
      maxprice: 1000,
      ratings: [],
      availability: false,
      brands: [],
      discount: [],
    });
  }

  let [Acategory,setAcategory]=useState(false);
  let [Arange,setArange]=useState(false);
  let [Arating,setArating]=useState(false);
  let [Aavailable,setAavailable]=useState(false);
  let [Abrand,setAbrand]=useState(false);
  let [Adiscount,setAdiscount]=useState(false);
  let [Openfilter,setOpenfilter]=useState(false);







  useGSAP(()=>{
    let tl=gsap.timeline();
    tl.from(".filterbox",{
      x:-1000,
      duration:1,
      opacity:0
    },"hell")
        tl.from(".cardbox",{
      x:1000,
      duration:1,
      opacity:0
    },"hell")



  })


  return (
    <div className="w-screen min-h-screen">

      <Navbar2 cartcount={cartcount} />

      <div className="max-w-[1400px] w-full mx-auto h-full px-10 bg-[#F8FAFC] pt-4 pb-10 flex flex-col gap-4">

        {/* ================= NAV ================= */}

        <div className="text-[#374151] flex items-center">
          <NavLink to="/">Home</NavLink>
          <ChevronRight size={20} />
          <NavLink to="/Product">Product</NavLink>
        </div>

        {/* ================= SORT BOX ================= */}

        <div className="flex gap-2 justify-between lg:items-center flex-col md:flex-row  ">

          <div className="leading-tight">

            <h1 className="text-2xl">
              All Products{" "}
              <span className="text-[#374151]">
                ({filteredProducts.length} items)
              </span>
            </h1>

            <p className="text-[#374151]">
              Discover amazing products at the best prices
            </p>

          </div>

          <div className="flex gap-2 items-center md:justify-between w-full md:w-auto justify-between px-2 md:px-0 ">
<div className="md:hidden" onClick={()=>{
  setOpenfilter(!Openfilter);
}} ><SlidersHorizontal /></div>
           <div className="">
             <label htmlFor="Sort">
              Sort By:
            </label>

            <select
              id="Sort"
              className="bg-white pr-8 px-1 py-2 outline-none"
              onChange={(e) => {
                setCbedata(false);
                setCfedata(false);
                setCheckfoot(false);
                setDealdata(false);

                selectsort(e.target.value);
              }}
            >
              <option value="featured">
                Featured
              </option>

              <option value="lowtohigh">
                Low to High
              </option>

              <option value="hightolow">
                High to Low
              </option>
            </select>
           </div>

          </div>
          
        </div>

        {/* ================= MAIN ================= */}

        <div className="flex gap-2 flex-col md:flex-row ">

          {/* ================= FILTER BOX ================= */}

          <div className={`${Openfilter?"flex":"hidden"}  md:flex md:w-1/4 w-full bg-white borders rounded px-3 py-2  flex-col pb-8 h-fit filterbox`}>

            {/* FILTER HEADER */}

            <div className="flex justify-between border-b border-[#E5E7EB] items-center py-2">

              <h1 className="font-bold text-xl">
                Filters
              </h1>

              <button
                className="font-bold text-[#2563EB]"
                onClick={clearAllFilters}
              >
                Clear All
              </button>

            </div>

            {/* ================= CATEGORIES ================= */}

            <div className="border-b border-[#E5E7EB] py-2 flex flex-col gap-2">

              <div className="flex justify-between items-center">

                <h1 className="font-bold text-[19px]">
                  Categories
                </h1>

               <div onClick={()=>{
                setAcategory(!Acategory);
            
               }}  > { Acategory?<ChevronUp />:<ChevronDown/>}</div>

              </div>

              <div className={`flex flex-col gap-1 ${ Acategory?"hidden":"flex"} `}>

                {/* MEN */}

                <div className="flex justify-between">

                  <div className="flex gap-2">

                    <input
                      type="checkbox"
                      className="w-4"
                      name="Men's Clothing"
                      checked={filters.categories.includes("Men's Clothing")}
                      onChange={handleCategoryChange}
                    />

                    <p>Men's Clothing</p>

                  </div>

                  <span className="text-[#374151]">
                    (32)
                  </span>

                </div>

                {/* WOMEN */}

                <div className="flex justify-between">

                  <div className="flex gap-2">

                    <input
                      type="checkbox"
                      className="w-4"
                      name="Women's Clothing"
                      checked={filters.categories.includes("Women's Clothing")}
                      onChange={handleCategoryChange}
                    />

                    <p>Women's Clothing</p>

                  </div>

                  <span className="text-[#374151]">
                    (28)
                  </span>

                </div>

                {/* JEWELRY */}

                <div className="flex justify-between">

                  <div className="flex gap-2">

                    <input
                      type="checkbox"
                      className="w-4"
                      name="Jewelry"
                      checked={filters.categories.includes("Jewelry")}
                      onChange={handleCategoryChange}
                    />

                    <p>Jewellery</p>

                  </div>

                  <span className="text-[#374151]">
                    (25)
                  </span>

                </div>

                {/* ELECTRONICS */}

                <div className="flex justify-between">

                  <div className="flex gap-2">

                    <input
                      type="checkbox"
                      className="w-4"
                      name="Electronics"
                      checked={filters.categories.includes("Electronics")}
                      onChange={handleCategoryChange}
                    />

                    <p>Electronics</p>

                  </div>

                  <span className="text-[#374151]">
                    (18)
                  </span>

                </div>

              </div>

            </div>

            {/* ================= PRICE ================= */}

            <div className="border-b border-[#E5E7EB] py-2 pb-4 flex flex-col gap-1">

              <div className="flex justify-between items-center">

                <h1 className="font-bold text-[19px]">
                  Price Range
                </h1>

                <div onClick={()=>{
                  setArange(!Arange);
                }}>{Arange?<ChevronUp />:<ChevronDown/> }</div>

              </div>

              <div className={`flex flex-col gap-2 ${Arange?"hidden":"flex"}`}>

                <p>
                  $0 - ${filters.maxprice}
                </p>

                <input
                  type="range"
                  min={0}
                  max={1000}
                  value={filters.maxprice}
                  className="w-full"
                  onChange={(e) => {
                    setFilters((prev) => ({
                      ...prev,
                      maxprice: Number(e.target.value),
                    }));
                  }}
                />

                <div className="flex gap-8">

                  <div className="flex p-1 bg-white border border-black max-w-[80px] w-full rounded items-center">
                    $ {filters.minprice}
                  </div>

                  <div className="flex p-1 bg-white border border-black max-w-[80px] w-full rounded items-center">
                    $ {filters.maxprice}
                  </div>

                </div>

              </div>

            </div>

            {/* ================= RATING ================= */}

            <div className="border-b border-[#E5E7EB] py-2 pb-4 flex flex-col gap-2">

              <div className="flex justify-between items-center">

                <h1 className="font-bold text-[19px]">
                  Rating
                </h1>

                  <div onClick={()=>{
                  setArating(!Arating);
                }}>{Arating?<ChevronUp />:<ChevronDown/> }</div>

              </div>

              <div className={`flex flex-col gap-2 ${Arating?"hidden":"flex"}`}>

                {/* 4+ */}

                <div className="flex gap-2">

                  <input
                    type="checkbox"
                    className="w-4"
                    value="4"
                    checked={filters.ratings.includes(4)}
                    onChange={handleRatingChange}
                  />

                  <div className="flex justify-between w-full pr-4 items-center">

                    <div className="flex">

                      <Star className="fill-yellow-300 text-yellow-300" />
                      <Star className="fill-yellow-300 text-yellow-300" />
                      <Star className="fill-yellow-300 text-yellow-300" />
                      <Star className="fill-yellow-300 text-yellow-300" />
                      <Star className="fill-[#dadce2] text-[#dadce2]" />

                    </div>

                    <p>4 & above</p>

                  </div>

                </div>

                {/* 3+ */}

                <div className="flex gap-2">

                  <input
                    type="checkbox"
                    className="w-4"
                    value="3"
                    checked={filters.ratings.includes(3)}
                    onChange={handleRatingChange}
                  />

                  <div className="flex justify-between w-full pr-4 items-center">

                    <div className="flex">

                      <Star className="fill-yellow-300 text-yellow-300" />
                      <Star className="fill-yellow-300 text-yellow-300" />
                      <Star className="fill-yellow-300 text-yellow-300" />
                      <Star className="fill-[#dadce2] text-[#dadce2]" />
                      <Star className="fill-[#dadce2] text-[#dadce2]" />

                    </div>

                    <p>3 & above</p>

                  </div>

                </div>

                {/* 2+ */}

                <div className="flex gap-2">

                  <input
                    type="checkbox"
                    className="w-4"
                    value="2"
                    checked={filters.ratings.includes(2)}
                    onChange={handleRatingChange}
                  />

                  <div className="flex justify-between w-full pr-4 items-center">

                    <div className="flex">

                      <Star className="fill-yellow-300 text-yellow-300" />
                      <Star className="fill-yellow-300 text-yellow-300" />
                      <Star className="fill-[#dadce2] text-[#dadce2]" />
                      <Star className="fill-[#dadce2] text-[#dadce2]" />
                      <Star className="fill-[#dadce2] text-[#dadce2]" />

                    </div>

                    <p>2 & above</p>

                  </div>

                </div>

              </div>

            </div>

            {/* ================= AVAILABILITY ================= */}

            <div className="border-b border-[#E5E7EB] py-2 flex flex-col gap-2 pb-4">

              <div className="flex justify-between items-center">

                <h1 className="font-bold text-[19px]">
                  Availability
                </h1>
 <div onClick={()=>{
                  setAavailable(!Aavailable);
                }}>{Aavailable?<ChevronUp />:<ChevronDown/> }</div>

              </div>

              <div  className={`flex  gap-2 ${Aavailable?"hidden":"flex"}`}>

                <input
                  type="checkbox"
                  className="w-4"
                  checked={filters.availability}
                  onChange={(e) => {
                    setFilters((prev) => ({
                      ...prev,
                      availability: e.target.checked,
                    }));
                  }}
                />

                <p>
                  In Stock Only
                </p>

              </div>

            </div>

            {/* ================= BRAND ================= */}

            <div className="border-b border-[#E5E7EB] py-2 flex flex-col gap-2 pb-4">

              <div className="flex justify-between items-center">

                <h1 className="font-bold text-[19px]">
                  Brand
                </h1>

                 <div onClick={()=>{
                  setAbrand(!Abrand);
                }}>{Abrand?<ChevronUp />:<ChevronDown/> }</div>

              </div>

              <select
               className={`flex  gap-2 ${Abrand?"hidden":"flex"} borders py-1 px-2 outline-none`}
                value={filters.brands[0] || ""}
                onChange={(e) => {

                  const value = e.target.value;

                  setFilters((prev) => ({
                    ...prev,
                    brands: value ? [value] : [],
                  }));

                }}
              >

                <option value="">
                  All Brands
                </option>

                <option value="North & Co.">
                  North & Co.
                </option>

                <option value="Aster">
                  Aster
                </option>

                <option value="Vivid">
                  Vivid
                </option>

                <option value="UrbanStyle">
                  UrbanStyle
                </option>

                <option value="HomeCraft">
                  HomeCraft
                </option>

                <option value="Nova">
                  Nova
                </option>

                <option value="LuxeLine">
                  LuxeLine
                </option>

              </select>

            </div>

            {/* ================= DISCOUNT ================= */}

            <div className="border-b border-[#E5E7EB] py-2 flex flex-col gap-2 pb-4">

              <div className="flex justify-between items-center">

                <h1 className="font-bold text-[19px]">
                  Discount
                </h1>

                 <div onClick={()=>{
                  setAdiscount(!Adiscount);
                }}>{Adiscount?<ChevronUp />:<ChevronDown/> }</div>

              </div>

              <div className={` ${Adiscount?"hidden":"block"}`}>

                {/* 10% */}

                <div className="flex gap-2">

                  <input
                    type="checkbox"
                    className="w-4"
                    value="10"
                    checked={filters.discount.includes(10)}
                    onChange={handleDiscountChange}
                  />

                  <p>10% or more</p>

                </div>

                {/* 20% */}

                <div className="flex gap-2">

                  <input
                    type="checkbox"
                    className="w-4"
                    value="20"
                    checked={filters.discount.includes(20)}
                    onChange={handleDiscountChange}
                  />

                  <p>20% or more</p>

                </div>

                {/* 30% */}

                <div className="flex gap-2">

                  <input
                    type="checkbox"
                    className="w-4"
                    value="30"
                    checked={filters.discount.includes(30)}
                    onChange={handleDiscountChange}
                  />

                  <p>30% or more</p>

                </div>

                {/* 50% */}

                <div className="flex gap-2">

                  <input
                    type="checkbox"
                    className="w-4"
                    value="50"
                    checked={filters.discount.includes(50)}
                    onChange={handleDiscountChange}
                  />

                  <p>50% or more</p>

                </div>

              </div>

            </div>

            {/* ================= BUTTONS ================= */}

            <button
              className="text-white bg-[#2563EB] py-1 rounded mb-1"
              onClick={() => {
                console.log(filters);
              }}
            >
              Apply Filters
            </button>

            <button
              className="bg-white borders py-1 mt-1"
              onClick={clearAllFilters}
            >
              Clear All
            </button>

          </div>

          {/* ================= PRODUCT CARDS ================= */}

          <div className="md:w-3/4 w-full px-2 gap-3 flex flex-wrap justify-around cardbox">

            {filteredProducts.length > 0 ? (

              filteredProducts.map((el) => (
                <Card id="hello" key={el.id} el={el} />
              ))

            ) : (

              <div className="w-full flex justify-center items-center py-20">
                <h2 className="text-xl text-gray-500">
                  No products found
                </h2>
              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Product;