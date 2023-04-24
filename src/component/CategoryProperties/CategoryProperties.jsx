import React from 'react'
import './categoryproperty.css'
import home1 from '../../assets/home1.jpg'
import home2 from '../../assets/home2.jpg'
import home3 from '../../assets/home3.jpg'
import home4 from '../../assets/home4.jpg'
import {latestpropertyData} from '../../data/latestpropertyData'


const CategoryProperties = () => {
  return (
    <>
    
      <div className='categoryproperties-container'>
        <div className="title">
          <h1 className="heading title-main">
            Properties by Category
          </h1>
          <p className="title-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt cum,
            reprehenderit mollitia, harum atque provident esse ipsa eaque quaerat,
          </p>
        </div>

        <div className="grid-image">
          <div className="grid-image-left">
            <div style={{ backgroundImage:`url(${home1})` }} className="grid-image-left-upper">
              Apartment
            </div>
            <div  className="grid-image-left-lower">
              <div style={{ backgroundImage:`url(${home2})` }} className="grid-image-left-lower1">
                Houses
              </div>
              <div style={{ backgroundImage:`url(${home3})` }} className="grid-image-left-lower1">
                Offices
              </div>
            </div>
          </div>

          <div className="grid-image-right">
            <div className="grid-image-right-upper">

              <div style={{ backgroundImage:`url(${home4})` }} className="grid-image-right-lower1">
                Houses
              </div>
              <div style={{ backgroundImage:`url(${home1})` }} className="grid-image-rigth-lower1">
                Offices
              </div>

            </div>
            <div style={{ backgroundImage:`url(${home2})` }} className="grid-image-right-lower">
              Apartment
            </div>
            


          </div>

        </div>

      </div>

      {/* for properties for rent */}
      
      <div className='rent-property-container'>
        <div className="title">
            <h1 className="heading title-main">
            Properties for Rent
            </h1>
            <p className="title-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt cum,
            reprehenderit mollitia, harum atque provident esse ipsa eaque quaerat,
            </p>
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
    
    </>
  )
}

export default CategoryProperties