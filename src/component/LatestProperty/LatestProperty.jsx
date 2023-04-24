import React from 'react'
import './latestproperty.css'
import {latestpropertyData} from '../../data/latestpropertyData'

const LatestProperty = () => {
  return (
    <div className='latestProperty-container'>
        <div className="title">
            <h1 className="heading title-main">
            Latest Properties
            </h1>
            <p className="title-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt cum,
            reprehenderit mollitia, harum atque provident esse ipsa eaque quaerat,
            </p>
      </div>

      <div className="latestproperty-btn">
        <button className='btn'> For Sale </button>
        <button className='btn'> Apartment </button>
        <button className='btn'> Villas </button>
        <button className='btn'> Rent </button>
        <button className='btn'> House </button>
      </div>

      <div className="latestproperty-list">
        
        {latestpropertyData.map((propertydata, i) => (

        <div className="latestproperty-list-details" key={i}>

        <div className="latestproperty-list-img" style={{ backgroundImage:`url(${propertydata.image})` }}>
          <button className='btn btn1'> Featured </button>
          <button className='btn btn2'> Sale </button>
          <button className='btn btn3'> Rent </button>

        </div>

        <h4> {propertydata.propertyName}</h4>
        <h3> {propertydata.price}</h3>
        <p>
          {propertydata.description}
         </p>

         <div className="latestproperty-area">
          <span>Car {propertydata.numberOfCar}</span>
          <span> Bike {propertydata.numberOfBike}</span>
          <span> {propertydata.squareFeet} ft</span>
         </div>

         <div className="latestproperty-profile">
          <img src={ propertydata.profilePicture } className='latestproperty-profile-img' alt="" />
          <p> John Kingler </p>
         </div>
 
          </div>                
                ))}
      </div>
          <button className='load-more-message btn'> Load More</button>
      
    </div>
  )
}

export default LatestProperty