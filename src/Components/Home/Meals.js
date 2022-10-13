import React from 'react'
import tab1Image from '../../Assets/home/tab-1-home.png'
import tab2Image from '../../Assets/home/tab-2-home.png'
import tab3Image from '../../Assets/home/tab-3-home.png'


function Meals() {
  return (
    <div className='meals default-padding'>
        <div className='meal-header'>
            <h2>Special Meals of the day!</h2>
            <p>Check our sepecials of the day and get discounts on all our meals and
                 swift delivery to what ever location within Ilorin.
            </p>
        </div>

        <div className='meal-tabs'>
          <div className='meal-tab'>
            <div className='tab-image'>
              <img src= {tab1Image} alt=''/>
            </div>
            <h3>Stir fry Pasta</h3>
            <p>Stir fry pasta yada yada yada because of Sesan</p>
          </div>

          <div className='meal-tab'>
            <div className='tab-image'>
              <img src= {tab2Image} alt='' />
            </div>
            <h3>Meat Balls</h3>
            <p>Stir fry pasta yada yada yada because of Sesan</p>
          </div>

          <div className='meal-tab'>
            <div className='tab-image'>
              <img src= {tab3Image} alt=''/>
            </div>
            <h3>Burger Meal</h3>
            <p>Stir fry pasta yada yada yada because of Sesan</p>
          </div>
        </div>
    </div>
  )
}

export default Meals