import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import { Mycontext } from './Mycontext'
import Card from './Card'
const Wishlist = ({cartcount}) => {
  const {Wishlistdata,setWishlistdata}=useContext(Mycontext);
  console.log(Wishlistdata);
  return (
    <div>
      <Navbar2 cartcount={cartcount}/>
      <div className='bg-[#F8FAFC] w-screen min-h-screen flex gap-10 flex-wrap px-8 py-4 justify-center md:justify-normal flex-wrap'>
        {
          Wishlistdata.map((el,idx)=>{
            return <Card el={el} key={idx}/>
          
          })
        }
      </div>
    </div>
  )
}

export default Wishlist
