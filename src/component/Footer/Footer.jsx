import React from 'react'
import './footer.css'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className="footer-content">
            <h3>RealEstate Site</h3>
            <p>Real Estate site —  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Cupiditate perferendis, tempore at ab quam consequuntur cum delectus quo officia 
                accusantium harum. Ullam natus laboriosam repudiandae labore atque, est ipsa dolorum.
            </p>
            
           <ul className="socials">
            <li>
                <a href=""><img src={facebook} alt="" /></a>
            </li>
            <li>
                <a href=""><img src= {instagram} alt="" /></a>
            </li>
            <li>
                <a href=""><img src={youtube} alt="" /></a>
            </li>
            <li>
                <a href=""><img src= {twitter} alt="" /></a>
            </li>
           </ul>

        <div class='footer-bottom'>
        <p>copyright &copy;2021 | RealEstate Site </p>
      </div>

            
        </div>
    </footer>
  )
}

export default Footer