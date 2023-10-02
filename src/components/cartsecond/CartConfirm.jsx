import React from 'react'
import "./cartconfirm.css"
import Forms from '../forms/Forms'
import Selecteditems from '../itemselected/Selecteditems'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const CartConfirm = () => {
  return (
    <>
    <Navbar/>
    <div className='gridcontainer'>
    <div className='head'>
    <p>Items you have selected</p>
    <Selecteditems className="items"/>
    </div>
    <div>
    <Forms className="form"/>
    
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default CartConfirm