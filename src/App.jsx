// import React, { useContext, useEffect } from "react";

// import Navbar from "./Comp/Navbar";
// import { Route, Routes } from "react-router-dom";
// import Home from "./Home/Home";
// import Category from "./Category/Category";
// import Product from "./Products/Product";
// import Deals from "./Deals/Deals";
// import Account from "./Comp/Account";
// import Cart from "./Comp/Cart";
// import Wishlist from "./Comp/Wishlist";
// import { Mycontext } from "./Comp/Mycontext";
// import axios from "axios";
// const App = () => {

  
//   let {setMaindata,maindata,Cartdata}=useContext(Mycontext);

//   useEffect(()=>{
//       async function getdata() {
//     let res =await axios.get("http://localhost:3000/products");
//     // console.log(res.data.limit=100);
//     console.log(res.data);
//     setMaindata(res.data);
    
//   }
// getdata();

//   },[]);

 



//   return ( 
//     <div className="w-screen bg-white min-h-screen">
//       {/* */}
//       <Routes>
//         <Route path="/" element={<Home cartcount={Cartdata.length}/>}/>
//          <Route path="/Category" element={<Category cartcount={Cartdata.length}/>}/>
//           <Route path="/Product" element={<Product cartcount={Cartdata.length}/>}/>
//            <Route path="/Deals" element={<Deals cartcount={Cartdata.length}/>}/>
//            <Route path="/wishlist" element={<Wishlist cartcount={Cartdata.length}/>}/>
//            <Route path="/account" element={<Account cartcount={Cartdata.length}/>}/>
//            <Route path="/cart" element={<Cart cartcount={Cartdata.length}/>}/>
//       </Routes>
//     </div>
//   );
// };

// export default App;
import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Home from "./Home/Home";
import Category from "./Category/Category";
import Product from "./Products/Product";
import Deals from "./Deals/Deals";
import Account from "./Comp/Account";
import Cart from "./Comp/Cart";
import Wishlist from "./Comp/Wishlist";
import { Mycontext } from "./Comp/Mycontext";

const App = () => {
  const {
    setMaindata,
    Cartdata,
  } = useContext(Mycontext);

  // Load products
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(
          "http://localhost:3000/products"
        );

        console.log(
          "Products:",
          response.data
        );

        setMaindata(response.data);
      } catch (error) {
        console.error(
          "Products error:",
          error
        );
      }
    }

    getProducts();
  }, [setMaindata]);

  return (
    <div className="w-screen bg-white min-h-screen">

      <Routes>

        <Route
          path="/"
          element={
            <Home
              cartcount={Cartdata?.length}
            />
          }
        />

        <Route
          path="/Category"
          element={
            <Category
              cartcount={Cartdata?.length}
            />
          }
        />

        <Route
          path="/Product"
          element={
            <Product
              cartcount={Cartdata?.length}
            />
          }
        />

        <Route
          path="/Deals"
          element={
            <Deals
              cartcount={Cartdata?.length}
            />
          }
        />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              cartcount={Cartdata?.length}
            />
          }
        />

        <Route
          path="/account"
          element={
            <Account
              cartcount={Cartdata?.length}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartcount={Cartdata?.length}
            />
          }
        />

      </Routes>

    </div>
  );
};

export default App;