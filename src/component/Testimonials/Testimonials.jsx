import React, { useState } from 'react'
import './testimonial.css'
import { testimonialsData } from '../../data/testimonialsData'
import rightarrow from '../../assets/rightArrow.png'
import leftarrow from '../../assets/leftArrow.png'


const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (

        <div className='testimonial-container'>
            <div className="testimonial-title">
                <h1 className="heading testimonial-title-main">
                    Testimonials
                </h1>
                <p className="testimonial-title-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt cum,
                    reprehenderit mollitia, harum atque provident esse ipsa eaque quaerat,
                </p>
            </div>

            <div className="testimonial-main-content">

                <div className="testimonial-content">
                    <p className="their-saying-content">
                        {testimonialsData[selected].review}
                    </p>

                    <div className='changing-arrow'>
                        <p className="who-say">{testimonialsData[selected].name}<span> - {testimonialsData[selected].status}</span></p>

                        <div className='changing-arrow-div'>

                            <img

                                onClick={() => {
                                    selected === 0 ? setSelected(tLength - 1)
                                        : setSelected((prev) => prev - 1);
                                }}

                                src={leftarrow} alt="" />

                            <img

                                onClick={() => {
                                    selected === tLength - 1 ? setSelected(0)
                                        : setSelected((prev) => prev + 1);
                                }}

                                src={rightarrow} alt="" />

                        </div>
                    </div>
                </div>


                <div className="testimonial-picture">

                    <div className="image-item">
                        <span></span>
                        <span className='span2'></span>
                        <img className='timage' src={testimonialsData[selected].image} alt="" />
                    </div>
                </div>
        
        </div>
        </div>
    )
}

export default Testimonials