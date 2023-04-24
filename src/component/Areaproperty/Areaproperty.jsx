import React from 'react'
import './areaproperty.css'


import { areaPropertyData } from '../../data/areaPropertyData'

const Areaproperty = () => {
  return (
    <div className='area-property-container'>
      <div className="title">
        <h1 className="heading title-main">
          Properties By Areas
        </h1>
        <p className="title-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt cum,
          reprehenderit mollitia, harum atque provident esse ipsa eaque quaerat,

        </p>
      </div>


      <div className="properties-location">

        {areaPropertyData.map((areaData, i) => (


          <div className='properties-location-detail' key={i}>
            <img src={areaData.image} alt="" />

            <div className="properties-location-place">
              <p className='name-of-place'> {areaData.nameOfCity}</p>
              <p className='listing count'> {areaData.listingNumber} listing</p>

            </div>

          </div>

        ))}
      </div>

    </div>




  )
}

export default Areaproperty