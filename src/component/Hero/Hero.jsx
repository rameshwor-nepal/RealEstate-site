import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import './hero.css'

const Hero = () => {
  return (
    <>
      <div className='hero-container'>
        <Navbar />

        <h1 className='hero-title'>Find Your Dream House </h1>
        <p className="hero-description">
          We are recognized for exceeding the client expectations and delivering great
          result through great hardwork, dedication, ease of process, and extraordinary services to the worldwide clients
        </p>
      </div>
      <div className="searchbar">
        <div className="searchbar-btns">
          <button className='rental'> Rentals </button>
          <button className='sales-buy' id='sales'> Sales </button>
          <button className='sales-buy' id='buy'> Buys </button>
        </div>

        <div className="searchbar-input">
          <div className="searchbar-input-type">
            <p>
              Property Type
            </p>
            <input type="text" name="property-type" placeholder='Property Type' />

          </div>
          <div className="searchbar-input-type">
            <p>
              Min Size
            </p>
            <input type="text" name="Min size" placeholder='Min Size'/>

          </div>
          <div className="searchbar-input-type">
            <p>
              Min lot Size
            </p>
            <input type="text" name="min-lot-size" placeholder='Min Lot Size' />

          </div>
          <div className="searchbar-input-type">
            <p>
              Property Status
            </p>
            <input type="text" name="property-type" />

          </div>
          <div className="search-btn-div">
            <button className='btn search-btn'>Search</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Hero