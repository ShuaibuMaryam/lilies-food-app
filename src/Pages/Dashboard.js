import React, { useState } from 'react'
import DashboardTab from '../Components/Dashboard/DashboardTab.js'
import SideNav from '../Components/Dashboard/SideNav'
import DashboardHeader from '../Components/Dashboard/DashboardHeader'
import OrderModal from '../Components/Modals/OrderModal.js'
import CartModal from '../Components/Modals/CartModal.js'
import Checkout from '../Components/Modals/Checkout.js'
import AddToCart from '../Components/Modals/AddToCart.js'

function Dashboard() {

  const [openOrderModal, setOpenOrderModal] = useState(false)

  const handleOrderChange = () => {
    setOpenOrderModal(true)
  }

  const[openCartModal, setOpenCartModal] = useState(false)

  const handleCartChange = () => {
    setOpenCartModal(true)
  }

  const [openCheckoutModal, setOpenCheckoutModal] = useState(false)

  const handleCheckoutChange = () => {
    setOpenCheckoutModal(true)
  }

  const [openAddToCartModal, setOpenAddToCartModal] = useState(false)

  const handleAddToCartChange = () => {
    setOpenAddToCartModal(true)
  }


  return (
    <div>
      {openOrderModal && <OrderModal />}

      {openCartModal && <CartModal openCheckoutModal = {handleCheckoutChange} />}

      {openCheckoutModal && <Checkout />}

      {openAddToCartModal && <AddToCart />}

      <div className='dashboard'>

          <SideNav openOrderModal = {handleOrderChange} openCartModal = {handleCartChange}/>


          <div>

            <DashboardHeader />

            <DashboardTab openAddToCartModal= {handleAddToCartChange}/>

          </div>
          
      </div>

    </div>
  )
}

export default Dashboard