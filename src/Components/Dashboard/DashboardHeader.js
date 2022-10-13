import React from 'react'
import profilePhoto from '../../Assets/dashboard/profile-photo.png'


function DashboardHeader() {

  let user = JSON.parse(sessionStorage.getItem('user'))

  return (

    <div className='dashboard-main'>

      <div className='dashboard-header'>
        
        <div className='dashboard-header-text'>
            <h3>{`Good morning, ${user?.name}!`}</h3>
            <p>What delicious meal are you craving today?</p>
        </div>

        <div className='dashboard-profile-photo'>
            <img src={profilePhoto} alt=''/>
        </div>

      </div>

    </div>
  )
}

export default DashboardHeader