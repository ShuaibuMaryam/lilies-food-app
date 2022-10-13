import React from 'react'
import orderModalImage from '../../Assets/dashboard/card2-img.png'


function CartModal({openCheckoutModal}) {
    const orderData = [
        {
            id: 1,
            info: {
                name: "Stir Fry Pasta",
                img: orderModalImage
                },
            quantity: "4",
            unitPrice: " N 1,000.00",
            subTotal: "N 4000.00"
        },
        {
            id: 2,
            info: {
                name: "Stir Fry Pasta",
                img: orderModalImage
                },
            quantity: "4",
            unitPrice: " N 1,000.00",
            subTotal: "N 4000.00"
        },
        {
            id: 3,
            info: {
                name: "Stir Fry Pasta",
                img: orderModalImage
                },
            quantity: "4",
            unitPrice: " N 1,000.00",
            subTotal: "N 4000.00"
        },
    ]

  return (
    <div className='modal-container'>

        <div className='order-table'>
            <div className='overlay'></div>
            <h1>Your Cart</h1>
            <table>
                <thead>
                    <tr>
                        <th className='span-2'>Item</th>
                        <th>Qty</th>
                        <th>Unit Price</th>
                        <th>Sub-total</th>
                    </tr>
                </thead>

                <tbody>
                    {orderData.map((item) => (
                        <tr key= {item.id}>
                            <td style={{width: "55%"}}>
                                <div className='order-modal-description'>
                                    <div className='order-modal-image'>
                                        <img src={item.info.img}/>
                                    </div>
                                    <div className='order-modal-desc-text'>
                                        <h4>{item.info.name}</h4>
                                        <button>Remove</button>
                                    </div>
                                </div>
                            </td>

                            <td className='order-modal-qty'><span>{item.quantity}</span></td>

                            <td className='class-modal-price'><span>{item.unitPrice}</span></td>

                            <td className='class-modal-price'>
                                <span>{item.subTotal}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
            <div className='cart-modal-footer'>
                <span>Total: <span>N 30,000.00</span></span>
            </div>
            <div className='cart-modal-footer-button' onClick={openCheckoutModal}><button>checkout</button></div>
        </div>
    </div>
  )
}

export default CartModal