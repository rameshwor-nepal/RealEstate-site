import React from 'react'
import './navbar.css'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/instagram.png'
import logo from '../../assets/logo1.png'

const Navbar = () => {
    return (
        <nav className='navbar-container'>
            <section className="upper-navbar">
                <div className="navbar-socialmedia">
                    <div className="navbar-socialmedia-img-div">
                        <img className='navbar-socialmedia-img' src={facebook} alt="" />
                        <img className='navbar-socialmedia-img' src={youtube} alt="" />
                        <img className='navbar-socialmedia-img' src={instagram} alt="" />
                    </div>
                </div>

                <div className="navbar-contactinfo">
                    <p className="contact-number"> +977-9863427261</p>
                    <p className="contact-email"> myhome01@gmail.com</p>
                    <p className="contact-number"> New Road, Kathmandu</p>
                </div>
            </section>

            <section className='lower-navbar'>
                <img className='logo-img' src={logo} alt="" />
                <div className="menus">
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Property
                        </li>
                        <li>
                            Blogs
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Contact Us
                        </li>
                    </ul>
                </div>

            </section>
        </nav>
    )
}

export default Navbar