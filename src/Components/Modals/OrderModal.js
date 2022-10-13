import React from 'react'
import orderModalImage from '../../Assets/dashboard/card2-img.png'

function OrderModal() {

    const orderData = [
        {
            id: 1,
            info: {
                name: "Stir Fry Pasta",
                img: orderModalImage
                },
            quantity: "4",
            price: " N 1,000.00",
            status: "Delivered"
        },
        {
            id: 2,
            info: {
                name: "Stir Fry Pasta",
                img: orderModalImage
                },
            quantity: "4",
            price: " N 1,000.00",
            status: "Delivered"
        },
        {
            id: 3,
            info: {
                name: "Stir Fry Pasta",
                img: orderModalImage
                },
            quantity: "4",
            price: " N 1,000.00",
            status: "Cooking"
        },
        {
            id: 3,
            info: {
                name: "Stir Fry Pasta",
                img: orderModalImage
                },
            quantity: "4",
            price: " N 1,000.00",
            status: "Cooking"
        },
        {
            id: 4,
            info: {
                name: "Stir Fry Pasta",
                img: orderModalImage
                },
            quantity: "4",
            price: " N 1,000.00",
            status: "Delivered"
        },
    ]


  return (
    <div className='modal-container'>
        <div className='overlay'></div>
        <div className='order-table'>
            <h1>Your Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th className='span-2'>Item</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {orderData.map((item) => (
                        <tr key= {item.id}>
                            <td style={{width: "56%"}}>
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

                            <td className='class-modal-price'><span>{item.price}</span></td>

                            <td className='class-modal-status'>
                                <span style={{
                                    color: item.status === "Delivered" ? "#3A8F4D" : "#FF3A44"
                                    }}>{item.status }
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    </div>
  )
}

export default OrderModal