import React from 'react'
import { useState } from 'react'
import addToCartImage from '../../Assets/dashboard/add-to-cart-img.png'

function AddToCart() {

    const [addToCartCount, setAddToCartCount] = useState(0)

    const addCartCount = () => {
        setAddToCartCount(addToCartCount + 1)
    }

    const reduceCartCount = () => {
        setAddToCartCount(addToCartCount - 1)
    }

  return (
    <div className='modal-container'>
        <div className='add-to-cart'>

            <div className='add-to-cart-img'>
                <img src={addToCartImage}/>
            </div>

            <div className='add-to-cart-text'> 
                <h3>Blueberry Toasts and smoothie</h3>
                <p>Just have a single bite of this Black Forest pastry and it will all make
                     a proper sense to you. The kick of cherry and rich chocolate of this super light,
                     airy pastry will definitely make you feel "wow". The perfect combination of cherry 
                     cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.
                </p>
            </div>

            <div className='add-to-cart-desc'>
                <span>NGN 2000.00</span>
                <span>10-20 Mins</span>
                <span>10 Pcs Avail</span>
            </div>

            <div className='add-to-cart-footer'>
                <div>
                    <button className='add-remove' onClick={reduceCartCount}>-</button>
                    <div className='add-remove-value'><span>{addToCartCount}</span></div>
                    <button className='add-remove' onClick={addCartCount}>+</button>
                </div>
                <div>
                    <button className='add-to-cart-btn'>Add to cart</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AddToCart