import React from 'react'
import './features.css'
import Heading from '../common/Heading'

const FeaturesCard = () => {
    return (
        <>
            <div className="features">
                <div className="container grid2 flexsm">
                    <div className="left">
                        <Heading title='WHY CHOOSE US!' subtitle='Best Driving Training Agency In Your City'/>
                        <div className="features-info">
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className="check">
                                <div className="one-check">
                                    <div className="fully">
                                        <i className='fa fa-check'></i>
                                        <span>Fully Licensed</span>
                                        <p>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</p>
                                    </div>
                                    <div className="afordable">
                                        <i className='fa fa-check'></i>
                                        <span>Afordable Fee</span>
                                        <p>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</p>
                                    </div>
                                </div>
                                <div className="two-check">
                                    <div className="online ">
                                        <i className='fa fa-check'></i>
                                        <span>Online Tracking</span>
                                        <p>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</p>
                                    </div>
                                    <div className="best">
                                        <i className='fa fa-check'></i>
                                        <span>Best Trainers</span>
                                        <p>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="img">
                            <img src="./img/about-2.jpg" alt="" />
                            <img src="./img/about-1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturesCard
