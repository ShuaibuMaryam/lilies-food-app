import React from 'react'
import card1Image from '../../Assets/dashboard/card1-img.png'
import card2Image from '../../Assets/dashboard/card2-img.png'
import card3Image from '../../Assets/dashboard/card3-img.png'


const Cards = [
    {
        id: 1,
        image: card1Image,
        heading: 'Stir Fry Pasta',
        description: 'The in-house pasta and chicken by chef Moose',
        cost: 'N 1,000.00',
        button: 'Add to cart'
    },

    {
        id: 2,
        image: card2Image,
        heading: 'Stir Fry Pasta',
        description: 'The in-house pasta and chicken by chef Moose',
        cost: 'N 1,000.00',
        button: 'Add to cart'
    },

    {
        id: 3,
        image: card3Image,
        heading: 'Stir Fry Pasta',
        description: 'The in-house pasta and chicken by chef Moose',
        cost: 'N 1,000.00',
        button: 'Add to cart'
    },

    {
        id: 4,
        image: card1Image,
        heading: 'Stir Fry Pasta',
        description: 'The in-house pasta and chicken by chef Moose',
        cost: 'N 1,000.00',
        button: 'Add to cart'
    }
]


function DashboardTab(){
        
    const FoodTab = Cards.map(card => 
        <DashboardMain key={card.id} image={card.image} heading={card.heading} description={card.description} cost={card.cost} />
    )
    return (
        <div className='dashboard-cards'>{FoodTab}</div>
    )
}
export default DashboardTab

function DashboardMain({image, heading, description, cost, openAddToCartModal}) {
  return (
    
    <div className='card'>
      <div className='card-image'>
          <img src={image}/>
      </div>
      <div className='card-text'>
          <h5>{heading}</h5>
          <p>{description}</p>
      </div>
      <div className='card-footer'>
          <span>{cost}</span>
          <button onClick={openAddToCartModal}>Add to cart</button>
      </div>
    </div>
  )
}

