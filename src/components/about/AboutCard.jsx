import React from 'react'
import Heading from '../common/Heading'
import './about.css'

const AboutCard = () => {
    return (
        <>
            <div className="about">
                <div className="container grid2 flexsm">
                    <div className="left">
                        <div className="img">
                            <img src="./img/about-2.jpg" alt="" />
                            <img src="./img/about-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <Heading title='ABOUT US' subtitle='We Help Students To Pass Test & Get A License On The First Try'/>
                        <div className="about-info">
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className="check">
                                <div className="one-check">
                                    <div className="fully">
                                        <i className='fa fa-check'></i>
                                        <span>Fully Licensed</span>
                                    </div>
                                    <div className="online">
                                        <i className='fa fa-check'></i>
                                        <span>Online Tracking</span>
                                    </div>
                                </div>
                                <div className="two-check">
                                    <div className="afordable ">
                                        <i className='fa fa-check'></i>
                                        <span>Afordable Fee</span>
                                    </div>
                                    <div className="best">
                                        <i className='fa fa-check'></i>
                                        <span>Best Trainers</span>
                                    </div>
                                </div>
                            </div>
                            <div className="button flex">
                                <div className="button1">
                                    Read More
                                </div>
                                <div className="button2">
                                    <i className='fa fa-phone'></i>
                                    <span>+012 345 6789</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCard
