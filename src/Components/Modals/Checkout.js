import React from 'react'

function Checkout() {
  return (
    <div className='modal-container'>
        <div className='login-form signup-form checkout-container'>

            <h3>Checkout</h3>

            <form>
                <div>
                    <input type='name' placeholder='Card Number' name='name' />
                </div>
                <div>
                    <input type='number' placeholder='Expiry date' name='email' />
                </div>
                <div>
                    <input type='number' placeholder='CVV/CVV2' name='number' />
                </div>
                <div>
                    <input type='password' placeholder='Card pin' name='password' />
                </div>
                <div>
                    <button>Make Payment</button>
                </div>
            </form>

            </div>
    </div>
  )
}

export default Checkout