import React from 'react'
import './hero.css'
const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="overlay"></div>
                    <div className="text">
                        <h1>Learn To Drive With Confidence</h1>
                        <div className="button">
                            <button className='one'>Learn More</button>
                            <button className='two'>Our Courses</button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="box">
                        <i className='fa fa-car'></i>
                        <div className="info">
                            <h2>Easy Driving Learn</h2>
                            <p>Clita erat ipsum lorem sit sed stet duo justo erat amet</p>
                        </div>
                    </div>
                    <div className="box">
                        <i className='fa fa-users'></i>
                        <div className="info">
                            <h2>National Instructor</h2>
                            <p>Clita erat ipsum lorem sit sed stet duo justo erat amet</p>
                        </div>
                    </div>
                    <div className="box">
                        <i className='fa fa-file-alt'></i>
                        <div className="info">
                            <h2>Get licence</h2>
                            <p>Clita erat ipsum lorem sit sed stet duo justo erat amet</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
