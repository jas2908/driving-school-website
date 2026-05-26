import React from 'react'
import Heading from '../common/Heading'
import './testimonial.css'

const TestimonialCard = () => {
    return (
        <>
            <div className="testimonial container">
                <Heading title='TESTIMONIAL' subtitle='What Our Clients Say!'/>
                <div className="information">
                    <div className="img">
                        <img src="./img/testimonial-1.jpg" alt="" />
                        <i className='fa fa-quote-left'></i>
                    </div>
                    <p className='fee'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <hr />
                    <div className="text">
                            <h3>Client Name</h3>
                            <p className='pro'>Profession</p>
                    </div>
                    <div className="dots">
                        <i className='active'></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialCard
