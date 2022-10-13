import React from 'react'

function Notify() {
  return (
    <div className='notify default-padding'>
        <div className='notify-info'>
            <h2>Get notified when we update!</h2>
            <p>Get notified when we add new items to our specials menu, update our price list of have promos!</p>
        </div>
        <div className='notify-form'>
            <input type='email' placeholder='gregphillips@gmail.com'/>
            <button>Get notified</button>
        </div>
    </div>
  )
}

export default Notify